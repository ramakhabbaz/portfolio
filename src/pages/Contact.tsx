import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setSubmitting(true);
    fetch("https://formspree.io/f/xanbdjqd", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitting(false);
          alert(
            "Thank you for your message!\nI'll get back to you as soon as I can. 😊",
          );
        } else {
          setSubmitting(false);
          alert("There was a problem submitting your form. Please try again.");
        }
      })
      .catch(() => {
        setSubmitting(false);
        alert("There was a problem submitting your form. Please try again.");
      });
  };

  return (
    <section className="bg-mesh min-h-screen flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl w-full"
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl z-0 bg-pink-800/90 shadow-card-hover" />
        <div className="relative rounded-2xl p-8 md:p-12 shadow-card z-10 bg-pink-150 border border-pink-200/60 hover:shadow-card-hover transition-smooth">
          <h1 className="font-display text-4xl font-bold text-pink-900 mb-6">
            Contact Me <span className="text-pink-500">📲</span>
          </h1>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full p-3.5 rounded-xl border border-pink-200/60 bg-white/80 text-gray-800 placeholder-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-smooth"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-3.5 rounded-xl border border-pink-200/60 bg-white/80 text-gray-800 placeholder-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-smooth"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message..."
                rows={5}
                required
                className="w-full p-3.5 rounded-xl border border-pink-200/60 bg-white/80 text-gray-800 placeholder-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-smooth resize-y min-h-[120px]"
              />
            </div>
            <motion.button
              type="submit"
              disabled={submitting}
              className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed transition-smooth shadow-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? "Sending..." : "Submit"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
