const Discord = require('discord.js')

const client = new Discord.Client()


client.on('voiceStateUpdate', (oldmember, newmember) => {
    let newuserchannel = newmember.voiceChannel
    let olduserchannel = oldmember.voiceChannel

    if(olduserchannel == undefined && newuserchannel != undefined){
        let newperson = newmember.user.username
        console.log(newperson.toString())
        //newmember.setVoiceChannel("timeout")
        /*if(b){
            if(newperson == "comicbookguy2323"){
                newmember.setVoiceChannel("holdentimeout")
            }
        }*/
    } 
    else if(newuserchannel == undefined){

    }
})

client.on('message', (receivedMessage) => {

    if(receivedMessage.author == client.user){
        return
    }
    if(receivedMessage.author.username == 'amaya'){
        if(receivedMessage.content.startsWith('!keepout')){
            var member = receivedMessage.mentions.members.first()
            if(member == 'holden'){
                let b = true
            }
        } 
        else if(receivedMessage.content.startsWith('!endkeepout')){
            var member = receivedMessage.mentions.members.first()
            if(member == 'holden'){
                let b = true
            }
        }
    }
    
    
    
})

client.login('')


