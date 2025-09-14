import { useRef } from "react";

export default function Contact() {
  // Code with the help of AI
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const form = formRef.current;

    // Submit form data via fetch
    fetch("https://formspree.io/f/xanbdjqd", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(
            "Thank you for your message!\nI'll get back to you as soon as I can. 😊"
          );
          form.reset(); // Clear the form!
        } else {
          alert("There was a problem submitting your form. Please try again.");
        }
      })
      .catch(() => {
        alert("There was a problem submitting your form. Please try again.");
      });
  };

  return (
    <section className="bg-pink-100 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="relative max-w-4xl w-full">
        {/* Shadow box behind contact card*/}
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl z-0 bg-pink-800" />

        {/* Foreground contact card */}
        <div className="relative rounded-xl p-8 md:p-12 shadow-md z-10 bg-pink-300">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">
            Contact Me 📲
          </h1>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <br></br>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <br></br>
            <textarea
              name="message"
              placeholder="Message..."
              rows={5}
              required
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <br></br>
            <button
              type="submit"
              className="bg-pink-800 text-gray-200 font-semibold py-2 px-6 rounded hover:bg-pink-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
