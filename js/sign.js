var emaill = document.getElementById("email")
var pass = document.getElementById("pass")
var login = document.getElementById("login")
var Name = document.getElementById("name")
var dis = document.getElementById("dis")
var disuccess =document.getElementById("disuccess")
var p = document.getElementById("p")




var users = []
if(localStorage.getItem("acc") != null){
    users= JSON.parse(localStorage.getItem("acc"))
 }

Name.addEventListener("input",function(){
    validatename()
})
emaill.addEventListener("input",function(){
    validateemail()
})
pass.addEventListener("input",function(){
    validatepassword()
})

login.addEventListener("click", function(){

    if(email.value =="" || pass.value =="" || Name.value == ""){
        dis.classList.remove("d-none")
        disuccess.classList.add("d-none")
        
    }
    else{
        add()
        dis.classList.add("d-none")
        
    }
    
})

function add(){

    if(validatename()==true && validateemail()==true && validatepassword()== true){
       
    
        for (var index = 0; index < users.length; index++) {
           if(users[index].account == emaill.value){
    
            // p.innerHTML="this email is used"
            
            p.classList.remove("d-none")
            return false
            
           }
           else{
            p.classList.add("d-none")
            disuccess.classList.remove("d-none")
            
            
           }
            
        }

        var user={
            title:Name.value,
            account:emaill.value,
            password:pass.value
        }
    
        users.push(user)
        
        clear()
        localStorage.setItem("acc" ,JSON.stringify(users))

    }

  

}




function clear(){
    email.value="",
    pass.value="",
    Name.value=""

}




function validatename() {
    var valdate = Name.value
    var checkerforname = /^[a-z]{3,9}$/
    if (checkerforname.test(valdate)) {

        Name.classList.add("is-valid")
        Name.classList.remove("is-invalid")
        
        return true
    }
    else{

        Name.classList.remove("is-valid")
        Name.classList.add("is-invalid")


        return false
    }
}




function validatepassword() {
 var valdatepass = pass.value
 var checkerforpassword = /^[1-9]{5,9}$/
 if(checkerforpassword.test(valdatepass)){

    pass.classList.add("is-valid")
    pass.classList.remove("is-invalid")
    return true
 }
 else{
    pass.classList.remove("is-valid")
    pass.classList.add("is-invalid")

    return false
 }
}


function validateemail(){
    var validateemail = emaill.value
    var validateforemail = /^[a-zA-z]{1,}(@)(yahoo|gmail|outlook|hotmail)\.com$/
    if(validateforemail.test(validateemail)){

        emaill.classList.add("is-valid")
        emaill.classList.remove("is-invalid")
        return true
    }
    else{

        emaill.classList.remove("is-valid")
        emaill.classList.add("is-invalid")

        return false
    }
}