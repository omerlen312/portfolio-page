"use client";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdPhonePortrait } from "react-icons/io";
import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // cache the form reference
    const formData = new FormData(form);
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("Your message has been sent!");
      form.reset(); // use cached reference
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I&apos;m always interested in new opportunities and interesting
            projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400">
                    <HiOutlineMail />
                  </span>
                </div>
                <span className="text-slate-600 dark:text-slate-400">
                  omerlen1000@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 dark:text-green-400">
                    <IoMdPhonePortrait />
                  </span>
                </div>
                <span className="text-slate-600 dark:text-slate-400">
                  +972 50-457-5564
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 dark:text-purple-400">
                    <FaGithub />
                  </span>
                </div>
                <span className="text-slate-600 dark:text-slate-400 underline">
                  omerlen312
                </span>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  style={{ resize: "none" }}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-4 text-center text-lg text-green-600 dark:text-green-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
