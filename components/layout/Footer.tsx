import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Works", href: "/works" },
    { label: "Career", href: "/career" },
  ],
  Help: [
    { label: "Customer Support", href: "/support" },
    { label: "Delivery Details", href: "/delivery" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  FAQ: [
    { label: "Account", href: "/faq/account" },
    { label: "Manage Deliveries", href: "/faq/deliveries" },
    { label: "Orders", href: "/faq/orders" },
    { label: "Payments", href: "/faq/payments" },
  ],
  Resources: [
    { label: "Free eBooks", href: "/resources/ebooks" },
    { label: "Development Tutorial", href: "/resources/tutorials" },
    { label: "How to - Blog", href: "/blog" },
    { label: "Youtube Playlist", href: "/resources/youtube" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Facebook", icon: "f", href: "#" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "Github", icon: "⌨", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative pt-10">
      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="glass-strong rounded-[32px] px-6 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 -mb-24 relative z-10 overflow-hidden">
          {/* Decorative orbs */}
          <div className="orb orb-purple w-64 h-64 -top-20 -left-20 absolute"></div>
          <div className="orb orb-blue w-48 h-48 -bottom-10 right-10 absolute"></div>
          <h2
            className="text-white text-3xl md:text-[40px] font-black leading-[1.1] max-w-md uppercase tracking-tight relative z-10"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[360px] relative z-10">
            <div className="relative group">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full glass-input rounded-full pl-11 pr-4 py-3.5 text-sm font-medium"
              />
            </div>
            <button className="w-full btn-gradient rounded-full py-3.5 text-sm font-semibold hover:scale-[1.02] transition-all duration-300 active:scale-100">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="pt-36 pb-10 glass-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="text-2xl font-black tracking-tight uppercase text-gradient"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                SHOP.CO
              </Link>
              <p className="text-sm text-white/40 mt-5 leading-relaxed pr-4">
                We have clothes that suits your style and which you&apos;re proud
                to wear. From women to men.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-sm text-white/50 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-sm tracking-widest uppercase mb-6 text-white/80">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/30 font-medium">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center gap-2">
              {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map(
                (method) => (
                  <div
                    key={method}
                    className="glass rounded-lg px-3 py-2 text-xs font-semibold text-white/50"
                  >
                    {method}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
