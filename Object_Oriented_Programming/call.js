function SetUsername(username){

    //complex db calls
    this.username = username

}

function createUSer (username,email,password){

    SetUsername.call(this, username)

    this.email=email
    this.password=password

}

const USERME = new createUSer("sparsh","sparsh@microsoft.com",808080)

console.log(USERME);



