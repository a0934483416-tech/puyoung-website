// @ts-nocheck
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // ===== ✅ 請填入你的 SMTP 設定 =====
  const SMTP_USER = "rexpuyoung@gmail.com";      // Gmail帳號
  const SMTP_PASS = "qdmwdsddebehrnnd";          // Gmail應用程式密碼（不是登入密碼）
  const SMTP_FROM = "rexpuyoung@gmail.com";      // 發件者
  const SMTP_TO = "airetup0912@hotmail.com";     // 收件者（你要收到通知的信）

  // ===== 建立寄信連線 =====
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      subject: `📩 新的官網詢問來自：${name}`,
      html: `
        <h2>🔔 網站收到新的詢問表單</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>Email：</strong> ${email}</p>
        <p><strong>需求內容：</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
