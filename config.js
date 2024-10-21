//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "243813318938";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk95ZVBOazEzVXZIcG83d05iOWZPRWR3T3c0NW0vc051UjRSNkpSZ1kxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW9NUCtBcFByVWdOZ1p2bFpKRnM0UEFERVNGc0cwVzJRVi9ZUnZhY2JWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ1F0TXp3L1kwTnQyb3hNSXpvSzFNOXJnaU1MUC9CdnZSNVJKVjhyMjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENUdRcjdMSDhpWWFpRENlNlJSQ1pZUlZhWVhmVHhmZDY3QkJYUkJKMlE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDbngza250N3BUN0ZVSVBuRkdRYWpWWXE1cVRReWJOU0wwKzVITXE1WFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklaZXRobUU0ZGdJS2RaeWthSlhNTURoZVdlTXJzOHdVZUMyQWN4c1NUd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEE3TXRiYWJVTU10bC9kS0ZscEJMa1JpSm5aNGZNa0lRTmtZRXlsdE1sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUY4cGdsQUpFbFV2RHFCWUJvaXhpdzhtcTRCTEw2c2E5M1pWem5ENk9RZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEwcG9qRlV0Z3NnbkZ6S0FDMFBhalJ3VkVRSVJMTjVXakNEMm9EdVlZdlVBam9BTHBYSXNuN1JQTlJ5TjF3Vk4vWERFUVZQTkJ6QmIzdHMzU2ZLYkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJCZ0Z2SFA3ZDY3VTlUOTdiVm04VmtwSXNBOFNGdmd0T2gvOVFYSklOVzdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmTXR2cmpuZlQtR3lVcVFvaW1tR2h3IiwicGhvbmVJZCI6IjQzY2MzOTAzLWQwMGUtNDk2OS05ODZjLWJlOWYyZWViZjM2MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1dHhjRnN5a3lRTzFRdkdZeENOc1NSeGtWTDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3JDeEZHSkF0YXFmb3pPcnR1bVdwR2xhN2NFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBZSEJZU1pYIiwibWUiOnsiaWQiOiIyNDM4MTMzMTg5Mzg6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XYmlPb0ZFTVRtMmJnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk4aVF4ODlGWEtNWGxTRjVpUVpVdWx0aXMvOHVGSTh6VURCOFFqZ3VoaHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhIcWNIaWxtTFM4YzJ3N2VvSHh0UDU4L0lIWno5anNVN3ZSeGJnV05RaFJaZ0tzaU94bTBpOUpodk5HOHVpMlpQS3V1T3lJTHJObmRzZVpXSkk3SkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmU0hMTTNDbGxiMXZOa1pBVUd6VVdWS0FMWUxKZWxqTUFxdkt3SmxDNU8yWjlwK2dtLy93K3Vyb1VHRENTTm0wRklVUXdqeHYySnVHWUVRRzZRS3VEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzgxMzMxODkzODozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZdklrTWZQUlZ5akY1VWhlWWtHVkxwYllyUC9MaFNQTTFBd2ZFSTRMb1ljIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NTI0NTYxfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
