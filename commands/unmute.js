const ms = require('ms');
const colors = require('colors');
const Discord = require('discord.js');

module.exports = 
{
    name: 'unmute',
    description: "this command allows a Admin or Moderator to unmute a specfic member!",
    execute(message, args)
    {   
        if (message.member.roles.cache.has("762385517202898984") || message.member.roles.cache.has("762385800243314688"))
        {
            const target = message.mentions.users.first();
            const auth = message.author;
            const channel = message.channel.id;

            if (target)
            {
                const muteRole = message.guild.roles.cache.get('763920982087565342')

                let memberTartget = message.guild.members.cache.get(target.id);
                const mTarget = memberTartget;

                memberTartget.roles.add(muteRole);

                memberTartget.send("You have been unmuted by <@" + auth + ">.").catch(error => {
                    console.error
                    (
                        "WARNING - DIRECT MESSAGE NOT SENT".red
                    );
                    console.log();
                });

                memberTartget.roles.remove(muteRole);

                console.log(" ".white);
                console.log('MUTE: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Unmute command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + mTarget + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("SUCCESS".green);

                return message.reply("User has been unmuted.");
            }
            else
            {
                console.log(" ".white);
                console.log('QUARANTINE:'.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Quarantine command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: None".white);
                console.log("In Channel: " + channel + "".white);
                console.log("FAILED - NO USER MENTIONED".red);

                return message.reply("Please mention a valid user.")
            }
        }
        else
        {
            message.reply("You do not have permissins to mute members.")

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