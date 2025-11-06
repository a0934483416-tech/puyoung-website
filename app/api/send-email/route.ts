// @ts-nocheck
import nodemailer from "nodemailer";

// nodemailer 需要 Node.js runtime（不是 Edge）
export const runtime = "nodejs";
// 避免被快取
export const dynamic = "force-dynamic";

function need(key: string) {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "MISSING_FIELDS" }),
        { status: 400 }
      );
    }

    // 從環境變數讀取（不要寫死在程式碼）
    const SMTP_USER = need("SMTP_USER");      // 你的 Gmail
    const SMTP_PASS = need("SMTP_PASS");      // Gmail App Password（16碼）
    const SMTP_TO   = need("SMTP_TO");        // 你想收到通知的信箱
    const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER; // 可不填，預設同 USER

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      replyTo: email, // 回信時會回到訪客 email
      subject: `📩 新的官網詢問：${name}`,
      html: `
        <h2>🔔 網站收到新的詢問表單</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>Email：</strong> ${email}</p>
        <p><strong>需求內容：</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("send-email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "SEND_FAILED" }),
      { status: 500 }
    );
  }
}
