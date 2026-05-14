const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

const URL = "https://berserk0v.github.io/FMC/";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const sent = await bot.sendMessage(chatId,
`📊 КАЛЬКУЛЯТОР ТОПЛИВА`,
  {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📊 Открыть приложение",
            web_app: { url: URL }
          }
        ]
      ]
    }
  });
});
