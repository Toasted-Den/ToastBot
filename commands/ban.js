const colors = require('colors');
const Discord = require('discord.js');
const ms = require('ms');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = 
{
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args)
    {

        const auth = message.author;

        const target = message.mentions.users.first();

        const channel = message.channel.id;

        // Admin
        if (message.member.roles.cache.has("762385517202898984"))
        {
            if (target)
            {
                const memberTarget = message.guild.members.cache.get(target.id);

                let reason = args.slice(2).join(' ');
                const rLog = reason;
        
                let time = ms(args[1]);
                const timeLog = time;

                if (!reason || reason == "" || reason == " ")
                {
                    reason = "None Provided."
                }

                if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

                if (!time)
                {
                    console.log(" ".white);
                    console.log('BAN: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Ban command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim" + target.white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("SUCESS".greem);

                    memberTartget.send("You have been perminatly banned from **Toasted's Den** for: `" + reason + "`. Banned by: <@" + auth + ">.").catch(error => {
                        console.error
                        (
                            "*WARNING - DIRECT MESSAGE NOT SENT*".red
                        );
                        console.log();
                    });

                    memberTarget.ban();

                    return message.reply("<@" + memberTarget + "> has been perminantly banned from the server!")
                }

                if (target === message.author)
                {
                    console.log(" ".white);
                    console.log('BAN:'.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Ban command.".white);
                    console.log("Caller: " + auth + "".white);
                    console.log("Victim: " + auth + "".white);
                    console.log("In Channel: " + channel + "".white);
                    console.log("FAILED - CALLER IS MESSAGE AUTHOR".red);

                    return message.channel.send('You cannot ban yourself');
                }

                memberTarget.ban();
                message.channel.send("<@" + memberTarget + ">" + " was banned by: " + "<@" + message.author.id + ">"); 

                time = time / 1000;

                let displayTime = time;
                displayTime = time / 3600;

                memberTartget.send("You have been temporarly banned from **Toasted's Den** for: " + displayTime + " Hours for: `" + reason + "`. Muted by: <@" + auth + ">.").catch(error => {
                    console.error
                        (
                            "WARNING - DIRECT MESSAGE NOT SENT".red
                        );
                    console.log();
                });

                console.log(" ".white);
                console.log('BAN: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Mute command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: " + target + "".white);
                console.log("In Channel: " + channel + "".white);
                console.log("Time: " + timeLog + "".white);
                console.log("Reason: " + rLog + "".white);
                console.log("SUCCESS".green);

                setTimeout(function ()
                 {
                    memberTarget.unban();

                    memberTarget.send("You have been unbanned from **Toasted's Den**.!").catch(error => {
                        console.error
                            (
                                "*WARNING - DIRECT MESSAGE NOT SENT*".red
                            );
                        console.log();
                    });

                    console.log(" ".white);
                    console.log('UNBAN: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(target + " was unbanned".white);
                    console.log("SUCCESS".green);
                }, ms(args[1]));
            }
            else
            {
                message.channel.send("Please mention a valid server member.")

                console.log(" ".white);
                console.log('BAN:'.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Ban command.".white);
                console.log("Caller: " + auth + "".white);
                console.log("Victim: None".white);
                console.log("In Channel: " + channel + "".white);
                console.log("FAILED - NO USER MENTIONED".red);
            }
        }
        else
        {
           message.channel.send('You do not have permission to use this command!');

           console.log(" ".white);
           console.log('BAN:'.yellow);
           console.log("Timestamp: " + new Date() + "".white);
           console.log(auth + " called the Ban command.".white);
           console.log("Caller: " + auth + "".white);
           console.log("Victim: " + target + "".white);
           console.log("In Channel: " + channel + "".white);
           console.log("FAILED - USER DOES NOT HAVE PERMISSIONS".red);
        }
    }
}