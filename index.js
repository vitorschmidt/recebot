import { Client, GatewayIntentBits } from "discord.js";

console.log("aham");

const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds],
});

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log("O pai ta ON (online)");
});
