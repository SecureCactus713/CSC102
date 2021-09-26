// This is the code set up for validating the field entries. I was also able to get it set to reload the page after a period of time if it failed. 
function checkCreds() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNum").value;
    var personnel = firstName + " " + lastName;
    var fail = document.getElementById("loginEntry")
    if (personnel.length >20) {
        document.getElementById("loginEntry").innerHTML="<span style='color:rgb(175, 0, 0);'>Name of Personnel exceeds maximum characters</span>";
        setTimeout(function() {
            window.location.reload(1);
        }, 5000)
    }
    else if (badgeNum < 99 || badgeNum > 1000) {
        document.getElementById("loginEntry").innerHTML="<span style='color:rgb(175, 0, 0);'>Invalid Badge ID entered</span>";
        setTimeout(function() {
            window.location.reload(1);
        }, 5000)
    }
    else {
        alert("\nAccess Granted, Welcome " + personnel + ".\n\n" + message);
        location.reload(1)
    }
}
// I added in a bit extra for making it seem more offical for logging into something that would be important.
var message = 
"This computer system is the property of the UAT Space Program. It is for authorized use only.  By using this system, all users acknowledge notice of, and agree to comply with, the UAT Space Program's Acceptable Use of Information Technology Resources Policy (“AUP”). Unauthorized or improper use of this system may result in administrative disciplinary action, civil charges/criminal penalties, and/or other sanctions as set forth in the UAT Space Program’s AUP. By continuing to use this system you indicate your awareness of and consent to these terms and conditions of use."
