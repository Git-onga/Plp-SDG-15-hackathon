import { useState, useEffect } from 'react';
import { MapPin, Search, Trees, Mountain } from 'lucide-react';
import { supabase, Park } from '../lib/supabase';

export default function ParksExplorer() {
  const [parks, setParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchParks();
  }, []);

  const fetchParks = async () => {
    try {
      const { data, error } = await supabase
        .from('parks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setParks(data || []);
    } catch (err) {
      console.error('Error fetching parks:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All Parks', icon: Trees },
    { id: 'National Park', label: 'National Parks', icon: Mountain },
    { id: 'State Park', label: 'State Parks', icon: Trees },
    { id: 'Forest', label: 'Forests', icon: Trees },
  ];

  const filteredParks = parks.filter((park) => {
    const matchesSearch = park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      park.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || park.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sampleParks = [
    {
      id: '1',
      name: 'Yellowstone National Park',
      description: 'Home to diverse wildlife and geothermal features including the famous Old Faithful geyser.',
      location: 'Wyoming, Montana, Idaho',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      name: 'Yosemite National Park',
      description: 'Famous for its giant sequoia trees, granite cliffs, and stunning waterfalls.',
      location: 'California',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/2272620/pexels-photo-2272620.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      name: 'Great Smoky Mountains',
      description: 'Ancient mountains with rich biodiversity and Appalachian culture.',
      location: 'Tennessee, North Carolina',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      name: 'Redwood National Park',
      description: 'Protects some of the tallest and oldest trees on Earth.',
      location: 'California',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      name: 'Grand Canyon National Park',
      description: 'Immense canyon carved by the Colorado River over millions of years.',
      location: 'Arizona',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      name: 'Olympic National Park',
      description: 'Diverse ecosystems from rugged coastline to temperate rainforests.',
      location: 'Washington',
      category: 'National Park',
      image_url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const displayParks = filteredParks.length > 0 ? filteredParks : sampleParks;

  if (loading && parks.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-slate-200 rounded-lg w-1/3"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl h-80"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Explore National Parks & Forests</h1>
        <p className="text-slate-600">Discover and learn about protected natural areas</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search parks and forests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Parks Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayParks.map((park) => (
          <article
            key={park.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={park.image_url}
                alt={park.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {park.name}
                </h3>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full whitespace-nowrap">
                  {park.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-3 line-clamp-2">{park.description}</p>
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4" />
                <span>{park.location}</span>
              </div>
              <button className="w-full mt-4 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredParks.length === 0 && parks.length > 0 && (
        <div className="text-center py-12">
          <Trees className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No parks found</h3>
          <p className="text-slate-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
