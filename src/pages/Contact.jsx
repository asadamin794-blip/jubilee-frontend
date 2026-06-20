import React, { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { format } from 'date-fns'
import { Mail, MapPin, PhoneCall, Send, CalendarClock } from 'lucide-react'

import SectionTitle from '../components/SectionTitle.jsx'
import Toast from '../components/Toast.jsx'
import CalendarPicker from '../components/CalendarPicker.jsx'
import Button from '../components/ui/Button.jsx'
import { company } from '../data/company.js'

function env(key) {
  return (import.meta.env?.[key] || '').trim()
}

function hasEmailJsConfig() {
  return (
    !!env('VITE_EMAILJS_SERVICE_ID') &&
    !!env('VITE_EMAILJS_PUBLIC_KEY') &&
    !!env('VITE_EMAILJS_TEMPLATE_CONTACT') &&
    !!env('VITE_EMAILJS_TEMPLATE_SCHEDULE')
  )
}

async function sendEmail(templateId, params) {
  const serviceId = env('VITE_EMAILJS_SERVICE_ID')
  const publicKey = env('VITE_EMAILJS_PUBLIC_KEY')
  return emailjs.send(serviceId, templateId, params, { publicKey })
}

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
]

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="text-xs font-extrabold text-ink-700">{label}</div>
      <div className="mt-2">{children}</div>
      {hint ? <div className="mt-2 text-xs text-ink-600">{hint}</div> : null}
    </label>
  )
}

