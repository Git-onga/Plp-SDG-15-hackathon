/* import React, { useState } from "react";

// Define allowed activity types
type ActivityType =
  | "tree_plant"
  | "cleanup"
  | "recycle_1kg"
  | "public_transport_day";

type Props = {
  userId: string;
  onNewActivity?: (activity: unknown) => void;
};

const activityTypes: ActivityType[] = [
  "tree_plant",
  "cleanup",
  "recycle_1kg",
  "public_transport_day",
];

const ActivitySubmit: React.FC<Props> = ({ userId, onNewActivity }) => {
  const [type, setType] = useState<ActivityType>("tree_plant");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          type,
          description,
          date: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      const activity = await res.json();
      onNewActivity?.(activity);
      setDescription("");
      alert("Activity submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit activity.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md shadow-sm bg-white space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Activity type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as ActivityType)}
          className="border rounded px-2 py-1 w-full"
        >
          {activityTypes.map((activity) => (
            <option key={activity} value={activity}>
              {activity.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border rounded px-2 py-1 w-full h-24"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit activity"}
      </button>
    </form>
  );
};

export default ActivitySubmit;
 */

import React, { useState } from "react";

// Define allowed activity types
type ActivityType =
  | "tree_plant"
  | "cleanup"
  | "recycle_1kg"
  | "public_transport_day";

type Props = {
  userId: string;
  onNewActivity?: (activity: unknown) => void;
};

const activityTypes: ActivityType[] = [
  "tree_plant",
  "tree_plant",
  "cleanup",
  "recycle_1kg",
  "public_transport_day",
];

const ActivitySubmit: React.FC<Props> = ({ userId, onNewActivity }) => {
  const [type, setType] = useState<ActivityType>("tree_plant");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          type,
          description,
          date: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      const activity = await res.json();
      onNewActivity?.(activity);
      setDescription("");
      alert("Activity submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit activity.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md shadow-sm bg-white space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Activity type</label>
        <select
          title="select"
          value={type}
          onChange={(e) => setType(e.target.value as ActivityType)}
          className="border rounded px-2 py-1 w-full"
        >
          {activityTypes.map((activity) => (
            <option key={activity} value={activity}>
              {activity.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          title="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border rounded px-2 py-1 w-full h-24"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit activity"}
      </button>
    </form>
  );
};

export default ActivitySubmit;
