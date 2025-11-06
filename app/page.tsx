'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Page() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: '產品方案', href: '#products' },
    { label: '服務優勢', href: '#features' },
    { label: '案例與客戶', href: '#customers' },
    { label: '關於我們', href: '#about' },
    { label: '聯絡我們', href: '#contact' },
  ];

  // ✅ 重點 1：return 用括號，且移除多餘的 "<"
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-1/3 h-[500px] w-[900px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold">PU</div>
            <div className="leading-tight">
              <span className="block text-lg font-semibold tracking-wide">PUYOUNG SCIENCE</span>
              <span className="block text-xs text-neutral-300">Innovate • Integrate • Inspire</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-neutral-300 transition hover:text-white">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              取得試用
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} className="rounded-xl px-2 py-2 text-neutral-200 hover:bg-white/5">
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-center font-semibold"
                >
                  取得試用
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:gap-16 md:pt-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI / IoT</span>{' '}
                驅動的企業級數位方案
              </h1>
            </motion.div>

            <p className="mt-4 max-w-xl text-neutral-300">
              低延遲、可擴展且安全的雲端架構，整合感測、儀控與資料分析，為您的產業升級提供動能。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110"
              >
                立即洽詢
              </a>
              <a href="#products" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">
                了解產品
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-neutral-400 md:grid-cols-4">
              {['低延遲', '高可靠', '雲端安全', '快速部署'].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 px-4 py-3 text-center backdrop-blur">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <div className="text-xs uppercase tracking-widest text-cyan-300">Realtime Dashboard</div>
                <div className="mt-2 text-2xl font-semibold">Operations Overview</div>
                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {[
                    { label: 'Active Devices', value: '128' },
                    { label: 'Uptime', value: '99.98%' },
                    { label: 'Events / min', value: '2.3k' },
                    { label: 'Latency', value: '42 ms' },
                    { label: 'Alerts', value: '3' },
                    { label: 'Regions', value: '7' },
                  ].map((k) => (
                    <div key={k.label} className="rounded-2xl border border-white/10 p-4">
                      <div className="text-xs text-neutral-400">{k.label}</div>
                      <div className="mt-1 text-xl font-bold">{k.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 其餘 sections：features / products / customers / about */}
      {/* ……（你的內容保持不變）…… */}

      <section id="contact" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">聯絡我們</h2>
              <p className="mt-2 max-w-lg text-neutral-300">留下您的需求，我們將在一個工作天內與您聯繫。</p>
              <div className="mt-6 space-y-3 text-neutral-300">
                <div>📧 airetup0912@hotmail.com</div>
                <div>📞 +886-0934483416</div>
                <div>🏢 高雄市鳳山區北昌五街21號5樓</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ✅ 重點 2：修正 footer 的收尾，並補上外層 div 的收尾 */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} PUYOUNG SCIENCE Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">隱私權政策</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">服務條款</a>
          </div>
        </div>
      </footer>
    </div>  {/* ← 最外層 div 結束 */}

  ); // ← return 結束
}
