import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ls7fb2i",
        "template_sv1judi",
        form.current,
        "u9Wj57e0HXxg2xdio"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setSending(false);
      })
      .catch((error) => {
        toast.error("Failed to send message. Try again later.");
        console.error(error);
        setSending(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-20 text-white">
      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
      >
        <h2 className="text-4xl font-semibold mb-10 text-center">
          Let’s <span className="text-gradient">Connect</span>
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded-xl outline-none transition-all duration-300 focus:border-gradient hover:border-gradient"
              placeholder="Enter your name"
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded-xl outline-none transition-all duration-300 focus:border-gradient hover:border-gradient"
              placeholder="Enter your email"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded-xl outline-none transition-all duration-300 focus:border-gradient hover:border-gradient resize-none"
              placeholder="Your message..."
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={sending}
              className="bg-gradient-to-r from-red-500 via-red-600 to-pink-500 px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-all"
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6 text-xl text-white"
        >
          <a
            href="https://www.linkedin.com/in/pritam-singh-76aa05236/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/pritam018-sin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/pritam_singh_018/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/pritam_singh_018/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
