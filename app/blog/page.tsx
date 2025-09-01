"use client";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";

import { posts } from "@/data/posts";

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <motion.div
        key="main-site"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="min-h-screen">
          <Navbar />
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Blog
            </h1>
            <div className="space-y-12">
              {posts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700"
                >
                  <header className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {post.title}
                    </h2>
                    <time className="text-slate-600 dark:text-slate-400 text-sm">
                      {formatDate(post.date)}
                    </time>
                  </header>
                  <div className="prose dark:prose-invert max-w-none">
                    {post.content.split("\n").map((paragraph, index) =>
                      paragraph.trim() ? (
                        paragraph.startsWith("•") ? (
                          <ul
                            key={index}
                            className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4"
                          >
                            <li>{paragraph.substring(1).trim()}</li>
                          </ul>
                        ) : (
                          <p
                            key={index}
                            className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        )
                      ) : null
                    )}
                  </div>
                </motion.article>
              ))}
              {posts.length === 0 && (
                <p className="text-slate-600 dark:text-slate-400 text-center">
                  No posts available yet. Check back soon!
                </p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
