const ms = require('ms');

module.exports = 
{
    name: 'kill',
    description: "this command will kill a selected user",
    execute(message, args)
    {   
        const target = message.mentions.users.first();
        let killMsg = Math.floor((Math.random() * 61) + 1);
        const auth = message.author;

        if (target)
        {
            if (killMsg == 1)
            {
                message.reply("<@" + target + ">" + " Just got killed!"
                + "\n" +  
                "*Tango down!*");
            }
            else if (killMsg == 2)
            {
                message.reply("<@" + target + ">" + " Just ate a .50 Cal!"
                + "\n" +  
                "*Scratched one more!*");
            }
            else if (killMsg == 3)
            {
                message.reply("<@" + target + ">" + " just took a round to the head!"
                + "\n" +  
                "*Smoked'em!*");
            }
            else if (killMsg == 4)
            {
                message.reply(" TOAST-10 Warthog on approach, raining fire on target " + "<@" + target + ">"
                + "\n" +  
                "*Enemy down, good shooting!*");
            }
            else if (killMsg == 5)
            {
                message.reply("<@" + target + ">" + " failed to open their chute."
                + "\n" +  
                "*You ain't gonna jump no more!*");
            }
            else if (killMsg == 6)
            {
                message.reply("<@" + target + ">" + " was picked off by a sniper!"
                + "\n" +  
                "*One shot, one kill!*");
            }
            else if (killMsg == 7)
            {
                message.reply("<@" + target + ">" + " was just sent to New Orleans!"
                + "\n" +  
                "*They shall spend their life in sin and misery, in the house of The Rising Sun!*");
            }
            else if (killMsg == 8)
            {
                message.reply("<@" + target + ">" + " just got executed!"
                + "\n" +  
                "*dropped'em!*");
            }
            // else if (killMsg == 9)
            // {
            //     message.reply("<@" + target + ">" + " was ran over by a reindeer!"
            //     + "\n" +  
            //     "*Not so merry Christmas, huh...*");
            // }
            else if (killMsg == 10 || killMsg == 9)
            {
                message.reply("<@" + target + ">" + " was biten by a walker!"
                + "\n" +  
                "*Slow and painful...*");
            }
            else if (killMsg == 11)
            {
                message.reply("<@" + target + ">" + " just got fucking slapped!"
                + "\n" +  
                "*That ones gonna hurt in the morning!*");
            }
            else if (killMsg == 12)
            {
                message.reply("<@" + target + ">" + " just took a 12-gauge to the face!"
                + "\n" +  
                "*Open season!*");
            }
            else if (killMsg == 13)
            {
                message.reply("<@" + target + ">" + " just got crushed by an O.D.S.T drop pod!"
                + "\n" +  
                "*For a brick, he flew pretty good!*");
            }
            else if (killMsg == 14)
            {
                message.reply("<@" + target + ">" + " just got killed by 66 tons of straight-up, H.E-spewing dee-vine intervention!"
                + "\n" +  
                "*Thanks for the tank, he never gets me anything.*");
            }
            else if (killMsg == 15)
            {
                message.reply("<@" + target + ">" + " just got mowed down by enemy machine gun fire!"
                + "\n" +  
                "*Oh I know what the ladies like!*");
            }
            else if (killMsg == 16)
            {
                message.reply("<@" + target + ">" + " just got picked off by a sniper jackel!"
                + "\n" +  
                "*Please, don't shake the lightbulb!*");
            }
            else if (killMsg == 17)
            {
                message.reply("<@" + target + ">" + " just lost a duel to " + "<@" + auth + ">!"
                + "\n" +  
                "*Fastest hand in the wild west!*");
            }
            else if (killMsg == 18)
            {
                message.reply("<@" + target + ">" + " forgot to reload his rifle and got killed!"
                + "\n" +  
                "*Switching to your pistol is always faster than reloading!*");
            }
            else if (killMsg == 19)
            {
                message.reply("<@" + target + ">" + " was betrayed by his comrades!"
                + "\n" +  
                "*He forgot, no Russian.*");
            }
            else if (killMsg == 20)
            {
                message.reply("<@" + target + ">" + " was brainwashed by the numbers!"
                + "\n" +  
                "```16 18 12 54 57 38 79 97 88 90 30 53 34 65 18 57 47 90 92```");
            }
            else if (killMsg == 21)
            {
                message.reply("<@" + target + ">" + " forgot to turn off reactor 4 and caused a nuclear meltdown!"
                + "\n" +  
                "*50,000 People used to live here, now its a ghost town.*");
            }
            else if (killMsg == 22)
            {
                message.reply("<@" + target + ">" + " got their head bonked in by a caveman!"
                + "\n" +  
                "*Sticks, two sticks and a rock!*");
            }
            else if (killMsg == 23)
            {
                message.reply("<@" + target + ">" + " was caught in the crossfire!"
                + "\n" +  
                '*Did you know the term "collateral damage" originated during the Vietnam War? Referring to friendly fire or to the intentional killing of non-combatants and destruction of their property?*');
            }
            else if (killMsg == 24)
            {
                message.reply("<@" + target + ">" + " dug straight down!"
                + "\n" +  
                "*You Died*");
            }
            else if (killMsg == 25)
            {
                message.reply("<@" + target + ">" + " was ripped int a million peices while trying to time travel!"
                + "\n" +  
                "*Didn't have enough cesium-137 huh?*");
            }
            else if (killMsg == 26)
            {
                message.reply("<@" + target + ">" + " forgot to tighten their Long Fall Boots!"
                + "\n" +  
                "*v = Δs / Δt*");
            }
            else if (killMsg == 27)
            {
                message.reply("<@" + target + ">" + " was turned into some 1's and 0's and is now archived on a hard drive!"
                + "\n" +  
                "*```01001000 01101111 01110111 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01101000 01101111 01101100 01100100 01101001 01101110 01100111 00100000 01110101 01110000 00111111 00100000 01000010 01100101 01100011 01100001 01110101 01110011 01100101 00100000 01101001 00100111 01101101 00100000 01100001 00100000 01110000 01101111 01110100 01100001 01110100 01101111 00100001```*");
            }
            else if (killMsg == 28)
            {
                message.reply("<@" + target + ">" + " took a 5.56mm round to the chest at the front of a bank!"
                + "\n" +  
                "*Guys, the thermal drill, go get it!*");
            }
            else if (killMsg == 29)
            {
                message.reply("<@" + target + ">" + " was turned into a BIP-39 passphrase."
                + "\n" +  
                "*Hey hey heyyyyyyy!*");
            }
            else if (killMsg == 30)
            {
                message.reply("<@" + target + ">" + " was infected by The Flood!"
                + "\n" +  
                "*Kill me or release me parasite, but do not waste my time with talk!*");
            }
            else if (killMsg == 31)
            {
                message.reply("<@" + target + ">" + " died while trying o Pack-A-Punch their weapon!"
                + "\n" +  
                "*Revive me bro, I have the Ray Gun!*");
            }
            else if (killMsg == 32)
            {
                message.reply("<@" + target + ">" + " didn't make the jump into the Forward Onto Dawn!"
                + "\n" +  
                "*Were it so easy...*");
            }
            else if (killMsg == 33)
            {
                message.reply("<@" + target + ">" + " had their vehicle hijacked by " + "<@" + auth + ">!"
                + "\n" +  
                "*Roadog!*");
            }
            else if (killMsg == 34)
            {
                message.reply("<@" + target + ">" + " died to a lack of <@431241025856602116> videos"
                + "\n" +  
                '"*Remember, the funniest funny is not being funny at all!"*');
            }
            else if (killMsg == 35)
            {
                message.reply("<@" + auth + ">" + " is on an killstreak and called an AC-130 gunship on " + "<@" + target + ">!"
                + "\n" +  
                "*Enemy AC-130 above!!*");
            }
            else if (killMsg == 36)
            {
                message.reply("<@" + target + ">" + " was obliterated by " + "<@" + auth + ">'s tactical nuke"
                + "\n" +  
                "*...*");
            }
            else if (killMsg == 37)
            {
                message.reply("<@" + target + ">" + " developed a severe allergy to living"
                + "\n" +  
                "*COVID-20 has evolved!*");
            }
            else if (killMsg == 38)
            {
                message.reply("<@" + target + ">" + " uninstalled life.exe"
                + "\n" +  
                "*```Entering BIOS...```*");
            }
            else if (killMsg == 39)
            {
                message.reply("<@" + target + ">" + " forgot to pay membership fees and was thrown off the 23rd floor by hotel staff!"
                + "\n" +  
                "*For a brick, he flew pretty good!*");
            }
            else if (killMsg == 40)
            {
                message.reply("<@" + target + ">" + " clogged their respiratory system with toast."
                + "\n" +  
                "*Doesn't it smell like burnt toast when you're about to get a stroke?*");
            }
            else if (killMsg == 41)
            {
                message.reply("<@" + target + ">" + " failed red light, green light."
                + "\n" +  
                "*gganbu? where are you?*");
            }
            else if (killMsg == 42)
            {
                message.reply("<@" + target + ">" + " was executed by a Dutch hitman!"
                + "\n" +  
                "*Sugar is shit! In Germany alone, three people die per hour because of sugar.*");
            }
            else if (killMsg == 43)
            {
                message.reply("<@" + target + ">" + " took a crossbow arrow to the head!"
                + "\n" +  
                "*Yeah, and people in hell want slurpees!*");
            }
            else if (killMsg == 44)
            {
                message.reply("<@" + target + ">" + " was slain by a RED GUY!"
                + "\n" +  
                "*SUPER! HOT!*");
            }
            else if (killMsg == 45)
            {
                message.reply("<@" + target + ">" + " ran out of fuel mid flight!"
                + "\n" +  
                "*TAKE OUT THOSE FUCKING P.T BOATS!*");
            }
            else if (killMsg == 46)
            {
                message.reply("<@" + target + ">" + " lost the game of Sheep and the Wolf!"
                + "\n" +  
                "*Shoot, you can't miss!*");
            }
            else if (killMsg == 47)
            {
                message.reply("<@" + target + ">" + " was locked away forever in Jart's cookie jar!"
                + "\n" +  
                "*locked forever in an eternity of tastiness!*");
            }
            else if (killMsg == 48)
            {
                message.reply("<@" + auth + ">" + " ran over " + "<@" + target + ">" +  "with a Warthog!"
                + "\n" +  
                "*Road Kill!*");
            }
            else if (killMsg == 49)
            {
                message.reply("<@" + target + ">" + " had their head mysteriously explode..."
                + "\n" +  
                "*Paint me yellow and call me fucking sunshine!*");
            }
            else if (killMsg == 50)
            {
                message.reply("<@" + target + ">" + " didn't prepare to brace..."
                + "\n" +  
                "*Round and round the earth we go, one revolution at a time, 1,001 cars long...*");
            }
            else if (killMsg == 51)
            {
                message.reply("<@" + target + ">" + " drank too much whisky!"
                + "\n" +  
                "*Wake up you drunk bastard!*");
            }
            else if (killMsg == 52)
            {
                message.reply("<@" + target + ">" + " noclipped and landed in The Backrooms!"
                + "\n" +  
                "*I feel like I've been here before...*");
            }
            else if (killMsg == 53)
            {
                message.reply("<@" + target + ">" + " was trapped in In Amber Clad!"
                + "\n" +  
                "*You always take me to such nice places...*");
            }
            else if (killMsg == 54)
            {
                message.reply("<@" + target + ">" + " was mutilated by Bacteria!"
                + "\n" +  
                "*Don't Move, Stay Still.*");
            }
            else if (killMsg == 55)
            {
                message.reply("<@" + target + ">" + " missed the haybale...!"
                + "\n" +  
                "*Flyin' High!*");
            }
            else if (killMsg == 56)
            {
                message.reply("<@" + target + ">" + " got obliterated by an 18 MEGATON NUCLEAR WARHEAD!"
                + "\n" +  
                "*Советы получили их...*");
            }
            else if (killMsg == 57)
            {
                message.reply("<@" + target + ">" + " has been terminated!"
                + "\n" +  
                "*Hasta la vista, baby!*");
            }
            else if (killMsg == 58)
            {
                message.reply("<@" + auth + ">" + " blew up " + "<@" + target + ">" + " with a scorpian tank!"
                + "\n" +  
                "*YOU KILLED CHURCH YOU TEAM KILLING FUCKTARD!*");
            }
            else if (killMsg == 59)
            {
                message.reply("<@" + target + ">" + " eradicated the timeline with their time-travel box"
                + "\n" +  
                "*I haven't eaten till later this afternoon.*");
            }
            else if (killMsg == 60)
            {
                message.reply("<@" + target + ">" + " eradicated the timeline with their time-travel box"
                + "\n" +  
                "*I haven't eaten till later this afternoon.*");
            }
            else if (killMsg == 61)
            {
                message.reply("<@" + target + ">" + " was shot while trying to cross the Petria border-wall!"
                + "\n" +  
                "*For each person that falls, another rises up!*");
            }


            const channel = message.channel.id;
            const killNum = killMsg;

            console.log(" ".white);
            console.log('KILL: '.yellow);
            console.log("Timestamp: " + new Date() + "".white);
            console.log(auth + " called the Kill command.".white);
            console.log("Killer: " + auth + "".white);
            console.log("Victim: " + target + "".white);
            console.log("Kill Message #" + killNum + "".white);
            console.log("In Channel: " + channel + "".white);
            console.log("SUCCESS".green);
        }
        else
        {
            message.channel.send("Can't execute kill command. No target specified.")

            const channel = message.channel.id;
            const killNum = killMsg;

            console.log(" ".white);
            console.log('KILL: '.yellow);
            console.log("Timestamp: " + new Date() + "".white);
            console.log(auth + " called the Kill command.".white);
            console.log("Killer: " + auth + "".white);
            console.log("Victim: None".white);
            console.log("Kill Message #" + killNum + "".white);
            console.log("In Channel: " + channel + "".white);
            console.log("FAILED".red);
        }
    }
}