const util = require("../util");

module.exports = {
    name: "nowplaying",
    aliases: ["np", "nowplay"],
    exec: (msg) => {
        const { music } = msg.guild;
        if (!music.player || !music.player.playing) return msg.channel.send(util.embed().setDescription("❌ | Currently not playing anything."));
        msg.channel.send(util.embed()
        
        
           .setAuthor("Nowplaying", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif" ,)
            
        
        .setDescription(`🎶 ${music.current.info.title}.`));
    
      
    }
};
