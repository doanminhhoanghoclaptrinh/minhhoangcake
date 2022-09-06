function validateorderform(){
    var cakename = document.getElementById("cn").value;
    var yourname = document.getElementById("yn2").value;
    var message = document.getElementById("mes2").value;
    var date = document.getElementById("dd").value;
    var location = document.getElementById("dt").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    if (cakename == "sc"){
        document.getElementById("e5").innerHTML = "Please select our product.";
    }else{
        document.getElementById("e5").innerHTML = "";
    }
    if (yourname == ""){
        document.getElementById("e6").innerHTML = "Please fill out your name.";
    }else if (yourname.length > 100){
        document.getElementById("e6").innerHTML = "Your name should not exceed 100 characters.";
    }else{
        document.getElementById("e6").innerHTML = "";
    }
    if (message.length > 30){
        document.getElementById("e7").innerHTML = "Message should not exceed 30 characters.";
    }else{
        document.getElementById("e7").innerHTML = "";
    }
    if (date == ""){
        document.getElementById("e8").innerHTML = "Please fill out the deliver date.";
    }else if (date < today){
        document.getElementById("e8").innerHTML = "Please enter a future date";
    }else{
        document.getElementById("e8").innerHTML = "";
    }
    if (location == ""){
        document.getElementById("e9").innerHTML = "Please fill out the address."
    }else if (location.length > 500){
        document.getElementById("e9").innerHTML = "Address should not exceed 500 characters."
    }else{
        document.getElementById("e9").innerHTML = ""
    }
}
