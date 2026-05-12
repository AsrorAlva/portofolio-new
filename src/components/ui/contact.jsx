import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

export default function Contact() {
  const data = usePortfolioData();
  const { profile } = data;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending message...");

    emailjs
      .send(
        "service_iqy251f", // 🔹 Service ID
        "template_3prw7bm", // 🔹 Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "asroralvaizzi191919@gmail.com", // tujuan email
          time: new Date().toLocaleString(),
        },
        "Dm-eB6L1IDX0OKB0B" // 🔹 Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { id: loadingToast });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", { id: loadingToast });
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-32 md:py-48 border-t border-white/5 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl w-full mx-auto px-6">
        <div className="mb-20 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8"
          >
            Get In<br />
            <span className="text-[#b2945e]">Touch.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            <p className="text-[#f5f5f5]/40 text-[10px] font-black uppercase tracking-[0.4em]">
              Contact Info
            </p>
            <p className="text-[#f5f5f5] font-black text-xl uppercase tracking-tight">{profile.email}</p>
            <p className="text-[#f5f5f5]/40 text-xs uppercase tracking-[0.2em]">Based in Indonesia</p>
          </motion.div>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b2945e]">Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[#f5f5f5] focus:outline-none focus:border-[#b2945e] transition-colors uppercase text-[10px] tracking-widest"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b2945e]">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[#f5f5f5] focus:outline-none focus:border-[#b2945e] transition-colors uppercase text-[10px] tracking-widest"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b2945e]">Message</label>
            <textarea
              required
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-[#f5f5f5] focus:outline-none focus:border-[#b2945e] transition-colors uppercase text-[10px] tracking-widest resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full md:w-auto px-16 py-5 bg-[#f5f5f5] text-black font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#b2945e] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span className="inline-block ml-4 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
