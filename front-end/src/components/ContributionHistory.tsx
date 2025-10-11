import type { ComponentType, SVGProps } from "react";
import { useState, useEffect } from "react";
import { DollarSign, Users, Trash2, Droplets } from "lucide-react";
import { supabase, Contribution } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

export default function ContributionHistory() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchContributions();
    }
  }, [user]);

  const fetchContributions = async () => {
    try {
      const { data, error } = await supabase
        .from("contributions")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContributions(data || []);
    } catch (err) {
      console.error("Error fetching contributions:", err);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
      donation: DollarSign,
      volunteer: Users,
      cleanup: Trash2,
      conservation: Droplets,
    };
    return icons[type] || Users;
  };

  const getColor = (type: string) => {
    const colors: Record<string, string> = {
      donation: "bg-amber-100 text-amber-700",
      volunteer: "bg-blue-100 text-blue-700",
      cleanup: "bg-green-100 text-green-700",
      conservation: "bg-teal-100 text-teal-700",
    };
    return colors[type] || "bg-slate-100 text-slate-700";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const sampleContributions = [
    {
      id: "1",
      type: "donation",
      description: "Donated to rainforest conservation fund",
      impact: "Helped protect 50 acres of rainforest",
      created_at: "2024-03-15T10:30:00Z",
    },
    {
      id: "2",
      type: "volunteer",
      description: "Volunteered at local park cleanup event",
      impact: "Collected 45kg of waste with 20 volunteers",
      created_at: "2024-03-10T14:00:00Z",
    },
    {
      id: "3",
      type: "cleanup",
      description: "Organized beach cleanup drive",
      impact: "Cleaned 500m of coastline, removed 78kg of plastic",
      created_at: "2024-03-05T09:15:00Z",
    },
    {
      id: "4",
      type: "conservation",
      description: "Planted native trees in restoration zone",
      impact: "Planted 25 trees contributing to habitat restoration",
      created_at: "2024-02-28T11:45:00Z",
    },
    {
      id: "5",
      type: "donation",
      description: "Sponsored wildlife protection program",
      impact: "Supported protection of endangered species",
      created_at: "2024-02-20T16:20:00Z",
    },
  ];

  const displayContributions =
    contributions.length > 0 ? contributions : sampleContributions;

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 h-32"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Contribution History
        </h1>
        <p className="text-slate-600">
          Track your environmental impact over time
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid sm:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="text-sm text-slate-600 mb-1">Total Contributions</div>
          <div className="text-3xl font-bold text-slate-900">
            {displayContributions.length}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="text-sm text-slate-600 mb-1">Donations</div>
          <div className="text-3xl font-bold text-amber-600">
            {displayContributions.filter((c) => c.type === "donation").length}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="text-sm text-slate-600 mb-1">Volunteer Hours</div>
          <div className="text-3xl font-bold text-blue-600">42</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="text-sm text-slate-600 mb-1">Cleanups</div>
          <div className="text-3xl font-bold text-green-600">
            {displayContributions.filter((c) => c.type === "cleanup").length}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Activity Timeline
        </h2>

        <div className="space-y-6 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          {displayContributions.map((contribution, index) => {
            const Icon = getIcon(contribution.type);
            return (
              <div key={contribution.id} className="relative flex gap-6">
                {/* Timeline node */}
                <div
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${getColor(
                    contribution.type
                  )} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-slate-50 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${getColor(
                            contribution.type
                          )} mb-2`}
                        >
                          {contribution.type.charAt(0).toUpperCase() +
                            contribution.type.slice(1)}
                        </span>
                        <h3 className="font-semibold text-slate-900">
                          {contribution.description}
                        </h3>
                      </div>
                    </div>

                    {contribution.impact && (
                      <p className="text-sm text-slate-600 mb-3">
                        <span className="font-medium text-emerald-600">
                          Impact:
                        </span>{" "}
                        {contribution.impact}
                      </p>
                    )}

                    <p className="text-xs text-slate-500">
                      {formatDate(contribution.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {displayContributions.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No contributions yet
            </h3>
            <p className="text-slate-600">Start making a difference today!</p>
          </div>
        )}
      </div>
    </div>
  );
}
