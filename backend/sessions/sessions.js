class SessionsController{
    constructor(){

    }

    sessionsList = []

    newSession(id =0, name = '', info){
        if(id&name){
            this.sessionsList[this.sessionsList.length] = {id: id, name: name, info: info}
        }
    }

    sessionsOpened = 0
    sessionsClosed = 0
    sessionTimeout = 60*15
    
}