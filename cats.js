import axios from "axios";

export const handleCatCommand = async (message, prefix) => {
  if (message.author.bot) return;

  if (message.content.startsWith(`${prefix}gato`)) {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      const catImageUrl = response.data[0].url;
      message.channel.send(catImageUrl);
    } catch (error) {
      console.error("Erro ao buscar a imagem de gato:", error);
      message.channel.send("Sem gatos no momento mardito");
    }
  }
};
