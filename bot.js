const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;
const URL = "https://berserk0v.github.io/FMC/";

if (!TOKEN) {
  console.error("TOKEN not found");
  process.exit(1);
}

const app = express();
app.use(express.json());

// ❗ Telegram bot без polling
const bot = new TelegramBot(TOKEN);

// webhook endpoint
app.post("/webhook", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// ответ на сообщения
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

// health check (обязательно для Render)
app.get("/", (req, res) => {
  res.send("Bot is alive");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started on port", port);
});
