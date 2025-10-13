// import { useNavigate } from "react-router-dom";
// import { Leaf } from "lucide-react";

// export default function Landing() {
//   const navigate = useNavigate();

//   return (
// <div className="min-h-screen bg-cream">
//   {/* Hero Section */}
//   <section className="relative overflow-hidden bg-gradient-to-br from-forest-green via-emerald-700 to-forest-green min-h-screen flex items-center">
//     {/* Background Pattern */}
//     <div className="absolute inset-0 opacity-10">
//       <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//     </div>

//     {/* Floating Leaf Icons */}
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <Leaf className="absolute top-20 left-[10%] w-8 h-8 text-light-green opacity-30 animate-float" />
//       <Leaf className="absolute top-40 right-[15%] w-6 h-6 text-light-green opacity-20 animate-float-delayed" />
//       <Leaf className="absolute bottom-32 left-[20%] w-10 h-10 text-light-green opacity-25 animate-float" />
//       <Trees className="absolute top-1/3 right-[8%] w-12 h-12 text-light-green opacity-20 animate-float-delayed" />
//     </div>

//     <div className="container mx-auto px-6 py-20 relative z-10">
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
//           <Globe className="w-4 h-4 text-accent-yellow" />
//           <span className="text-sm text-white font-medium">Aligned with UN SDG 15: Life on Land</span>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//           Join the Movement for a <span className="text-accent-yellow">Greener Future</span>
//         </h1>

//         <p className="text-xl md:text-2xl text-light-green mb-12 max-w-3xl mx-auto leading-relaxed">
//           EcoEngage empowers youth to take real action for our planet through learning, volunteering, and impact challenges.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="group bg-accent-yellow hover:bg-yellow-600 text-forest-green font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//             onClick={() => { window.location.href = '/auth'; }}
//           >
//             <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//             Get Involved
//           </button>
//           <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg border-2 border-white transition-all duration-300 backdrop-blur-sm">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>

//     {/* Scroll Indicator */}
//     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//       <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
//         <div className="w-1 h-3 bg-white/50 rounded-full"></div>
//       </div>
//     </div>
//   </section>

//   {/* About Section */}
//   <section className="py-24 bg-cream">
//     <div className="container mx-auto px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="inline-flex items-center gap-2 bg-forest-green/10 px-4 py-2 rounded-full mb-6">
//           <Target className="w-5 h-5 text-forest-green" />
//           <span className="text-sm text-forest-green font-semibold">Our Mission</span>
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Building a Sustainable Future Together
//         </h2>

//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//           EcoEngage is aligned with <span className="font-semibold text-forest-green">UN SDG 15 — Life on Land</span>. Our mission is to restore ecosystems, promote tree planting, and connect passionate young people with meaningful environmental causes. Together, we're creating lasting change for our planet.
//         </p>
//       </div>
//     </div>
//   </section>

//   {/* Features Section */}
//   <section className="py-24 bg-gradient-to-b from-cream to-white">
//     <div className="container mx-auto px-6">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           How It Works
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Three simple ways to make a real impact on our planet
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {/* Feature 1 */}
//         <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
//           <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//             <Target className="w-8 h-8 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Track Your Green Actions
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Monitor your environmental impact in real-time. Every action counts, from planting trees to reducing waste.
//           </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
//           <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//             <Leaf className="w-8 h-8 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Join Eco Challenges
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Participate in exciting sustainability challenges. Compete with friends and make conservation fun and rewarding.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
//           <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//             <Users className="w-8 h-8 text-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Connect with Others
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Join a community of passionate changemakers. Share ideas, inspire others, and grow together.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* Impact Section */}
//   <section className="py-24 bg-gradient-to-br from-forest-green via-emerald-700 to-forest-green relative overflow-hidden">
//     <div className="absolute inset-0 opacity-10">
//       <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//     </div>

//     <div className="container mx-auto px-6 relative z-10">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Our Impact So Far
//         </h2>
//         <p className="text-lg text-light-green max-w-2xl mx-auto">
//           Together, we're making real change happen
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {/* Stat 1 */}
//         <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
//             <Trees className="w-8 h-8 text-forest-green" />
//           </div>
//           <div className="text-5xl font-bold text-white mb-2">10K+</div>
//           <div className="text-lg text-light-green">Trees Planted</div>
//         </div>

//         {/* Stat 2 */}
//         <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
//             <Users className="w-8 h-8 text-forest-green" />
//           </div>
//           <div className="text-5xl font-bold text-white mb-2">2K+</div>
//           <div className="text-lg text-light-green">Volunteers</div>
//         </div>

//         {/* Stat 3 */}
//         <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
//             <Calendar className="w-8 h-8 text-forest-green" />
//           </div>
//           <div className="text-5xl font-bold text-white mb-2">100+</div>
//           <div className="text-lg text-light-green">Eco Events</div>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* CTA Footer Section */}
//   <section className="py-24 bg-cream">
//     <div className="container mx-auto px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <Leaf className="w-16 h-16 text-forest-green mx-auto mb-6" />

