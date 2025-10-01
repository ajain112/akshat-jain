import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./css/ContactForm.css";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [note, setNote] = useState("");

  const missingKeys = !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setNote("");

    try {
      if (missingKeys) {
        throw new Error(
          "EmailJS keys are missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to .env"
        );
      }

      const res = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );

      if (res.status === 200) {
        setStatus("success");
        setNote("Thanks! Your message has been sent.");
        formRef.current.reset();
      } else {
        throw new Error("Email service responded with an error.");
      }
    } catch (err) {
      console.error("contact error:", err);
      setStatus("error");
      setNote(
        err?.message ||
          "Unable to send message right now. Please try again in a bit."
      );
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">
          Contact <span className="accent">Me</span>
        </h2>

        <form ref={formRef} className="contact__form" onSubmit={onSubmit} noValidate>
          {/* Honeypot (should stay empty) */}
          <input className="hp" type="text" name="company" tabIndex="-1" autoComplete="off" />

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="user_name" placeholder="Your name" required />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="user_email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field contact__field--full">
              <label htmlFor="topic">Topic</label>
              <input id="topic" name="topic" placeholder="e.g., Freelance project, Internship, Feedback" />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field contact__field--full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="7" placeholder="Say hi 👋" required />
            </div>
          </div>

          <div className="contact__actions">
            <button className="contact__btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>

          {note && (
            <p className={`contact__note ${status === "success" ? "ok" : "err"}`}>{note}</p>
          )}
        </form>
      </div>
    </section>
  );
}
