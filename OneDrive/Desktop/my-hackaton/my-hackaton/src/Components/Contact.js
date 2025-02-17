import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sent");

    try {
      const response = await fetch("https://website-ytgq.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="h-screen flex items-center justify-center animate-fade transition duration-200 px-4 sm:px-6">
      <div data-aos="fade-down" className="text-center">
        <h2 className="text-3xl font-bold dark:text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="mt-6 max-w-lg w-full mx-auto">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-4 border rounded mb-4" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-4 border rounded mb-4" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-4 border rounded mb-4"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Send</button>
        </form>
        {status && <p className="mt-4 text-gray-700 dark:text-white">{status}</p>}
      </div>
    </section>
  );
}
