'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setErr(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (data?.success) {
        setOk(true);     // ← 顯示成功訊息
      } else {
        throw new Error('Unexpected response');
      }
    } catch (e: any) {
      setErr('送出失敗，請稍後再試。');
      console.error(e);
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
        type="submit"
        disabled={loading}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold hover:brightness-110 disabled:opacity-60"
      >
        {loading ? '送出中…' : '送出需求'}
      </button>

      {/* 成功／錯誤訊息 */}
      {ok && (
        <p className="mt-3 text-center text-sm text-emerald-400">
          ✅ 已送出，我們將盡快聯繫您！
        </p>
      )}
      {err && (
        <p className="mt-3 text-center text-sm text-red-400">
          {err}
        </p>
      )}

      <p className="mt-3 text-center text-xs text-neutral-400">
        此為示意表單，已連接至您的後端寄信 API
      </p>
    </form>
  );
}
