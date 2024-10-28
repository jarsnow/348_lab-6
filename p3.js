let pass_1 = "";
let pass_2 = "";

document.getElementById("input_one").addEventListener("input", checkPass);
document.getElementById("input_two").addEventListener("input", checkPass);


function checkPass() {
    pass_1 = document.getElementById("input_one").value
    pass_2 = document.getElementById("input_two").value

    if (pass_1 == pass_2 && pass_1.length >= 8 && pass_2.length >= 8){
        // the passwords are valid
        document.getElementById("output_message").innerHTML = "Passwords are valid."
    }else{
        document.getElementById("output_message").innerHTML = "Passwords are invalid. Make sure they are eight characters or more, and matching."
    }
}