import { Client, GatewayIntentBits } from "discord.js";
import { handleCatCommand } from "./cats.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const prefix = "~";

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log("O pai ta ON (onlinea)");
});

client.on("messageCreate", (message) => {
  handleCatCommand(message, prefix);
});
