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
            .setAuthor("Command List", msg.client.user.displayAvatarURL())
            .setDescription(commands.join(", "))
            
            .setTimestamp()
            
           .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/hfqcGVTNZ9)**`,
     true
    )
    .addField(
    "Invite link: ", `**[Click Here!](https://discord.com/oauth2/authorize?client_id=648733614929870848&permissions=70282305&scope=bot)**`, 
    
    )
    
    msg.channel.send(embed);
    }
};
