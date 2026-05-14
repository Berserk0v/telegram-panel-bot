const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  console.error("TOKEN not found in env");
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

const URL = "https://berserk0v.github.io/FMC/";

console.log("Bot started");

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "📊 Калькулятор:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть",
            web_app: { url: URL }
          }
        ]
      ]
    }
  });
});
