import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import Button from "./ui/Button";
import { company } from "../data/company";

export default function BookCallModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null); 
  const [form, setForm] = useState({
    subject: "",
    phone: "",
    reason: "",
  });

  const canSubmit = useMemo(() => {
    return form.subject.trim() && form.phone.trim() && form.reason.trim();
  }, [form]);

  // Make sure portal works after client mounts (avoids SSR issues too)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setOk(null);

    // lock scroll on mobile
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // close on ESC
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    setOk(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKCALL;

      if (!serviceId || !publicKey || !templateId) {
        const subject = encodeURIComponent(`[Book a Call] ${form.subject}`);
        const body = encodeURIComponent(
          `Contact No: ${form.phone}\nReason: ${form.reason}`
        );
        window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
        setOk("success");
        setLoading(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: company.contact.email,
          subject: form.subject,
          phone: form.phone,
          reason: form.reason,
          source: "Header Book a Call",
        },
        { publicKey }
      );

      setOk("success");
      setForm({ subject: "", phone: "", reason: "" });
      setTimeout(() => onClose?.(), 700);
    } catch (err) {
      console.error(err);
      setOk("error");
    } finally {
      setLoading(false);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-[9999]">
      {/* backdrop */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose?.();
        }}
        className="absolute inset-0 bg-black/60"
        aria-label="Close modal"
      />

      {/* container */}
      <div
        className="relative flex min-h-screen items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* modal */}
        <div
          className="w-[92%] max-w-lg rounded-2xl border border-white/10 bg-ink-900/90 p-6 text-white shadow-soft backdrop-blur
                     max-h-[calc(100vh-2rem)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-extrabold tracking-tight">
                Schedule a Call
              </div>
              <div className="mt-1 text-sm text-white/70">
                Share your details and we’ll get back to you.
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                onClose?.();
              }}
              className="rounded-xl p-2 text-white/70 hover:bg-white/10 hover:text-white"
              aria-label="Close"
              type="button"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-semibold text-white/80">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="e.g., OEM inquiry / Sample request"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-white/80">
                Contact No
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="+92 3xx xxxxxxx"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-white/80">
                Reason
              </label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="Tell us what you need (product, quantity, timeline, etc.)"
                required
              />
            </div>

            {ok === "success" && (
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Submitted! We’ll contact you soon.
              </div>
            )}

            {ok === "error" && (
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                Something went wrong. Please try again.
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>

              <Button
                type="submit"
                variant="secondary"
                disabled={!canSubmit || loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
