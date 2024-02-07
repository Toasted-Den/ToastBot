const ms = require('ms');

const colors = require('colors');

const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = 
{
    name: 'mute',
    description: "this command allows a Admin or Moderator to mute a specfic member!",
    execute(message, args)
    {   
        // Admin
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

                let reason = args.slice(2).join(' ');
                const rLog = reason;

                if (target === message.member)
                {
                    console.log(" ".white);
                    console.log('MUTE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Mute command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: None".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - NO USER MENTIONED".red);

                    return message.channel.send('You cannot mute yourself');
                }

                if (target === message.guild.me)
                {
                    console.log(" ".white);
                    console.log('MUTE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Mute command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - MENTIONED USER IS BOT".red);
                    
                    return message.channel.send(message, 0, 'You cannot mute me');
                } 

                if (memberTartget.roles.highest.position >= message.member.roles.highest.position)
                {
                    console.log(" ".white);
                    console.log('MUTE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Mute command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("Reason: " + rLog + "".white);
                    console.log("FAILED - USER IS ABOVE MUTE ROLE".red);

                    return message.channel.send('You cannot mute someone with an equal or higher role.');
                }
                
                if (!args[1])
                {
                    memberTartget.roles.add(muteRole);

                    memberTartget.send("You have been muted until I decide to unmute you. Reason: `" + reason + "`. Muted by: <@" + auth + ">.").catch(error => {
                        console.error
                        (
                            "WARNING - DIRECT MESSAGE NOT SENT".red
                        );
                        console.log();
                    });

                    memberTartget.roles.add(muteRole);

                    console.log(" ".white);
                    console.log('MUTE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Mute command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("Time: INDEFINITELY".white);
                    console.log("Reason: " + rLog + "".white);
                    console.log("SUCCESS".green);

                    return message.reply("User has been muted.");
                }
                   
                let time = ms(args[1]);
                const timeLog = time;

                if (!reason || reason == "" || reason == " ")
                {
                    reason = 'None Provided';
                } 

                if (!time && !reason)
                {
                    reason = 'None Provided';
                }

                if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

                if (memberTartget.roles.cache.has(muteRole))
                {
                    console.log(" ".white);
                    console.log('MUTE: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Mute command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + mTarget + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - USER MENTIONED IS ALREADY MUTED".red);

                    return message.channel.send('Provided member is already muted');
                }

                memberTartget.roles.add(muteRole);

                time = time / 1000;

                memberTartget.send("You have been muted for: " + time + " seconds for: `" + reason + "`. Muted by: <@" + auth + ">.").catch(error => {
                    console.error
                    (
                        "WARNING - DIRECT MESSAGE NOT SENT".red
                    );
                    console.log();
                });

                console.log(" ".white);
                console.log('MUTE: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Mute command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + mTarget + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("Time: " + timeLog + "".white);
                console.log("Reason: " + rLog + "".white);
                console.log("SUCCESS".green);

                message.reply("User has been muted.");

                setTimeout(function () 
                {
                    if (!memberTartget.roles.cache.has(muteRole) || !target.roles.cache.has(muteRole)) 
                    {
                        console.log(" ".white);
                        console.log('UNMUTE: '.yellow);
                        console.log("Timestamp: " + new Date() + "".white);
                        console.log(memberTartget + " has already been unuted".white);
                        console.log("SUCCESS".green);

                    }
                    else
                    {
                        memberTartget.roles.remove(muteRole)
                        memberTartget.send("You have been unmuted!").catch(error => {
                            console.error
                                (
                                    "WARNING - DIRECT MESSAGE NOT SENT".red
                                );
                            console.log();
                        });

                        console.log(" ".white);
                        console.log('UNMUTE: '.yellow);
                        console.log("Timestamp: " + new Date() + "".white);
                        console.log(memberTartget + " was unmuted".white);
                        console.log("SUCCESS".green);
                    }
                }, ms(args[1]));
            }
            else
            {
                message.channel.send("Please mention a valid server member.")

                console.log(" ".white);
                console.log('MUTE: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Mute command.".white);
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
            console.log('MUTE: '.yellow);
            console.log("Timestamp: " + new Date() + "".white);
            console.log(auth + " called the Mute command.".white);
            console.log("Caller: " + auth + "".white);
            console.log("Victim: None".white);
            console.log("In Channel: " + channel + "".white);
            console.log("FAILED - USER DOES NOT HAVE PERMISSIONS".red);
        }
    }
}