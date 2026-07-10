import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, User, Tag, Clock, Phone } from "lucide-react";

export const Route = createFileRoute("/blog")({
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

// Placeholder Data for Blog Posts
const FEATURED_POST = {
  id: "featured-1",
  title: "The Ultimate Guide to Decluttering Your Atlanta Home Before a Move",
  excerpt: "Moving in Atlanta can be stressful. Learn our proven 5-step process for clearing out the junk so you can focus on your new home...",
  date: "July 2, 2026",
  author: "Aaron Johnson",
  category: "Moving Advice",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
};

const POSTS = [
  {
    id: "post-1",
    title: "How to Responsibly Dispose of Old Appliances in Georgia",
    excerpt: "Don't just leave that old fridge on the curb. Here is how we ensure appliances are recycled and disposed of properly.",
    date: "June 28, 2026",
    author: "Aaron Johnson",
    category: "Sustainability",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "post-2",
    title: "5 Signs It's Time for a Garage Clean-Out",
    excerpt: "Can you still park your car in your garage? If not, it might be time to reclaim your space with a professional clean-out.",
    date: "June 15, 2026",
    author: "Aaron Johnson",
    category: "Junk Removal Tips",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "post-3",
    title: "Estate Cleanouts: Where to Start During a Difficult Time",
    excerpt: "Handling an estate cleanout for a loved one is tough. We provide compassionate, efficient services to help you through the process.",
    date: "May 30, 2026",
    author: "Aaron Johnson",
    category: "Clean-outs",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "post-4",
    title: "What Happens to the Junk We Haul Away?",
    excerpt: "We believe in sustainable hauling. Discover our process for sorting, donating, and recycling to keep Atlanta green.",
    date: "May 12, 2026",
    author: "Aaron Johnson",
    category: "Sustainability",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
  }
];

const CATEGORIES = ["All", "Junk Removal Tips", "Moving Advice", "Sustainability", "Clean-outs"];

function BlogPage() {
  return (
    <main className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-navy text-white overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl opacity-30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-brand/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Insights & Updates
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6">
            The Atlanta Hauling <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-300">
              & Cleanup Blog
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Expert advice, local news, and tips on decluttering, sustainable junk removal, and property clean-outs from Aaron Johnson.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Posts */}
          <div className="lg:w-2/3">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat, idx) => (
                <button 
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    idx === 0 
                      ? "bg-navy text-white shadow-md" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            <h2 className="text-2xl font-heading font-extrabold text-navy mb-6">Featured Post</h2>
            <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-16">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={FEATURED_POST.image} 
                  alt={FEATURED_POST.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 text-xs font-semibold text-brand mb-4">
                  <span className="bg-brand/10 px-3 py-1 rounded-full">{FEATURED_POST.category}</span>
                  <span className="flex items-center gap-1 text-slate-500"><Clock className="size-3" /> {FEATURED_POST.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-4 group-hover:text-brand transition-colors">
                  <Link to="/blog">{FEATURED_POST.title}</Link>
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-navy">
                    <div className="size-8 rounded-full bg-slate-200 grid place-items-center">
                      <User className="size-4 text-slate-500" />
                    </div>
                    {FEATURED_POST.author}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Calendar className="size-3" />
                    {FEATURED_POST.date}
                  </div>
                </div>
              </div>
            </article>

            {/* Standard Posts Grid */}
            <h2 className="text-2xl font-heading font-extrabold text-navy mb-6">Latest Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {POSTS.map(post => (
                <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs font-semibold text-brand mb-3">
                      <span className="flex items-center gap-1"><Tag className="size-3" /> {post.category}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-brand transition-colors line-clamp-2">
                      <Link to="/blog">{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm mb-5 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-bold text-navy">Read More</span>
                      <ArrowRight className="size-4 text-brand group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-navy border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm hover:border-brand hover:text-brand transition-all shadow-sm hover:shadow-md">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:w-1/3 flex flex-col gap-8">
            
            {/* Search Widget */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-navy mb-4">Search the Blog</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Popular Topics Widget */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-navy mb-4">Popular Topics</h3>
              <ul className="space-y-3">
                {CATEGORIES.slice(1).map((cat, idx) => (
                  <li key={idx}>
                    <Link to="/blog" className="flex items-center justify-between text-sm text-slate-600 hover:text-brand transition-colors font-medium group">
                      <span>{cat}</span>
                      <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                        {Math.floor(Math.random() * 5) + 2}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-navy to-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden mt-4">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand/30 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="font-heading font-extrabold text-2xl mb-3">Need Junk Gone Today?</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Aaron is ready to haul. Fast, affordable, and fully insured. Call now for a free same-day quote.
                </p>
                <a 
                  href="tel:+14703349282"
                  className="flex items-center justify-center gap-2 bg-brand text-white w-full py-3.5 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-brand/20"
                >
                  <Phone className="size-4" />
                  Call 470-334-9282
                </a>
              </div>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
