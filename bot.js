const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  throw new Error("TOKEN not found in env");
}

const bot = new TelegramBot(TOKEN, { polling: true });

const URL = "https://berserk0v.github.io/FMC/";

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "📊 Калькулятор:", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "Открыть",
          web_app: { url: URL }
        }
      ]]
    }
  });
});
