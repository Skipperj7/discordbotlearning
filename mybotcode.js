//make sure nodeJS is installed

const Discord = require('discord.js')
// ^makes const 'Discord' and sets it to 'discord.js' (like setting script to object)
//in workspace folder, view > terminal > npm install discord.js  } installs discord.js

const client = new Discord.Client()



client.on('ready', () => {
// ^when the bot has connected (started) this is called
    console.log("Connected as" + client.user.tag)

    client.user.setActivity("you", {type: "WATCHING"})
    // ^sets the bots activity line (ex. Playing CS:GO)
    client.guilds.forEach((guild) => {
        console.log(guild.name)
    // ^prints server name for every server the bot is in
        guild.channels.forEach((channel) => {
            console.log('-' + channel.name + ' '  + channel.type + ' ' + channel.id)
        // ^prints channel name, type, and id for every channel on server
            if(channel.name == 'general'){
            // ^if the channel name is general this will return true
                let generalChannel = client.channels.get(channel.id)
                // ^pass id of channel
                generalChannel.send('Hi!')
                const attachment = new Discord.Attachment("https://vetstreet.brightspotcdn.com/dims4/default/5b3ffe7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F8e%2F4e3910c36111e0bfca0050568d6ceb%2Ffile%2Fhub-dogs-puppy.jpg")
                // ^pass url (local file or on web)
                generalChannel.send(attachment)
                // ^sends the attachment, pass attachment const
            }
        })
        //general channel id (of bot_test server): 370434618467287042

        
    })
})

client.on('message', (receivedMessage) => {
// ^when a message is recieved this is called and the message is stored as var 'receivedMessage' (var name in parenthesis above)
    if(receivedMessage.author == client.user){
        return
    }
    // ^prevents bot from going in infinite loop of sending to itself
    receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)
    // ^sends back received message and tags user
    receivedMessage.react("🥄")
    // ^reacts to received message with emoji
    receivedMessage.guild.emojis.forEach(customEmoji => {
        console.log(customEmoji.name + ' ' + customEmoji.id)
        receivedMessage.react(customEmoji)
    })
    // ^goes through each custom emoji on server and reacts to received message
})

client.login('')
// ^logs in (starts) bot

//https://www.youtube.com/watch?time_continue=226&v=7A6cNW04g2M (2/4/2019 left off at 18:12)