//         <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//           Be Part of the Change
//         </h2>

//         <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
//           Every action matters. Start your journey towards a sustainable future today.
//         </p>

//         <button className="group bg-accent-yellow hover:bg-yellow-600 text-forest-green font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center gap-3">
//           Join Now
//           <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </section>

//   {/* Footer */}
//   <footer className="bg-forest-green py-8">
//     <div className="container mx-auto px-6">
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="flex items-center gap-2">
//           <Leaf className="w-6 h-6 text-accent-yellow" />
//           <span className="text-white font-bold text-lg">EcoEngage</span>
//         </div>

//         <div className="flex gap-8 text-sm">
//           <a href="#contact" className="text-light-green hover:text-white transition-colors">Contact</a>
//           <a href="#about" className="text-light-green hover:text-white transition-colors">About</a>
//           <a href="#privacy" className="text-light-green hover:text-white transition-colors">Privacy</a>
//         </div>
//       </div>

//       <div className="text-center mt-6 text-light-green text-sm">
//         <p>© 2025 EcoEngage. Making the world greener, one action at a time.</p>
//       </div>
//     </div>
//   </footer>
// </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Calendar, Globe, Leaf, Target, Trees, Users } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-forest-green via-emerald-700 to-forest-green min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Floating Leaf Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Leaf className="absolute top-20 left-[10%] w-8 h-8 text-light-green opacity-30 animate-float" />
            <Leaf className="absolute top-40 right-[15%] w-6 h-6 text-light-green opacity-20 animate-float-delayed" />
            <Leaf className="absolute bottom-32 left-[20%] w-10 h-10 text-light-green opacity-25 animate-float" />
            <Trees className="absolute top-1/3 right-[8%] w-12 h-12 text-light-green opacity-20 animate-float-delayed" />
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Globe className="w-4 h-4 text-accent-yellow" />
                <span className="text-sm text-white font-medium">
                  Aligned with UN SDG 15: Life on Land
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Join the Movement for a{" "}
                <span className="text-accent-yellow">Greener Future</span>
              </h1>

              <p className="text-xl md:text-2xl text-light-green mb-12 max-w-3xl mx-auto leading-relaxed">
                EcoEngage empowers youth to take real action for our planet
                through learning, volunteering, and impact challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group bg-accent-yellow hover:bg-yellow-600 text-forest-green font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Get Involved
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg border-2 border-white transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-forest-green/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-forest-green" />
                <span className="text-sm text-forest-green font-semibold">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building a Sustainable Future Together
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                EcoEngage is aligned with{" "}
                <span className="font-semibold text-forest-green">
                  UN SDG 15 — Life on Land
                </span>
                . Our mission is to restore ecosystems, promote tree planting,
                and connect passionate young people with meaningful
                environmental causes. Together, we're creating lasting change
                for our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple ways to make a real impact on our planet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Track Your Green Actions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor your environmental impact in real-time. Every action
                  counts, from planting trees to reducing waste.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Eco Challenges
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Participate in exciting sustainability challenges. Compete
                  with friends and make conservation fun and rewarding.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-light-green transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-forest-green to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Connect with Others
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a community of passionate changemakers. Share ideas,
                  inspire others, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 bg-gradient-to-br from-forest-green via-emerald-700 to-forest-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Impact So Far
              </h2>
              <p className="text-lg text-light-green max-w-2xl mx-auto">
                Together, we're making real change happen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Stat 1 */}
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
                  <Trees className="w-8 h-8 text-forest-green" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">10K+</div>
                <div className="text-lg text-light-green">Trees Planted</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
                  <Users className="w-8 h-8 text-forest-green" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">2K+</div>
                <div className="text-lg text-light-green">Volunteers</div>
              </div>

              {/* Stat 3 */}
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-forest-green" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-lg text-light-green">Eco Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Leaf className="w-16 h-16 text-forest-green mx-auto mb-6" />

              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Be Part of the Change
              </h2>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Every action matters. Start your journey towards a sustainable
                future today.
              </p>

              <button
                onClick={() => navigate("/login")}
                className="group bg-accent-yellow hover:bg-yellow-600 text-forest-green font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center gap-3"
              >
                Join Now
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-forest-green py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-accent-yellow" />
                <span className="text-white font-bold text-lg">EcoEngage</span>
              </div>

              <div className="flex gap-8 text-sm">
                <a
                  href="#contact"
                  className="text-light-green hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#about"
                  className="text-light-green hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#privacy"
                  className="text-light-green hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </div>
            </div>

            <div className="text-center mt-6 text-light-green text-sm">
              <p>
                © 2025 EcoEngage. Making the world greener, one action at a
                time.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
