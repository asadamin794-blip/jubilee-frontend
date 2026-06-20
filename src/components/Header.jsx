import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/jubilee-logo.png";
import Button from "./ui/Button.jsx";
import BookCallModal from "./BookCallModal.jsx";

const nav = [
  { name: "Home", to: "/" },
  { name: "Who We Are", to: "/about" },
  { name: "Capabilities", to: "/capabilities" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
          isActive
            ? "text-white bg-white/10"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openBookCall, setOpenBookCall] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container-app">
        <div
          className={`rounded-2xl border border-white/10 px-4 py-3 backdrop-blur ${
            scrolled ? "bg-ink-700/80 shadow-soft" : "bg-ink-700/50"
          }`}
        >
          {/* ✅ MOBILE: grid (logo | centered text | menu) */}
          {/* ✅ DESKTOP: flex (logo+text left | nav right) */}
          <div className="grid grid-cols-[44px_1fr_44px] items-center lg:flex lg:items-center lg:justify-between">
            {/* Left group (desktop) */}
            <Link to="/" className="flex items-center gap-3 lg:gap-3">
              <img
                src={logo}
                alt="Jubilee Apparel"
                className="h-12 w-11 rounded-xl object-cover"
              />

              {/* ✅ Desktop: show text next to logo (left) */}
              <div className="hidden lg:block">
<div className="text-white font-extrabold tracking-wide font-mont leading-tight drop-shadow-sm">
                  Jubilee Apparel
                </div>
                <div className="text-xs text-white/60 font-mont -mt-0.5">
                  Private Limited
                </div>
              </div>
            </Link>

            {/* ✅ Mobile-only centered text */}
            <Link to="/" className="block text-center lg:hidden">
 <div className="text-white font-extrabold tracking-wide font-mont leading-tight drop-shadow-sm">
                Jubilee Apparel
              </div>
              <div className="text-xs text-white/60 font-mont -mt-0.5">
                Private Limited
              </div>
            </Link>

            {/* Mobile menu icon */}
            <button
              className="inline-flex items-center font-mont font-extrabold justify-end rounded-xl p-2 text-white/80 hover:bg-white/10 hover:text-white lg:hidden "
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>

            {/* Desktop nav */}
            <nav className="hidden  font-mont font-extrabold items-center gap-1 lg:flex ">
              {nav.map((i) => (
                <NavItem key={i.to} to={i.to}>
                  {i.name}
                </NavItem>
              ))}

              <Button
                variant="secondary"
                className="ml-2"
                onClick={() => setOpenBookCall(true)}
              >
                Schedule a call
              </Button>

              <BookCallModal
                open={openBookCall}
                onClose={() => setOpenBookCall(false)}
              />
            </nav>
          </div>

          {/* Mobile dropdown */}
          {open ? (
            <div className="mt-3 rounded-2xl border border-white/10 bg-ink-900/85 p-3 backdrop-blur lg:hidden">
              <div className="flex flex-col gap-1">
                {nav.map((i) => (
                  <NavItem key={i.to} to={i.to} onClick={() => setOpen(false)}>
                    {i.name}
                  </NavItem>
                ))}

                <Button
                  variant="secondary"
                  className="mt-2"
                  onClick={() => {
                    setOpen(false);
                    setOpenBookCall(true);
                  }}
                >
                  Schedule a call
                </Button>

                <BookCallModal
                  open={openBookCall}
                  onClose={() => setOpenBookCall(false)}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
