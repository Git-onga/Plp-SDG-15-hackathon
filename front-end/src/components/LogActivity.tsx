import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

const getPointsForCategory = (category: string) => {
  switch (category) {
    case "planting":
      return 20;
    case "cleanup":
      return 15;
    case "volunteer":
      return 10;
    case "funding":
      return 5;
    default:
      return 5; // this is a fallback
  }
};

export default function LogActivity() {
  const { profile } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("planting");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    if (!profile) return;

    const points = getPointsForCategory(category);

    const { error } = await supabase.from("activities").insert({
      user_id: profile.id,
      title,
      description,
      category,
      location,
      points_earned: points, //
    });

    if (!error) {
      await supabase
        .from("profiles")
        .update({ eco_points: (profile.eco_points || 0) + points })
        .eq("id", profile.id);

      console.log("this is the point", profile.eco_points);

      setSuccess(true);
      setTitle("");
      setDescription("");
      setLocation("");

    } else {
      alert("Error logging activity: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Log New Activity</h1>

      {success && (
        <div className="mb-4 text-green-700 bg-green-100 px-4 py-2 rounded">
          Activity logged successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          placeholder="Activity Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <select
          title="category options"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="planting">Tree Planting</option>
          <option value="cleanup">Clean Up</option>
          <option value="volunteer">Volunteering</option>
          <option value="funding">Funding</option>
        </select>

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
        >
          {loading ? "Saving..." : "Submit Activity"}
        </button>
      </form>
    </div>
  );
}
