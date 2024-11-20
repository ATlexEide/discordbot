import { EmbedBuilder } from "@discordjs/builders";

export function getGamemodeEmbed(event) {
  const chatEmbed = new EmbedBuilder()
    .setAuthor({
      name: event.player,
      iconURL: `https://minotar.net/avatar/${event.player}.png`,
    })
    .setTitle("Changed gamemode")
    .setDescription(
      `*from ${event.gamemode.toLowerCase()} to ${event.newGamemode.toLowerCase()}*`
    );
  // .setDescription(``);
  return { embeds: [chatEmbed] };
}