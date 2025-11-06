'use client'
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // ⛔ 尚未串接後端寄信，這裡暫時先做假成功
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

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
            required
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
            required
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
          required
        />
      </div>

      <button
        disabled={status === "loading"}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold hover:brightness-110 disabled:opacity-50"
      >
        {status === "loading" ? "送出中…" : "送出需求"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-center text-sm text-green-400">
          ✅ 已成功送出！我們將盡快與您聯繫。
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">
          ❌ 發生錯誤，請稍後再試。
        </p>
      )}

      <p className="mt-3 text-center text-xs text-neutral-400">
        此為示意表單，可連接至後端寄信或外部服務
      </p>
    </form>
  );
}
