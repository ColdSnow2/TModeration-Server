const methods = [
  'SEND', 'EDIT', 'PUT', 'COMMENT', 'DELETE', 'GET', "REPORT",
  {
    "10292": "Completed",
    "10293": "Edited",
    "10294": "Reported",
    "10295": "Invalid Method",
    "10296": "Invalid Case",
    "10297": "Invalid Content",
    "10298": "Unauthorized/Not Logged In",
    "10299": "Deleted",
    "10300": "Invalid Password/Modmail Address",
    "10301": "Hacking Catched"
  }
]

require("../login.js")

function TModmailAPIError(message) {
  console.log("TModMail API Exception: " + message)
  process.exit(1)
}
const method = {
  sendcode: (code) => {
    globalThis.response = code
  },
  send: (message, to, authentication = {password: null, modmail_: null}) => {
    if(!message) {
      throw new TModmailAPIError("MESSAGE CANNOT BE EMPTY")
    } else if(!to) {
      throw new TModmailAPIError("TARGET CANNOT BE EMPTY")
    } else {
      loginapi.login(authentication.modmail, authentication.password)
      return loginapi.sendmessage(to, message)
    }
  }
}