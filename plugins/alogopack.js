/* # Exclusively from White-dragon🐲 
*/

const DRAGON= require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"

if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'aneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/bneon?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'aneon ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/bneon?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'ahacking ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/matrix?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'ahacking ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/matrix?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'aglow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/breakwall?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'aglow ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/breakwall?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'adropwater ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/dropwater?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'adropwater ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/dropwater?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'awolf ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/wolflogo?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text1=White-Dragon&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'awolf ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/wolflogo?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text1=White-Dragon&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    DRAGON.addCommand({ pattern: 'aflower ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/flowertext?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
}

else if (Config.WORKTYPE == 'public') {

    DRAGON.addCommand({ pattern: 'aflower ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/flowertext?apikey=tCDLKkjNNYrq1ATlMS0r0xa2taO&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: "White-dragon🐲" })

    }));
    
}
