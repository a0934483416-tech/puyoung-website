import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // TODO: ← 這四個請你自行填入
  const SMTP_USER = "rexpuyoung@gmail.com";      // 你的 Gmail，例如：example@gmail.com
  const SMTP_PASS = "qdmwdsddebehrnnd";      // Gmail 應用程式密碼（不是登入密碼）
  const SMTP_FROM = "rexpuyoung@gmail.com";      // 發件者 Email（通常同 SMTP_USER）
  const SMTP_TO = "airetup0912@hotmail.com";        // 收件人 Email（你希望收到通知的 Email）

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
        <h2>網站收到新詢問</h2>
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
