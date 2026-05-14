const CHANNEL = "@your_channel_username";

bot.onText(/\/post/, (msg) => {
  bot.sendMessage(CHANNEL, "🚀 Калькулятор топливной смеси:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📊 Открыть приложение",
            web_app: {
              url: "https://berserk0v.github.io/FMC/"
            }
          }
        ]
      ]
    }
  });
});
