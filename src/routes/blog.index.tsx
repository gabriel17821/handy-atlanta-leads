import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, User, Tag, Clock, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { POSTS, CATEGORIES } from "../lib/blog-data";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Atlanta Junk Removal & Hauling Blog | Come In Handy" },
      {
        name: "description",
        content: "Expert advice on junk removal, decluttering, property clean-outs, and sustainability in Atlanta. Read the latest insights from Aaron at Come In Handy.",
      },
    ],
  }),
});

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? POSTS 
    : POSTS.filter(post => post.category === activeCategory);

  const featuredPost = POSTS[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  return (
    <main className="min-h-screen bg-slate-50 font-body text-slate-800 selection:bg-brand/20">
      {/* Immersive Glassmorphic Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 bg-slate-900 overflow-hidden isolate">
        {/* Abstract Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-sky-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_80%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-200 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-2xl">
            <Sparkles className="size-4 text-brand" />
            Discover & Learn
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tighter mb-6 text-white drop-shadow-xl">
            The Knowledge <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-sky-400 to-indigo-300">
              Hub
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-light">
            Insights, tips, and sustainable strategies for decluttering your life and reclaiming your space in Atlanta.
          </p>
        </div>
        
        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 text-slate-50" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.41,120.35,224.2,106.84A600.32,600.32,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter - Premium Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  activeCategory === cat 
                    ? "bg-gradient-to-r from-brand to-sky-500 text-white shadow-brand/30 hover:shadow-brand/50 scale-105" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-brand/50 hover:text-brand hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post (Only show if 'All' or if it matches the category) */}
          {(activeCategory === "All" || featuredPost.category === activeCategory) && (
            <div className="mb-20">
              <Link to="/blog/$postId" params={{ postId: featuredPost.id }} className="group block">
                <article className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-2">
                  <div className="lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 lg:hidden" />
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1" 
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand shadow-lg tracking-wide uppercase">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center relative z-20 bg-white">
                    <div className="flex items-center gap-4 text-xs font-bold text-sky-500 uppercase tracking-wider mb-6">
                      <span className="flex items-center gap-1.5"><Tag className="size-4" /> {featuredPost.category}</span>
                      <span className="flex items-center gap-1.5"><Clock className="size-4" /> {featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-brand transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-gradient-to-br from-brand to-sky-400 p-0.5">
                          <div className="w-full h-full bg-white rounded-full grid place-items-center">
                            <User className="size-5 text-brand" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{featuredPost.author}</p>
                          <p className="text-xs text-slate-500 font-medium">{featuredPost.date}</p>
                        </div>
                      </div>
                      <div className="size-10 rounded-full bg-slate-50 grid place-items-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="size-5" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, idx) => (
              <Link key={post.id} to="/blog/$postId" params={{ postId: post.id }} className="group block h-full">
                <article 
                  className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-2 relative"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 leading-snug group-hover:text-brand transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Calendar className="size-3.5" />
                        {post.date}
                      </div>
                      <span className="flex items-center gap-1 text-sm font-bold text-brand group-hover:translate-x-1 transition-transform">
                        Read
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {regularPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2">No posts found</h3>
              <p className="text-slate-500">Check back later for updates in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-6">
            Ready to Clear the Clutter?
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let junk hold you back. Experience the peace of mind that comes with a clean, organized space. Our team is standing by.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+14703349282"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sky-500 transition-all shadow-xl shadow-brand/20 hover:scale-105 hover:-translate-y-1"
            >
              <Phone className="size-5" />
              Call 470-334-9282
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
