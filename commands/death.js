const colors = require('colors');

module.exports =
{
    name: 'pinged',
    description: "this is a ping command!",
    execute(message, args) {
        auth = message.author;
        channel = message.channel.id;

        message.channel.send("Sadly this story has come to an end as Kind Mans pipe bomb blew up. As Toasted Den and his mother hold each other and Toasted's Father dives under the table, Kind Mans pipe bomb obliterates the court room. After the dust has settled, Toasted, his Mother, and Kind Man emerge from the ruins of the court room, Toasted's Father is no where to be seen. Later that day, emergency services would find Toasted's Fathers body torn into multiple pieces. Toasted and his Mother would use Toasted's Fathers money to buy a huge fucking house and a bunch of supercars and live happily ever after."
        + "\n" + '*The End*');

        console.log(" ".white);
        console.log('PING:'.yellow);
        console.log("Timestamp: " + new Date() + "".white);
        console.log(auth + " called the Ping command.".white);
        console.log("In Channel: " + channel + "".white);
        console.log("SUCCESS".green);
    }
}