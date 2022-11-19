const Discord = require('discord.js');
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    var p = client.config.prefix
    const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#57a3bd')
	    .setTitle('Invite')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=1042462599331201056&permissions=8&scope=bot%20applications.commands')
      .setDescription(`
        Commands Available :
      `)
     .addFields(
	 	  { name: '━━ 🎶 ・ Music commands ━━', value: `\`${p}play\`, \`${p}stop\`, \`${p}skip\`, \`${p}forceskip\`, \`${p}queue\`, \`${p}nowplaying\`, \`${p}pause\`, \`${p}resume\`` },
      { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵'},
      { name: '━━ 🤖 ・ General commands ━━', value: `\`${p}help\`, \`${p}ping\`, \`${p}snipe\`` },
      { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵'},
      { name: '━━ 🎈 ・ Fun commands ━━', value: `\`${p}8ball\`, \`${p}say\`, \`${p}meme\`, \`${p}coinflip\``},
      { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵'},
      { name: '━━ 📸 ・ Image commands ━━', value: `\`${p}beautiful\`, \`${p}trash\`, \`${p}wanted\`, \`${p}slap\`, \`${p}hitler\`, \`${p}invert\`, \`${p}triggered\``},
      { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵'},   
	    )
	  .setThumbnail('https://images-ext-1.discordapp.net/external/par9iVec5Tdkx8b4IZ9V9wNpzXOaaYn774blZmbVEVM/https/3.bp.blogspot.com/-YWyKd18fF2Y/XPhmX2FCCKI/AAAAAAAMkNY/qSq4foSiMWEzdcqZ8t95ed6s5wx5Ds3QwCLcBGAs/s1600/AS0005352_09.gif')
	  .setFooter(`Page requested by ${message.author.username}`, message.author.displayAvatarURL());
  message.reply({ embeds: [infoEmbed] })
  }
}
