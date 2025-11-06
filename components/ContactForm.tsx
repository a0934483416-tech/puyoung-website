'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMsg('✅ 已送出，我們會盡快與您聯繫。');
        setForm({ name: '', email: '', message: '' });
      } else {
        setMsg('❌ 送出失敗，請稍後再試。');
      }
    } catch {
      setMsg('❌ 連線失敗，請稍後再試。');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-neutral-300">姓名</label>
          <input
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2"
            placeholder="您的姓名"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="text-sm text-neutral-300">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2"
            placeholder="example@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm text-neutral-300">需求說明</label>
        <textarea
          className="mt-1 h-28 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2"
          placeholder="請簡述您的專案或需求…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>
      <button
        disabled={loading}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold hover:brightness-110 disabled:opacity-60"
      >
        {loading ? '送出中…' : '送出需求'}
      </button>
      {msg && <p className="mt-3 text-center text-xs text-neutral-300">{msg}</p>}
    </form>
  );
}
