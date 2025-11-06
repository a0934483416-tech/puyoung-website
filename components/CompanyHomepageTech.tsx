'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CompanyHomepageTech() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: '產品方案', href: '#products' },
    { label: '服務優勢', href: '#features' },
    { label: '案例與客戶', href: '#customers' },
    { label: '關於我們', href: '#about' },
    { label: '聯絡我們', href: '#contact' },
  ]

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
            <a href="#contact" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
              取得試用
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                <a href="#contact" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-center font-semibold">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      AI / IoT
                    </span>{" "}
                    驅動的企業級數位方案
                  </h1>
                </motion.div>
            <p className="mt-4 max-w-xl text-neutral-300">
              低延遲、可擴展且安全的雲端架構，整合感測、儀控與資料分析，為您的產業升級提供動能。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-cyan-500/20 hover:brightness-110">
                立即洽詢
              </a>
              <a href="#products" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">
                了解產品
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-neutral-400 md:grid-cols-4">
              {['低延遲','高可靠','雲端安全','快速部署'].map(t => (
                <div key={t} className="rounded-2xl border border-white/10 px-4 py-3 text-center backdrop-blur">{t}</div>
              ))}
            </div>
          </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >

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
                  ].map(k => (
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

      <section id="features" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">企業級服務優勢</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">從邊緣到雲端，提供一站式整合，縮短上線時程並降低維運成本。</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: '快速佈署', desc: 'CI/CD 自動化，從 Git 推送到全球 CDN' },
              { title: '高安全', desc: 'TLS、權限控管、審計記錄，資料安心' },
              { title: '可擴展', desc: '微服務架構，彈性擴容應對高流量' },
              { title: '資料可視化', desc: '歷史查詢、即時告警、API 對接' },
              { title: '異常通報', desc: '支援 Email / LINE / Webhook 多通道' },
              { title: '專業整合', desc: '串接 RS485/Modbus、MQTT、RESTful' },
            ].map(f => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-lg font-semibold text-white">{f.title}</div>
                <div className="mt-1 text-sm text-neutral-300">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">產品與方案</h2>
          <p className="mt-2 max-ww-2xl text-neutral-300">可依需求選擇展示型官網、全端平台或產線監控方案。</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: '展示型官網', price: 'NT$ 0 ~ 150/月', items: ['響應式設計','全球 CDN','自訂網域/SSL']},
              { name: '全端平台', price: 'NT$ 150 ~ 600/月', items: ['Next.js + API','資料庫(MySQL/Postgres)','表單/登入/後台']},
              { name: 'IoT 監控', price: '客製報價', items: ['MQTT + API','設備管理/歷史查詢','告警/報表/權限']},
            ].map(p => (
              <div key={p.name} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-xl font-semibold">{p.name}</div>
                <div className="mt-2 text-2xl font-extrabold text-cyan-400">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {p.items.map(it => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-center font-semibold hover:brightness-110">
                  洽詢方案
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="customers" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">合作與案例</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">我們協助製造、醫療與農業等領域完成數位轉型。</p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="grid h-20 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm text-neutral-300">
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">關於我們</h2>
              <p className="mt-3 text-neutral-300">
                我們是一支專注於 AI、IoT 與雲端平台的跨域團隊，擁有從硬體設計、韌體開發到資料平台的完整能力，致力於為產業帶來可落地的技術價值。
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300 md:max-w-md">
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-2xl font-bold text-white">7+</div> 服務地區</div>
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-2xl font-bold text-white">99.9%</div> SLA 目標</div>
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-2xl font-bold text-white">100+</div> 連網設備</div>
                <div className="rounded-2xl border border-white/10 p-4"><div className="text-2xl font-bold text-white">24/7</div> 技術支援</div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/30 to-blue-600/30" />
              <div className="mt-3 text-sm text-neutral-300">（可放置團隊或設備照片）</div>
            </div>
          </div>
        </div>
      </section>

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
            <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-300">姓名</label>
                  <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500" placeholder="example@company.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-neutral-300">需求說明</label>
                <textarea className="mt-1 h-28 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-neutral-500" placeholder="請簡述您的專案或需求…" />
              </div>
              <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold hover:brightness-110">
                送出需求
              </button>
              <p className="mt-3 text-center text-xs text-neutral-400">此為示意表單，可連接至您後端或外部表單服務</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} PUYOUNG SCIENCE Co., Ltd. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">隱私權政策</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">服務條款</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
