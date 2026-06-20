import React from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollTopButton() {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400) // show after 400px scroll
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-24 right-6 z-50",
        "rounded-full bg-brand-700 p-4 text-white shadow-soft",
        "transition-all duration-300 hover:bg-brand-800",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3",
      ].join(" ")}
    >
      <ArrowUp size={18} />
    </button>
  )
}
