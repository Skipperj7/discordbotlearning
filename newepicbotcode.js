const Discord = require('discord.js')

const client = new Discord.Client()

var b = false
var a = ''
var c
client.on('voiceStateUpdate', (member) => {
   // let newuserchannel = newmember.voiceChannel
   // let olduserchannel = oldmember.voiceChannel
   try{
    console.log(member.user.username)
    if(b){
        if(member.user.username == a){
        
        member.setVoiceChannel('')
        }
    }
}
catch{

}

    
    /*
    if(olduserchannel == undefined && newuserchannel != undefined){
        let newperson = newmember.user.username
        console.log(newperson.toString())
        
        newmember.setVoiceChannel('542604838765068291')
        //newmember.setVoiceChannel("timeout")
        if(b){
            if(newperson == "comicbookguy2323"){
                newmember.setVoiceChannel("holdentimeout")
            }
        }
    }
    else if(olduserchannel && newuserchannel && olduserchannel.id != newuserchannel.id){
        let newperson = newmember.user.username
        console.log(newperson.toString())
        
        newmember.setVoiceChannel('542604838765068291')
    }
    else if(newuserchannel == undefined){

    }*/
})

client.on('message', (receivedMessage) => {
try{
    if(receivedMessage.author == client.user){
        return
    }
    if(receivedMessage.author.username == 'amaya' ||  receivedMessage.author.username == 'Jacob'){
        
        if(receivedMessage.content.startsWith('!timeout')){
            var member = receivedMessage.mentions.members.first()
            //console.log(member)
           // if(member.user.username == 'Jacob'){
               // console.log('e')
                 b = true
                 a = member.user.username
                
           // }
        } 
        else if(receivedMessage.content.startsWith('!endtimeout')){
            var member = receivedMessage.mentions.members.first()
           // if(member.user.username == 'Jacob'){
                //console.log('ye')
                 b = false
                 a = member.user.username
           // }
        }

        if(b){
        
        //console.log(newperson.toString())
        
        member.setVoiceChannel('')
        }
        
    }
    }
    catch{
        receivedMessage.channel.sendMessage('Yo no comprendo')
    }
    
    
})

client.login('')


