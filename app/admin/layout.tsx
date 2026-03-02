import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users } from "lucide-react";

const adminLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Users", href: "/admin/users", icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-130px)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-56 flex-col glass-dark border-r border-white/5 p-4">
        <h2 className="font-bold text-sm uppercase text-white/30 tracking-wider mb-4 px-3">
          Admin Panel
        </h2>
        <nav className="space-y-1">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors"
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
