import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_3c11q7w",
        "template_ennm6jx",
        form.current,
        "TQVRgK8NBu0D4w0PW"
      )
      .then(() => {
        setStatus("✅ Your message has been sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's <span className="text-blue-500">Connect</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm always open to internship opportunities,
            frontend development roles, and exciting collaborations.
            Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            {/* Email */}

            <div className="flex items-center gap-5 bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition">

              <div className="w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center">
                <FaEnvelope className="text-2xl" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Email</h3>

                <a
                  href="mailto:samimughal75q@gmail.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  samimughal75q@gmail.com
                </a>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-5 bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition">

              <div className="w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center">
                <FaPhoneAlt className="text-2xl" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Phone</h3>

                <a
                  href="tel:+923314001881"
                  className="text-gray-400 hover:text-blue-400"
                >
                  +92 331 4001881
                </a>

              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-5 bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition">

              <div className="w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center">
                <FaMapMarkerAlt className="text-2xl" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Location</h3>

                <p className="text-gray-400">
                  Lahore, Pakistan
                </p>

              </div>

            </div>

            {/* Social */}

            <div className="pt-8">

              <h3 className="text-xl font-semibold mb-5">
                Follow Me
              </h3>

              <div className="flex gap-5">

                <a
                  href="https://www.linkedin.com/in/sami-ur-rehman-57957036b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gray-800 flex justify-center items-center hover:bg-blue-600 hover:scale-110 transition"
                >
                  <FaLinkedin size={28} />
                </a>

                <a
                  href="https://github.com/samixcode75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gray-800 flex justify-center items-center hover:bg-gray-700 hover:scale-110 transition"
                >
                  <FaGithub size={28} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 space-y-6 hover:border-blue-500 transition"
          >

            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-xl font-semibold text-lg transition duration-300 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message 🚀"}
            </button>

            {status && (
              <p className="text-center text-green-400 font-medium">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;