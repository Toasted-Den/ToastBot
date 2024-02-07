module.exports = 
{
    name: 'clear',
    description: "this command will clear x amount of messages!",
    async execute(message, args)
    {
        // Admin
        if (message.member.roles.cache.has("762385517202898984"))
        {
            if (!args[0]) return message.reply("Please enter the ammount of messages you would like to clear");

            if (isNaN(args[0])) return message.reply("Please enter a valid integer.");
    
            if (args[0] > 2048) return message.reply("You can't delete more then 2048 messages.");
            if (args[0] < 1) return message.reply("You must delete atleast one message.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>
            {
                message.channel.bulkDelete(messages);
            });
        }
        else if (message.member.roles.cache.has("883469644638347302"))
        {
            if (!args[0]) return message.reply("Please enter the ammount of messages you would like to clear");

            if (isNaN(args[0])) return message.reply("Please enter a valid integer.");
    
            if (args[0] > 2048) return message.reply("You can't delete more then 2048 messages.");
            if (args[0] < 1) return message.reply("You must delete atleast one message.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>
            {
                message.channel.bulkDelete(messages);
            });
        }
        // M
        else if (message.member.roles.cache.has("762385800243314688"))
        {
            if (!args[0]) return message.reply("Please enter the ammount of messages you would like to clear");

            if (isNaN(args[0])) return message.reply("Please enter a valid integer.");
    
            if (args[0] > 10) return message.reply("You can't delete more then 10 messages.");
            if (args[0] < 1) return message.reply("You must delete atleast one message.");
    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>
            {
                message.channel.bulkDelete(messages);

                const auth = message.author;
                const channel = message.channel.id;

                console.log(" ".white);
                console.log("Timestamp: " + new Date() + "".white);
                console.log('CLEAR: '.yellow);
                console.log(auth + " cleared " + args[0] + " messages in channel: " + channel + ".".white);
                console.log("SUCCESS".green);
            });
        }
        else
        {
            message.channel.send('You do not have permission to use this command!');

            const auth = message.author;
            const channel = message.channel.id;

            console.log(" ".white);
            console.log("Timestamp: " + new Date() + "".white);
            console.log('CLEAR: '.yellow);
            console.log(auth + "  tried to clear " + args[0] + " messages in channel: " + channel + ". User is missing perms".white);
            console.log("FAILED".red);
        }
    }
}