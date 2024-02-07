module.exports = 
{
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args)
    {
         // Admin
         if (message.member.roles.cache.has("762385517202898984"))
         {
            const member = message.mentions.users.first();
            
            if (member)
            {
                const memberTarget = message.guild.members.cache.get(member.id);

                memberTarget.kick();
                message.channel.send("<@" + memberTarget + ">" + " was kicked by: " + "<@" + message.author.id + ">"); 
            }
            else
            {
                message.channel.send("Please mention a valid server member.")
            }
         }

         // Moderator
         else if (message.member.roles.cache.has("762385800243314688"))
         {
            const member = message.mentions.users.first();

            if (member)
            {
                const memberTarget = message.guild.members.cache.get(member.id);

                if (memberTarget.member.roles.cache.has("762385517202898984"))
                {
                    message.channel.send("You can't kick Admins.")
                }
                else if (memberTarget.member.roles.cache.has("762385800243314688"))
                {
                    message.channel.send("Slow down there bud, you're not allowed to do that.")
                }
                else
                {
                    memberTarget.kick();
                    message.channel.send("<@" + memberTarget + ">" + " was kicked by: " + "<@" + message.author.id + ">");
                }
            }
            else
            {
                message.channel.send("Please mention a valid server member.")
            }
         }
         else
         {
            message.channel.send('You do not have permission to use this command!');
         }
    }
}