function validatecontactform(){
    var yourname = document.getElementById("yn").value;
    var youremail = document.getElementById("ye").value;
    var subject = document.getElementById("sub").value;
    var message = document.getElementById("mes").value;
    if(yourname == ""){
        document.getElementById("e1").innerHTML = "Please fill out your name.";
    }else if(yourname.length > 100){
        document.getElementById("e1").innerHTML = "Your name should not exceed 100 characters.";
    }else{
        document.getElementById("e1").innerHTML = "";
    }
    if (youremail == ""){
        document.getElementById("e2").innerHTML = "Please fill out your email.";
    }else if (youremail.length > 100){
        document.getElementById("e2").innerHTML = "Your email should not exceed 100 characters.";
    }else{
        document.getElementById("e2").innerHTML = ""
        var i = 0
        while (true){
            if (youremail[i] == "@"){
                break
            }else if (i >= youremail.length){
                document.getElementById("e2").innerHTML = "This is not an email address."
                break
            }
            i++
        }
    }
    if (subject == ""){
        document.getElementById("e3").innerHTML = "Please fill out the subject.";
    }else if (subject.length < 50){
        document.getElementById("e3").innerHTML = "Subject should not shorter than 50 characters.";
    }else if (subject.length > 250){
        document.getElementById("e3").innerHTML = "Subject should not exceed 250 characters.";
    }else{
        document.getElementById("e3").innerHTML = "";
    }
    if (message == ""){
        document.getElementById("e4").innerHTML = "Please fill out the message.";
    }else if (message.length > 500){
        document.getElementById("e4").innerHTML = "Message should not exceed 500 characters.";
    }else{
        document.getElementById("e4").innerHTML = "";
    }
}