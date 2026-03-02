import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
  { label: "Orders", value: "2,350", change: "+18.2%", icon: ShoppingBag },
  { label: "Customers", value: "12,234", change: "+5.4%", icon: Users },
  { label: "Growth", value: "+573", change: "+12.5%", icon: TrendingUp },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-xl p-5 hover:shadow-glass-hover transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-white/50">{stat.label}</p>
              <stat.icon size={18} className="text-white/30" />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-emerald-400 mt-1">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Recent orders table placeholder */}
      <div className="glass rounded-xl p-5">
        <h2 className="font-bold text-lg mb-4 text-white">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-3 font-medium text-white/40">Order</th>
                <th className="pb-3 font-medium text-white/40">Customer</th>
                <th className="pb-3 font-medium text-white/40">Status</th>
                <th className="pb-3 font-medium text-white/40">Total</th>
                <th className="pb-3 font-medium text-white/40">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "ORD-001", customer: "John Doe", status: "Delivered", total: "$455.00", date: "Aug 10, 2023" },
                { id: "ORD-002", customer: "Jane Smith", status: "Processing", total: "$345.00", date: "Sep 5, 2023" },
                { id: "ORD-003", customer: "Alex K.", status: "Shipped", total: "$260.00", date: "Sep 12, 2023" },
                { id: "ORD-004", customer: "Sarah M.", status: "Pending", total: "$180.00", date: "Sep 15, 2023" },
              ].map((order) => (
                <tr key={order.id} className="border-b border-white/5">
                  <td className="py-3 font-medium text-white">{order.id}</td>
                  <td className="py-3 text-white/50">{order.customer}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-400/20"
                          : order.status === "Processing"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-400/20"
                          : order.status === "Shipped"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-400/20"
                          : "bg-white/5 text-white/50 border border-white/10"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 font-medium text-white">{order.total}</td>
                  <td className="py-3 text-white/50">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
