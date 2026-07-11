import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { POSTS } from "../lib/blog-data";

export const Route = createFileRoute("/blog_/$postId")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.id === params.postId);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} | Come In Handy Blog` },
      { name: "description", content: loaderData?.post.excerpt },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  
  // Find related posts (same category, not this post)
  const relatedPosts = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 font-body text-slate-800 selection:bg-brand/20">
      
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] w-full flex items-end pb-16 pt-32 px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover" 
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-medium transition-colors group"
          >
            <div className="size-8 rounded-full bg-white/10 backdrop-blur-md grid place-items-center group-hover:bg-brand group-hover:text-white transition-all">
              <ArrowLeft className="size-4" />
            </div>
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-brand text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
              <Clock className="size-4" /> {post.readTime}
            </span>
          </div>
          
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-xl">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 border-t border-white/20 pt-6">
            <div className="size-12 rounded-full bg-gradient-to-br from-brand to-sky-400 p-0.5 shadow-lg">
              <div className="w-full h-full bg-white rounded-full grid place-items-center">
                <User className="size-6 text-brand" />
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-lg">{post.author}</p>
              <p className="text-sm text-sky-200 flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {post.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Article */}
          <article className="lg:w-3/4">
            <div 
              className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                prose-h3:text-2xl prose-h3:mt-8 
                prose-p:text-slate-600 prose-p:leading-relaxed 
                prose-a:text-brand hover:prose-a:text-sky-500 
                prose-strong:text-slate-900 
                prose-li:text-slate-600
                prose-blockquote:border-l-4 prose-blockquote:border-brand prose-blockquote:bg-sky-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags & Share */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <Tag className="size-5 text-slate-400" />
                <span className="text-sm font-bold text-slate-700">Tags:</span>
                <Link to="/blog" className="px-3 py-1 bg-slate-100 hover:bg-brand/10 hover:text-brand text-slate-600 rounded-full text-xs font-semibold transition-colors">
                  {post.category}
                </Link>
                <Link to="/blog" className="px-3 py-1 bg-slate-100 hover:bg-brand/10 hover:text-brand text-slate-600 rounded-full text-xs font-semibold transition-colors">
                  Atlanta
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-700 flex items-center gap-1.5"><Share2 className="size-4" /> Share:</span>
                <button className="size-8 rounded-full bg-slate-100 grid place-items-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-colors">
                  <Facebook className="size-4" />
                </button>
                <button className="size-8 rounded-full bg-slate-100 grid place-items-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <Twitter className="size-4" />
                </button>
                <button className="size-8 rounded-full bg-slate-100 grid place-items-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <Linkedin className="size-4" />
                </button>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="size-24 rounded-full bg-gradient-to-br from-brand to-sky-400 p-1 shrink-0">
                <div className="w-full h-full bg-white rounded-full grid place-items-center">
                  <User className="size-10 text-brand" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">About {post.author}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Aaron is the founder of Come In Handy, an Atlanta-based junk removal and hauling service dedicated to eco-friendly practices and community support. With years of experience, he shares his expertise to help locals reclaim their spaces.
                </p>
                <Link to="/contact" className="text-brand font-bold text-sm hover:underline">
                  Work with Aaron &rarr;
                </Link>
              </div>
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 flex flex-col gap-8">
            <div className="sticky top-24">
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 text-center">
                  <h4 className="font-heading font-extrabold text-xl mb-3">Get a Free Quote</h4>
                  <p className="text-sm text-slate-300 mb-6">
                    Ready to reclaim your space? Fast, friendly service in Atlanta.
                  </p>
                  <Link 
                    to="/contact"
                    className="block w-full bg-brand hover:bg-sky-500 text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/40">
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-4 border-b border-slate-100 pb-4">Related Reads</h4>
                  <div className="flex flex-col gap-4">
                    {relatedPosts.map(related => (
                      <Link key={related.id} to="/blog/$postId" params={{ postId: related.id }} className="group flex gap-4 items-center">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="size-16 rounded-xl object-cover" 
                        />
                        <div>
                          <h5 className="font-bold text-sm text-slate-900 group-hover:text-brand transition-colors line-clamp-2">
                            {related.title}
                          </h5>
                          <span className="text-xs text-slate-500">{related.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
          
        </div>
      </section>
    </main>
  );
}
