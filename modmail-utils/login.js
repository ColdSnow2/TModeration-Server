require("./registration.js")
require("./sending/methodaccepted.js")
const authorized = []
const loginapi = {
  login: (modmail, password) => {
    const finding = modmails.find((m) => {
      return m.modmail == modmail && m.password == password
    })
    if(finding == undefined) {throw new TModmailAPIError("PASSWORD OR MODMAIL IS INCORRECT")} else {return authorized.push({modmail, password})}
  },
  logout: (modmail) => {
    const i = authorized.findIndex(modfinder)
    function modfinder(age) {
      return authorized == authorized.map(m => m.modmail);
    }

    delete authorized[i]
  }
}