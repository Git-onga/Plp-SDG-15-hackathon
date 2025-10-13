import { useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-600 p-4 rounded-xl">
            <Leaf className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">EcoEngage</h1>
        <p className="text-slate-600 mb-6">
          Protect the Land, One Action at a Time.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
