var email = document.getElementById("email")
var pass = document.getElementById("pass")
var incorrect = document.getElementById("incorrect")
console.log(incorrect);
var login = document.getElementById("login")
var dis = document.getElementById("dis")


var users = []

if (localStorage.getItem("acc") != null) {
    users = JSON.parse(localStorage.getItem("acc"))
}


login.addEventListener("click", function(){

    if(email.value =="" || pass.value ==""){
        dis.classList.remove("d-none")
    }
    else{
        add()
        dis.classList.add("d-none")
    }
    
})

function add(){
    var user={
        account:email.value,
        password:pass.value
    }

    for (var index = 0; index < users.length; index++) {
        if (users[index].account == email.value && users [index].password == pass.value) {
            localStorage.setItem("welcomename",JSON.stringify(users[index].title))
            return location ='homa.html'

            

        }


    }
    return incorrect.classList.remove("d-none")




  

    // users.push(user)
    clear()
    // localStorage.setItem("acc" ,JSON.stringify(users))
    

}




function clear(){
    email.value="",
    pass.value=""

}




