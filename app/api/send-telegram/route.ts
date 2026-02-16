import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = "7782157467:AAEiMm_UiBtyYD_5qOHkUQp5uJl60K_poLU";
const CHAT_ID = "-4667528349";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, product, message, formType } = body;

    let text = "";

    if (formType === "order") {
      text =
        `📦 *Новая заявка на товар*\n\n` +
        `👤 *Имя:* ${escapeMarkdown(name)}\n` +
        `📞 *Телефон:* ${escapeMarkdown(phone)}\n` +
        (email ? `📧 *Email:* ${escapeMarkdown(email)}\n` : "") +
        (product ? `🏷 *Товар:* ${escapeMarkdown(product)}\n` : "") +
        (message ? `💬 *Сообщение:* ${escapeMarkdown(message)}` : "");
    } else {
      text =
        `📩 *Новая заявка с сайта*\n\n` +
        `👤 *Имя:* ${escapeMarkdown(name)}\n` +
        `📞 *Телефон:* ${escapeMarkdown(phone)}`;
    }

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const error = await telegramRes.text();
      console.error("Telegram API error:", error);
      return NextResponse.json(
        { success: false, error: "Ошибка отправки" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send telegram error:", error);
    return NextResponse.json(
      { success: false, error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
