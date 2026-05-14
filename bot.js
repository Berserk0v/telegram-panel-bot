const CHANNEL = "@your_channel_username";
const URL = "https://berserk0v.github.io/FMC/";

bot.onText(/\/publish/, async (msg) => {

  const sent = await bot.sendMessage(CHANNEL, "🚀 Калькулятор топливной смеси", {
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

  // закрепляем сообщение
  await bot.pinChatMessage(CHANNEL, sent.message_id);
});
