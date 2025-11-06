"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("（示範）表單資料已擷取，可接 SMTP 寄信");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-neutral-300">姓名</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500"
            placeholder="您的姓名"
          />
        </div>
        <div>
          <label className="text-sm text-neutral-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500"
            placeholder="example@company.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-neutral-300">需求說明</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 h-28 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500"
          placeholder="請簡述您的專案或需求…"
        />
      </div>

      <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold hover:brightness-110">
        送出需求
      </button>
      <p className="mt-3 text-center text-xs text-neutral-400">
        此為示意表單，可連接至您後端或外部表單服務
      </p>
    </form>
  );
}

