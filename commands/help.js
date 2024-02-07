const colors = require('colors');

module.exports = 
{
    name: 'help',
    description: "this command displays every command to the user.!",
    execute(message, args)
    {
        message.reply('Hey there, heres a list of all the commands for ToastBot!'
        + "\n" +
        "**User**"
        + "\n" +
        // Start of code-box
        "```"
        + "\n" +
        "!help - Displays all ToastBot commands to the users who called it."
        + "\n" +
        "!ping - Tests to see if ToastBot is online."
        + "\n" +
        "!Kill <@User> - Kills a specified user."
        + "\n" +
        "!slap <@User> - Slaps a specified user."
        + "\n" +
        "!silence <@User> - Allows the message author to mute a specific user for 10s."
        + "\n" +
        "```"
        // Emd of code-box
    
        + " " +
        "**Moderation**"
        + " " +

  // Start of code-box
  "```"
  + "\n" +
  "!clean [# of messages] - Allows a moderator to mass delete messages in a specidic channel."
  + "\n" +
  "!mute <@User> [Time] <Reason> - Mutes a specifed user for a set time limit."
  + "\n" +
  "!quarantine <@User <Reason> - Quarantines a specifed user. Once quarantined, the user will be sent to he #quarantine channel."
  + "\n" +
  "!clear <@User> - Clears the specified user from quarantine"
  + "\n" +
  "!unmute <@User> - Unmutes the specfied user."
  + "\n" +
  "!kick <@User> <Reason> - Removes the specified user from the server.."
  + "\n" +
  "!ban <@User> <Reason> - Bans a specified user from the server *ADMIN ONLY*."
  + " " +
  "```"
  // End of code-box


    + "\n" +
    "**ToastBot info:**"
    + "\n" +
    "Developed by <@838892228721246239> and <@431241025856602116>."
    + "\n" +
    "Current Node.js Version: `v16.13.1`"
    + "\n" +
    "Current discord.js Version: `v13.0.0`"
    + "\n" +
    "ToastBot Version: `v1.01`");

    const auth = message.author;
    const channel = message.channel.id;

    console.log(" ".white);
    console.log('HELP: '.yellow);
    console.log("Timestamp: " + new Date() + "".white);
    console.log(auth + " called the Help command in channel: " + channel + ".".white);
    console.log("SUCCESS".green);
    }
}