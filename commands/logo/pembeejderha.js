const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/cc9a22ce-f65c-40ff-9eac-43c26817f44a?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Mor Ejderha Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['purple-dragon','mor-ejderha-logo'],
    permLevel: 0
}

exports.help = {
    name: 'grssdesfqdassssssdaxxxxxxxxxxxxddddsssssssen',
    description: 'Yasfssdsdssdqxxxxxxxxxxxdddddddddddzdıssssssssssssssağsdsınız yazıyı bannera çevirir.',
    usage: 'gresdessfsssssaxdqdddxddddsssssssssn ds<syasazı>'
}