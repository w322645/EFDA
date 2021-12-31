const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Ayarlar Kısmından Bakmanız Daha Sağlıklı Olucaktır"];
	let region = {
			"us-central": "Amerika :flag_us:" || "Bölgesi Otomatik",
			"us-east": "Doğu Amerika :flag_us:"|| "Bölgesi Otomatik",
			"us-south": "Güney Amerika :flag_us:"|| "Bölgesi Otomatik",
			"us-west": "Batı Amerika :flag_us:"|| "Bölgesi Otomatik",
			"eu-west": "Batı Avrupa :flag_eu:"|| "Bölgesi Otomatik",
			"eu-central": "Avrupa :flag_eu:"|| "Bölgesi Otomatik",
			"singapore": "Singapur :flag_sg:"|| "Bölgesi Otomatik",
			"london": "Londra :flag_gb:"|| "Bölgesi Otomatik",
			"japan": "Japonya :flag_jp:"|| "Bölgesi Otomatik",
			"russia": "Rusya :flag_ru:"|| "Bölgesi Otomatik",
			"hongkong": "Hong Kong :flag_hk:"|| "Bölgesi Otomatik",
			"brazil": "Brezilya :flag_br:"|| "Bölgesi Otomatik",
			"singapore": "Singapur :flag_sg:"|| "Bölgesi Otomatik",
			"sydney": "Sidney :flag_au:"|| "Bölgesi Otomatik",
			"southafrica": "Güney Afrika :flag_za:"|| "Bölgesi Otomatik",
    "amsterdam": "Hollanda :flag_nl:"|| "Bölgesi Otomatik",
				"europe": "Avrupa :flag_eu:"|| "Bölgesi Otomatik"

	}
  var Bölge = region || "Bölge Yok"

	
			const yukleniyor = await msg.channel.send(`Sunucu Bilgileri Araştırılıyor Ve Veriler Analiz Ediliyor`);

let sunucu = new Discord.MessageEmbed()
.setAuthor('Sunucu Bilgisi', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('👑 Sunucu Bilgileri 👑', `**Sunucu İsmi:** ${guild.name} \n**Sunucu ID:** \`${msg.guild.id}\` \n**Sunucu Sahibi:** ${guild.owner} \n**Bulunduğu Bölge:** ${Bölge[msg.guild.region]} \n**Kuruluş Tarihi:** \`${checkDays(msg.guild.createdAt)}\` \n **Discord Verify Levels:** \`${verifLevels}\`
`)
.addField(`👤 Üye Bilgileri 👤 `, `**Toplam Üye:** \`${humanCount}\` \n**Toplam Bot:** \`${botCount}\` \n**Rol Sayısı:** \`${guild.roles.cache.size}\``)
.addField(`🌏 Kanallar 🌏`, ` **Yazı:** \`${msg.guild.channels.cache.filter(c => c.type === 'text').size}\` \n **Sesli:** \`${msg.guild.channels.cache.filter(c => c.type === 'voice').size}\` \n **Kategori:** \`${msg.guild.channels.cache.filter(c => c.type === 'category').size}\``)
.setTimestamp()
.setColor('#D2EE07')
.setFooter('Sunucu Bilgi', msg.guild.iconURL())
        return yukleniyor.edit('', sunucu);

}; 

module.exports.conf = {
aliases: ['sunucubilgi','sb','sunucu'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'sunucu-bilgi',
    description: 'Sunucu hakkında bilgi verir.',
    usage: 'sunucu-bilgi'
};