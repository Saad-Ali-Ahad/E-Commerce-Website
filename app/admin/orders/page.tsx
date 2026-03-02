"use client";

import { formatPrice } from "@/lib/utils";

const mockOrders = [
  { id: "ORD-001", customer: "John Doe", email: "john@mail.com", status: "Delivered", total: 455, items: 2, date: "Aug 10, 2023" },
  { id: "ORD-002", customer: "Jane Smith", email: "jane@mail.com", status: "Processing", total: 345, items: 2, date: "Sep 5, 2023" },
  { id: "ORD-003", customer: "Alex K.", email: "alex@mail.com", status: "Shipped", total: 260, items: 1, date: "Sep 12, 2023" },
  { id: "ORD-004", customer: "Sarah M.", email: "sarah@mail.com", status: "Pending", total: 180, items: 1, date: "Sep 15, 2023" },
  { id: "ORD-005", customer: "Linda W.", email: "linda@mail.com", status: "Cancelled", total: 120, items: 1, date: "Sep 18, 2023" },
];

const statusColor: Record<string, string> = {
  Delivered: "bg-emerald-500/10 text-emerald-400 border border-emerald-400/20",
  Processing: "bg-amber-500/10 text-amber-400 border border-amber-400/20",
  Shipped: "bg-blue-500/10 text-blue-400 border border-blue-400/20",
  Pending: "bg-white/5 text-white/50 border border-white/10",
  Cancelled: "bg-red-500/10 text-red-400 border border-red-400/20",
};

export default function AdminOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Orders</h1>

      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium text-white/40">Order ID</th>
                <th className="px-5 py-3 font-medium text-white/40">Customer</th>
                <th className="px-5 py-3 font-medium text-white/40">Items</th>
                <th className="px-5 py-3 font-medium text-white/40">Total</th>
                <th className="px-5 py-3 font-medium text-white/40">Status</th>
                <th className="px-5 py-3 font-medium text-white/40">Date</th>
                <th className="px-5 py-3 font-medium text-white/40">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-t border-white/5">
                  <td className="px-5 py-3 font-medium text-white">{order.id}</td>
                  <td className="px-5 py-3">
                    <div>
                      <p className="font-medium text-white">{order.customer}</p>
                      <p className="text-xs text-white/30">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-white/50">{order.items}</td>
                  <td className="px-5 py-3 font-medium text-white">{formatPrice(order.total)}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-white/50">{order.date}</td>
                  <td className="px-5 py-3">
                    <select className="text-xs glass rounded-lg px-2 py-1 focus:outline-none text-white bg-transparent">
                      <option>Update Status</option>
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
