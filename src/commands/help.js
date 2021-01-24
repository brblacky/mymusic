const util = require("../util");

const unlisted = ["eval", "source"];

module.exports = {
    name: "help",
    aliases: ["h", "?"],
    exec: (msg) => {
        const commands = msg.client.commands
            .filter(c => !unlisted.includes(c.name))
            .map(c => `\`${c.name}\``);

        const embed = util.embed()
            .setAuthor("Commands of "+msg.client.user.username, "https://raw.githubusercontent.com/brblacky/mymusic/main/assets/Added.gif?token=ASMJNSYITTD3U5HXWPCFPWDABUY4Q")
       
     .setDescription(commands.join(", "))
   
    .setImage('https://cdn.discordapp.com/attachments/592376487974535178/802051186299633704/1611294197856.jpg')
    
   .setTimestamp()
            
     
    
    .addField(
    "Invite link: ", `**[Click Here!](https://discord.com/oauth2/authorize?client_id=648733614929870848&permissions=70282305&scope=bot)**`,
     true
     )
     .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/hfqcGVTNZ9)**`,
     true
   
       )
         msg.channel.send(embed);
    }
  };

