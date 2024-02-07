const Discord = require('discord.js');
const talkedRecently = new Set();
const ms = require('ms');
const colors = require('colors');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = 
{
    name: 'silence',
    description: "this command allows a user to temporarly silence another user.!",
    execute(message, args)
    {   
        const target = message.mentions.users.first();
        const auth = message.author;
        const channel = message.channel.id;
        const sRole = message.guild.roles.cache.get('763920982087565342')

        let memberTartget = message.guild.members.cache.get(target.id);
        const mTarget = memberTartget;

        if (target)
        {
            if (talkedRecently.has(message.author.id)) 
            {
                message.reply("Please wait 1 hour before executing this command again");

                console.log(" ".white);
                console.log("[" + new Date() + "]".white);
                console.log('SILENCE: '.yellow);
                console.log(auth + " called the Silence command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + mTarget + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("Time: 10 Seconds".white);
                console.log("SUCCESS".green);
            } 
            else 
            {
                message.reply("<@" + memberTartget + "> has been silenced...");
                mTarget.roles.add('763920982087565342');

                console.log(" ".white);
                console.log("[" + new Date() + "]".white);
                console.log('SILENCE: '.yellow);
                console.log(auth + " called the Silence command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + mTarget + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("FAILED - USER IS STILL ON COOLDOWN".red);

                setTimeout(function () 
                {
                    mTarget.roles.remove('763920982087565342')

                    console.log(" ".white);
                    console.log("[" + new Date() + "]".white);
                    console.log('SILENCE: '.yellow);
                    console.log(memberTartget + " was unmuted".white);
                    console.log("SUCCESS".green);
                    
                }, 10000);

                talkedRecently.add(message.author.id);
                setTimeout(() => 
                {
                    talkedRecently.delete(message.author.id);
                }, 3600000);
            }
        }
        else if (!target)
        {
            message.reply("Please mention a user.");

            console.log(" ".white);
            console.log("[" + new Date() + "]".white);
            console.log('SILENCE: '.yellow);
            console.log(auth + " called the Silence command.".white);
            console.log("Caller: " + auth + "".white);
            console.log("Victim: None".white);
            console.log("In Channel: " + channel + "".white);
            console.log("FAILED - NO USER MENTIONED".red);
        }
    }
}


