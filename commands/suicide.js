module.exports = 
{
    name: 'suicide',
    description: "A command that kicks the user who called upon it!",
    execute(message, args)
    {
        let dmCheck = 0;
        const member = message.author;
        const memberTarget = message.guild.members.cache.get(member.id);

        if (message.member.roles.cache.has("762385517202898984"))
        {
            message.channel.send("Sorry <@" + memberTarget + ">, you're not taking the easy way out on this one!")
        }
        else
        {
            message.author.send("it's a shame you have to go :("
            + "\n" + 
            "feel free to join back whenever you feel like it, we'll keep your seat warm for you!"
            + "\n" + 
            "https://discord.gg/vWE9vt5j7B")
            .catch(error => 
                {
                console.error(
                  `Could not send help DM to ${message.author.tag}.\n`,
                  error
                );
                dmCheck = 1;
                return message.reply("it seems like I can't DM you! Do you have DMs disabled?");
           });
    
            if (member && dmCheck == 0)
            {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick()
                .catch(error => 
                {
                    console.error(
                      `Could not kick ${message.author.tag}.\n`,
                      error
                    );
                    message.reply("it seems like I can't kick you :(");
                });
            }
        }
    }
}