export default function Contact() {
  const [toast, setToast] = useState(null)
  const configured = hasEmailJsConfig()

  // Contact form
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Business inquiry',
    message: ''
  })
  const [sendingContact, setSendingContact] = useState(false)

  // Meeting form
  const [month, setMonth] = useState(() => new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [meeting, setMeeting] = useState({
    name: '',
    email: '',
    company: '',
    time: timeSlots[0],
    notes: ''
  })
  const [sendingMeeting, setSendingMeeting] = useState(false)

  const mailto = useMemo(() => {
    const to = company.email || 'info@jubilee-apparel.com'
    const subject = encodeURIComponent(contact.subject || 'Business inquiry')
    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\nCompany: ${contact.company}\n\n${contact.message}`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [contact])

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '').trim())

  const submitContact = async (e) => {
    e.preventDefault()
    if (!contact.name.trim()) return setToast({ kind: 'error', message: 'Please enter your name.' })
    if (!validateEmail(contact.email)) return setToast({ kind: 'error', message: 'Please enter a valid email.' })
    if (!contact.message.trim()) return setToast({ kind: 'error', message: 'Please write a short message.' })

    if (!configured) {
      window.location.href = mailto
      return
    }

    setSendingContact(true)
    try {
      const templateId = env('VITE_EMAILJS_TEMPLATE_CONTACT')
      await sendEmail(templateId, {
        to_email: company.email || 'info@jubilee-apparel.com',
        from_name: contact.name,
        reply_to: contact.email,
        company: contact.company,
        subject: contact.subject,
        message: contact.message,
        page: 'Contact form'
      })
      setToast({ kind: 'success', message: "Thanks — we received your inquiry. We'll reply by email." })
      setContact({ name: '', email: '', company: '', subject: 'Business inquiry', message: '' })
    } catch (err) {
      console.error(err)
      setToast({ kind: 'error', message: 'Sorry — email sending failed. Please try again or use the mail link.' })
    } finally {
      setSendingContact(false)
    }
  }

  const submitMeeting = async (e) => {
    e.preventDefault()
    if (!meeting.name.trim()) return setToast({ kind: 'error', message: 'Please enter your name.' })
    if (!validateEmail(meeting.email)) return setToast({ kind: 'error', message: 'Please enter a valid email.' })
    if (!selectedDate) return setToast({ kind: 'error', message: 'Please pick a meeting date.' })

    if (!configured) {
      const to = company.email || 'info@jubilee-apparel.com'
      const subject = encodeURIComponent('Meeting request')
      const when = `${format(selectedDate, 'yyyy-MM-dd')} ${meeting.time}`
      const body = encodeURIComponent(
        `Meeting request\n\nName: ${meeting.name}\nEmail: ${meeting.email}\nCompany: ${meeting.company}\nPreferred time: ${when}\n\nNotes: ${meeting.notes}`
      )
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
      return
    }

    setSendingMeeting(true)
    try {
      const templateId = env('VITE_EMAILJS_TEMPLATE_SCHEDULE')
      await sendEmail(templateId, {
        to_email: company.email || 'info@jubilee-apparel.com',
        from_name: meeting.name,
        reply_to: meeting.email,
        company: meeting.company,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: meeting.time,
        notes: meeting.notes,
        page: 'Meeting scheduler'
      })
      setToast({ kind: 'success', message: 'Meeting request sent! We will confirm availability by email.' })
      setMeeting({ name: '', email: '', company: '', time: timeSlots[0], notes: '' })
      setSelectedDate(null)
    } catch (err) {
      console.error(err)
      setToast({ kind: 'error', message: 'Sorry — scheduling email failed. Please try again or use mail link.' })
    } finally {
      setSendingMeeting(false)
    }
  }

  return (
    <div>
      {toast ? <Toast kind={toast.kind} message={toast.message} onClose={() => setToast(null)} /> : null}
<section className="bg-ink-900">
  <div className="container-app py-14 text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
      Contact
    </div>

    <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
      Get in touch
    </h1>

    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70">
      Send an inquiry or request a meeting. All submissions go directly to our official email.
    </p>
  </div>

  {/* soft transition */}
  <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
</section>


          {/* {!configured ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <div className="font-extrabold text-white">EmailJS not configured yet</div>
              <div className="mt-2">
                This project is frontend-only. To enable form delivery, add your EmailJS keys in <span className="font-bold">.env</span>.
                Until then, the forms will open your email client (mailto) as a fallback.
              </div>
            </div>
          ) : null}
        </div>
        <div className="h-10 bg-gradient-to-b from-ink-900 to-ink-50" />
      </section> */}

      <section className="bg-ink-50">
        <div className="container-app py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Contact form */}
            <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2">
                <Send size={18} className="text-brand-700" />
                <div className="text-lg font-black text-ink-900 font-mont">Business inquiry</div>
              </div>
              <p className="mt-2 text-sm text-ink-700 font-playfair">
                Tell us what you want to manufacture (knits/wovens), target quantity, fabric, and delivery timeline.
              </p>

              <form onSubmit={submitContact} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      value={contact.name}
                      onChange={(e) => setContact((s) => ({ ...s, name: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      value={contact.email}
                      onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="you@company.com"
                      type="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company (optional)">
                    <input
                      value={contact.company}
                      onChange={(e) => setContact((s) => ({ ...s, company: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="Brand / Buying house"
                    />
                  </Field>
                  <Field label="Subject">
                    <select
                      value={contact.subject}
                      onChange={(e) => setContact((s) => ({ ...s, subject: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                    >
                      <option>Business inquiry</option>
                      <option>Sampling request</option>
                      <option>Quotation / Pricing</option>
                      <option>Factory visit / Audit</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message" hint="Tip: include product type, GSM, sizes, colors, and expected delivery date.">
                  <textarea
                    value={contact.message}
                    onChange={(e) => setContact((s) => ({ ...s, message: e.target.value }))}
                    className="min-h-[140px] w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                    placeholder="Write your inquiry..."
                  />
                </Field>

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" variant="primary" disabled={sendingContact}>
                    {sendingContact ? 'Sending...' : 'Send inquiry'}
                  </Button>
                  <a
                    href={mailto}
                    className="inline-flex items-center justify-center rounded-2xl border border-ink-900/10 bg-white px-5 py-3 text-sm font-extrabold text-ink-900 shadow-soft hover:bg-ink-50"
                  >
                    Open in email
                  </a>
                </div>
              </form>
            </div>

            {/* Right: Meeting scheduler */}
            <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2">
                <CalendarClock size={18} className="text-brand-700" />
                <div className="text-lg font-black text-ink-900 font-mont">Schedule a meeting</div>
              </div>
              <p className="mt-2 text-sm text-ink-700 font-playfair">
                Choose a preferred date & time. We will confirm the slot by email.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <CalendarPicker
                  month={month}
                  selectedDate={selectedDate}
                  onMonthChange={setMonth}
                  onSelectDate={setSelectedDate}
                />

                <form onSubmit={submitMeeting} className="space-y-4">
                  <Field label="Full name">
                    <input
                      value={meeting.name}
                      onChange={(e) => setMeeting((s) => ({ ...s, name: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      value={meeting.email}
                      onChange={(e) => setMeeting((s) => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="you@company.com"
                      type="email"
                    />
                  </Field>
                  <Field label="Company (optional)">
                    <input
                      value={meeting.company}
                      onChange={(e) => setMeeting((s) => ({ ...s, company: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="Brand / Buying house"
                    />
                  </Field>
                  <Field label="Preferred time">
                    <select
                      value={meeting.time}
                      onChange={(e) => setMeeting((s) => ({ ...s, time: e.target.value }))}
                      className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                    >
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Notes (optional)">
                    <textarea
                      value={meeting.notes}
                      onChange={(e) => setMeeting((s) => ({ ...s, notes: e.target.value }))}
                      className="min-h-[92px] w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-brand-300"
                      placeholder="Agenda / product type / target volume"
                    />
                  </Field>
                  <Button type="submit" variant="primary" disabled={sendingMeeting} className="w-full">
                    {sendingMeeting ? 'Sending...' : 'Request meeting'}
                  </Button>

                  <div className="rounded-2xl border border-ink-900/10 bg-ink-50 p-4 text-xs text-ink-700">
                    <div className="font-extrabold text-ink-900">Selected date</div>
                    <div className="mt-1">
                      {selectedDate ? format(selectedDate, 'EEE, dd MMM yyyy') : 'No date selected'}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact info / address */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-black text-ink-900 justify-center">
                <Mail size={16} className="text-brand-700 font-mont" /> Email
              </div>
              <a className="mt-2 block text-sm font-semibold  text-ink-700 hover:text-ink-900" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <div className="mt-2 text-xs text-ink-600 font-playfair">Primary channel for inquiries and meeting confirmations.</div>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-black text-ink-900 justify-center">
                <MapPin size={16} className="text-brand-700 font-mont " /> Address
              </div>
              <div className="mt-2 text-sm font-playfair font-semibold text-ink-700">{company.addressShort}</div>
              <div className="mt-2 text-xs text-ink-600">(later will add AB.)</div>
            </div> 

            <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-black text-ink-900 justify-center">
                <PhoneCall size={16} className="text-brand-700 font-mont" /> Office
              </div>
              <div className="mt-2 text-sm font-semibold text-ink-700">{company.phone}</div>
              <div className="mt-2 text-xs text-ink-600 font-playfair">later will add .</div>
            </div>
          </div>

         <div className="mt-6 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
  {/* Header */}
  <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-base font-black text-ink-900 font-mont">Our Location</h3>
        <span className="rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-700">
          Karachi EPZ
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-700">
        Visit our facility — click below for directions.
      </p>
    </div>

    <a
      href="https://www.google.com/maps?q=Jubilee%20Apparel%20Karachi%20EPZ"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-ink-900/10 bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft hover:bg-ink-50"
    >
      Open in Google Maps
    </a>
  </div>

  {/* Map */}
  <div className="px-6 pb-6">
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-50">
      <iframe
        title="Jubilee Apparel Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.8952890128735!2d67.2393748!3d24.8288927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb331ad1e74e2f1%3A0xfbe096ebe9f7bab8!2sJubilee%20Apparel!5e1!3m2!1sen!2s!4v1769327736044!5m2!1sen!2s"
        className="block h-[420px] w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  )
}
