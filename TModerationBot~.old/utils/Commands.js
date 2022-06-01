globalThis.Command = class Command {
  constructor(commandName, _handler, msg) {
    this.cName = commandName
    this.handler = _handler(msg)
  }
  getContent () {
    return this.handler
  }
}