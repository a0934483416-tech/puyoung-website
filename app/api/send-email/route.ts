import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
