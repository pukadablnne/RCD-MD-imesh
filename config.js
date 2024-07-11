//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJxTmFtNzNqdnRkSS8rMnkxSTF1VFQxaGh1dTlnTWl3MHNBWlErUnkxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDNFQzFhZHVvSGJaRE1pSUFMWnF3OGUyV1VFV05vNU8xMHM2OTR5YVpBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLT0JnMm1JVWdOU1d0amFBS1NZTEVyRWFsOTJpRVFUdFVLalp3R3BLbUhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVV3V2WUpuYXNuOVVCRk5TMjZFbmVsRG4yNFdHL2tKK1EyWHV4RE1pSjJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLZDlwNzExNnAvRXNYOGNnb0VjcUZ2SGx1akpnTFpsL052emcrOEs0Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1RR0lWVk9CWHJ0WWRmUWNHQjJmb2lKZmdGTVR5ZGYvMGUyYVBFbXZOMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ljLzdva0ptQ0UyVFpyKzBCZUk5WEVjSlBXSTdMSW11UHZJNmFXVGRVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RKNW9weE1odVdsRGpiNnEySCtyNmFsVlhXRHJ1M2RYTE9GWTdIbWdrbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxneVE2QmMxY3laMi9zV1NnL0RTWUM4T09wRm9acDhRZmU0VFoyN1BkK2tUeUdQYlVHQ1JKc2NFQ0QvUnNhTUx5cFpReGlKSndPSnM4d2JTOTY5SkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJmdXkzeGQ2Qlc4VlpYcHJEY1ZsUWlkZHNlSVZsenE2RWc2NWQ1TXFzOGJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjcHd3LWw1WlExQ3diMWF6YmV0amN3IiwicGhvbmVJZCI6IjM1ZTA0NjNhLWY4ODgtNDI5OC1hNGE5LTk4MzdlMzI0MGUyOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cGl0UmVMY3k5ZVFHMFdMNWdZUHNDSDVjUEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkdGWCtVUGxzK3ZxTEhJOFJmQWFZUno0VmRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU5RExZU1cxIiwibWUiOnsiaWQiOiI5NDc1NDg5ODM5OTo1OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJAX8yCzILMguKBseG1kOG1ic2cy6LKsOGthF/MgsyCzIJAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSDV0N1VIRUpyV3diUUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZdzVZR3R6RlV5eGJBVlhodElSUzUyYk5jOTJlTUcvd2lUek53UnNlYVY0PSIsImFjY291bnRTaWduYXR1cmUiOiJ1YWJ3eS96OGdZSndXRHJBNDZBR29ORHpEYjJ5QmhBMjV4N0hncnhFQk0xUVRxRlVzcnVVWHNFRXdmSDFPSWZPejZCaitnK1MxTXgwWUxkaTV0enhDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiczBndUxlOVdTNUFPQi90MkpKNzJ0UFZURHM1YUpaaitmYUZQSUIzaGxobEtDb09RcHFCR0VPeVVsT3pmL3hqUlVxZ01WQ1M4eHo2a2d3dTBhcGVBQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NDg5ODM5OTo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTU9XQnJjeFZNc1d3RlY0YlNFVXVkbXpYUGRuakJ2OElrOHpjRWJIbWxlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzQwNjQ3fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
