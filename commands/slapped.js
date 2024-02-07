const ms = require('ms');

module.exports =
{
    name: 'slapped',
    description: "this command will slap a selected user",
    execute(message, args) {
        const target = message.mentions.users.first();
        const auth = message.author;
        const channel = message.channel.id;
        // Roll random numbers to either kill, knockout, or slap a user.
        let randomNum = Math.floor((Math.random() * 4) + 1);
        let KO = Math.floor((Math.random() * 50) + 0);
        let kill = Math.floor((Math.random() * 100) + 0);

        if (target) {
            // Knockout the target user
            if (KO == 49) {
                message.reply("<@" + auth + ">" + " slapped " + "<@" + target + ">" + " so hard they got knocked out!");

                console.log(" ".white);
                console.log('SLAP: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Slap command.".white);
                console.log("Slapper: " + auth.white);
                console.log("Victim: " + target.white);
                console.log("Outcome: Knockout".white);
                console.log("In Channel: " + channel.white);
                console.log("SUCCESS".green);
            }
            // Kill the target user
            else if (kill == 99) {
                message.reply("<@" + auth + ">" + " slapped " + "<@" + target + ">" + " so hard they fucking died!");

                console.log(" ".white);
                console.log('SLAP: '.yellow);
                console.log("Timestamp: " + new Date() + "".white);
                console.log(auth + " called the Slap command.".white);
                console.log("Slapper: " + auth.white);
                console.log("Victim: " + target.white);
                console.log("Outcome: Death".white);
                console.log("In Channel: " + channel.white);
                console.log("SUCCESS".green);
            }
            // Slap the target user
            else {
                if (randomNum == 1) {
                    message.reply("<@" + target + ">" + " just got fucking slapped!");

                    console.log(" ".white);
                    console.log('SLAP: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Slap command.".white);
                    console.log("Slapper: " + auth.white);
                    console.log("Victim: " + target.white);
                    console.log("Outcome: Slap".white);
                    console.log("In Channel: " + channel.white);
                    console.log("SUCCESS".green);
                }
                else if (randomNum == 2) {
                    message.reply("<@" + target + ">" + " just got fucking slapped upside the head!");

                    console.log(" ".white);
                    console.log('SLAP: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Slap command.".white);
                    console.log("Slapper: " + auth.white);
                    console.log("Victim: " + target.white);
                    console.log("Outcome: Slap".white);
                    console.log("In Channel: " + channel.white);
                    console.log("SUCCESS".green);
                }
                else if (randomNum == 3) {
                    message.reply("<@" + target + ">" + " just got slapped!");

                    console.log(" ".white);
                    console.log('SLAP: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Slap command.".white);
                    console.log("Slapper: " + auth.white);
                    console.log("Victim: " + target.white);
                    console.log("Outcome: Slap".white);
                    console.log("In Channel: " + channel.white);
                    console.log("SUCCESS".green);
                }
                else if (randomNum == 4) {
                    message.reply("<@" + target + ">" + " just got absolutely fucking slapped!");

                    console.log(" ".white);
                    console.log('SLAP: '.yellow);
                    console.log("Timestamp: " + new Date() + "".white);
                    console.log(auth + " called the Slap command.".white);
                    console.log("Slapper: " + auth.white);
                    console.log("Victim: " + target.white);
                    console.log("Outcome: Slap".white);
                    console.log("In Channel: " + channel.white);
                    console.log("SUCCESS".green);
                }
            }
        }
        // If not target is specified;
        else {
            message.channel.send("Can't execute slap command. No target specified.")

            console.log(" ".white);
            console.log('SLAP: '.yellow);
            console.log("Timestamp: " + new Date() + "".white);
            console.log(auth + " called the Slap command.".white);
            console.log("Slapper: " + auth.white);
            console.log("Victim: None".white);
            console.log("In Channel: " + channel.white);
            console.log("FAILED - USER DOES NOT HAVE PERMISSIONS".red);
        }
    }
}