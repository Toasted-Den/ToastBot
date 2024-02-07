const ms = require('ms');
const colors = require('colors');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = 
{
    name: 'quarantine',
    description: "this command allows a Admin or Moderator to quarantine a specfic member!",
    execute(message, args)
    {
        // Admin
        if (message.member.roles.cache.has("762385517202898984") || message.member.roles.cache.has("762385800243314688"))
        {
            const target = message.mentions.users.first();
            const auth = message.author.id;
            const channel = message.channel.id;

            const qRole = message.guild.roles.cache.get('935335922768162846');
            const mRole = message.guild.roles.cache.get('762362558464000011');
            const modRole = message.guild.roles.cache.get('762385800243314688');

            if (target)
            {
                let memberTartget = message.guild.members.cache.get(target.id);
                const mTarget = memberTartget;

                let reason = args.slice(1).join(' ');
                const rLog = reason;
                
                if (memberTartget.roles.highest.position >= message.member.roles.highest.position)
                {
                    console.log(" ".white);
                    console.log('QUARANTINE:'.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Quarantine command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("Reason: " + rLog + "".white);
                    console.log("FAILED - USER IS ABOVE MUTE ROLE".red);

                    return message.channel.send('You cannot quarantine someone with an equal or higher role');
                }

                if (!reason || reason == "" || reason == " ")
                {
                    reason = 'None Provided';
                } 

                if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

                if (memberTartget.roles.cache.has('935335922768162846'))
                {
                    console.log(" ".white);
                    console.log('QUARANTINE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Quarantine command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - USER MENTIONED IS ALREADY QUARANTINED".red);

                    return message.channel.send('Provided member is already in quarantine.');
                }
                if (memberTartget.roles.cache.has('762385800243314688'))
                {
                    memberTartget.roles.add(qRole);
                    memberTartget.roles.remove(mRole);
                    memberTartget.roles.remove(modRole);

                    message.reply("<@" + memberTartget + "> has been quarantined!")
    
                    memberTartget.send("You have been quarantined until further notice. Reason: `" + reason + "`. Quarantined by: <@" + auth + ">.").catch(error => {
                        console.error
                        (
                            "WARNING - DIRECT MESSAGE NOT SENT".red
                        );
                        console.log();
                    });
    
                    console.log(" ".white);;
                    console.log('QUARANTINE:'.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Quarantine command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("Reason: " + rLog + "".white);
                    console.log("SUCCESS".green);
                }
                else
                {
                    memberTartget.roles.add(qRole);
                    memberTartget.roles.remove(mRole);
    
                    message.reply("<@" + memberTartget + "> has been quarantined!")
    
                    memberTartget.send("You have been quarantined until further notice. Reason: `" + reason + "`. Quarantined by: <@" + auth + ">.").catch(error => {
                        console.error
                        (
                            "WARNING - DIRECT MESSAGE NOT SENT".red
                        );
                        console.log();
                    });
    
                    console.log(" ".white);
                    console.log('QUARANTINE:'.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Quarantine command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("Reason: " + rLog + "".white);
                    console.log("SUCCESS".green);
                }
            }
            else
            {
                message.channel.send("Please mention a valid server member.")

                console.log(" ".white);
                console.log('QUARANTINE:'.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Quarantine command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: None".white);
                console.log("In Channel: " + channel + "".white);
                console.log("FAILED - NO USER MENTIONED".red);
            }
        }
        else
        {
            const target = message.mentions.users.first();
            const auth = message.author.id;
            const channel = message.channel.id;
            
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