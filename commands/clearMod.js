const ms = require('ms');
const colors = require('colors');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = 
{
    name: 'clearMod',
    description: "this command allows a Admin or Moderator to clear a specfic member from quarantine!",
    execute(message, args)
    {
        // Admin
        if (message.member.roles.cache.has("762385517202898984"))
        {
            const target = message.mentions.users.first();
            const auth = message.author;
            const channel = message.channel.id;

            const qRole = message.guild.roles.cache.get('935335922768162846');
            const mRole = message.guild.roles.cache.get('762362558464000011');
            const modRole = message.guild.roles.cache.get('762385800243314688');

            if (target)
            {
                let memberTartget = message.guild.members.cache.get(target.id);
                const mTarget = memberTartget;


                if (memberTartget.roles.cache.has(mRole))
                {
                    console.log(" ".white);
                    console.log('CLEAR:'.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Clear command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - USER MENTIONED IS ALREADY CLEARED".red);

                    return message.channel.send('Provided member is already cleared');
                }

                memberTartget.roles.add(mRole);
                memberTartget.roles.add(modRole);
                memberTartget.roles.remove(qRole);

                message.reply("<@" + memberTartget + "> has been cleared!")

                memberTartget.send("You have been cleared from quarantine! cleared by: <@" + auth + ">.").catch(error => {
                    console.error
                    (
                        "WARNING - DIRECT MESSAGE NOT SENT".red
                    );
                    console.log();
                });

                console.log(" ".white);
                console.log('CLEAR:'.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Clear command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + mTarget + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("SUCCESS".green);
            }
            else
            {
                message.channel.send("Please mention a valid server member.")

                console.log(" ".white);
                console.log('CLEAR:'.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Clear command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: None".white);
                console.log("In Channel: " + channel + "".white);
                console.log("FAILED - NO USER MENTIONED".red);
            }
        }
        else
        {
            message.reply("You do not have permission to use this command.");

            console.log(" ".white);
            console.log('QUARANTINE:'.yellow);
            console.log("Timestamp: " + new Date() + "".white);
            console.log(auth + " called the Quarantine command.".white);
            console.log("Caller: " + auth + "".white);
            console.log("Victim: None".white);
            console.log("In Channel: " + channel + "".white);
            console.log("FAILED - USER DOES NOT HAVE PERMISSIONS".red);
        }
    }
}