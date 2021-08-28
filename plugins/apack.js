const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'apack', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/67b958bfc1d5b90cbbf8c.jpg";
    
        
     var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮𝗪𝗵𝗶𝘁𝗲 𝗗𝗿𝗮𝗴𝗼𝗻🐉💮━━━━━⛦


●▬▬🐉📌*𝐖𝐇𝐈𝐓𝐄 𝐃𝐑𝐀𝐆𝐎𝐍*📌🐉▬▬●

■□■□■□■□■□■□■□■□■□■□
♕ 𝘼 𝙥𝙖𝙘𝙠 ❮T͎o͎ C͎r͎e͎a͎t͎e͎ L͎o͎g͎o͎❯ ♕
🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲
★❯❯❯❯❯ .aneon Your Text
★❯❯❯❯❯ .ahacking Your Text
★❯❯❯❯❯ .awolf Your Text
★❯❯❯❯❯ .aflower Your Text
★❯❯❯❯❯ .asilk Your Text
★❯❯❯❯❯ .afire Your Text
★❯❯❯❯❯ .aglow Your Text
★❯❯❯❯❯ .asmoke Your Text
★❯❯❯❯❯ .apubg Your Text,Your text
★❯❯❯❯❯ .abwall Your Text
🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲

*සමහර ලොගෝ වැඩ නෑ මොකද ලොගෝ දෙන site එක limit තියෙන්නේ unlimited ගන්නනම් සල්ලි  ඕන.*
┇
┇ ᵐᵒʳᵉ ˡᵒᵍᵒˢ ᶜᵒᵐᵐⁱⁿᵍ ˢᵒᵒⁿ😉
┇_______________________________
┇ Comming Up Next logo pack
┇              ❮❮❮❮B pack❯❯❯❯
╚═══════════════════════════════

═════💢🐉White Dragon🐉💢═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
