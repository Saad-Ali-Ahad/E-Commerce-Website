"use client";

import { Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const mockUsers = [
  { id: "u1", name: "John Doe", email: "john@mail.com", role: "USER", orders: 5, joined: "Jan 12, 2023" },
  { id: "u2", name: "Jane Smith", email: "jane@mail.com", role: "USER", orders: 3, joined: "Mar 8, 2023" },
  { id: "u3", name: "Alex K.", email: "alex@mail.com", role: "ADMIN", orders: 0, joined: "Dec 1, 2022" },
  { id: "u4", name: "Sarah M.", email: "sarah@mail.com", role: "USER", orders: 8, joined: "Feb 20, 2023" },
  { id: "u5", name: "Linda W.", email: "linda@mail.com", role: "USER", orders: 2, joined: "Jul 15, 2023" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Users</h1>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full glass-input rounded-full pl-10 pr-4 py-2.5 text-sm"
        />
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium text-white/40">Name</th>
                <th className="px-5 py-3 font-medium text-white/40">Email</th>
                <th className="px-5 py-3 font-medium text-white/40">Role</th>
                <th className="px-5 py-3 font-medium text-white/40">Orders</th>
                <th className="px-5 py-3 font-medium text-white/40">Joined</th>
                <th className="px-5 py-3 font-medium text-white/40"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-t border-white/5">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 glass rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-white/50">{user.email}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.role === "ADMIN"
                          ? "bg-purple-500/10 text-purple-300 border border-purple-400/20"
                          : "bg-white/5 text-white/50 border border-white/10"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-white/50">{user.orders}</td>
                  <td className="px-5 py-3 text-white/50">{user.joined}</td>
                  <td className="px-5 py-3">
                    <button className="p-1 hover:bg-white/5 rounded-lg transition-colors">
                      <MoreHorizontal size={16} className="text-white/30" />
                    </button>
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
