import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="h-screen bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center animate-fade transition duration-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4"></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
