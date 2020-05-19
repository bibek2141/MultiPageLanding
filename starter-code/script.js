//Function expression to select elements

/*Navbar*/
const selectElement = (s) => document.querySelector(s);

//open the menu when clicked
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});


//close the menu when clicked
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
})



/*About*/
function button1Clicked() {
    var extraParagraph = document.getElementById("extraParagraph1");
    var secondButton = document.getElementById("secondButton1");
    var firstButton = document.getElementById("firstButton1");
    if (extraParagraph.style.display === "none" && secondButton.style.display === "none") {
        extraParagraph.style.display = "block";
        secondButton.style.display = "block";
        firstButton.style.display = "none";
    }
    else {
        extraParagraph.style.display = "none";
        secondButton.style.display = "none";
        firstButton.style.display = "block";
    }


}

function button2Clicked() {
    var extraParagraph = document.getElementById("extraParagraph2");
    var secondButton = document.getElementById("secondButton2");
    var firstButton = document.getElementById("firstButton2");
    if (extraParagraph.style.display === "none" && secondButton.style.display === "none") {
        extraParagraph.style.display = "block";
        secondButton.style.display = "block";
        firstButton.style.display = "none";
    }
    else {
        extraParagraph.style.display = "none";
        secondButton.style.display = "none";
        firstButton.style.display = "block";
    }
}

function button3Clicked() {
    var extraParagraph = document.getElementById("extraParagraph3");
    var secondButton = document.getElementById("secondButton3");
    var firstButton = document.getElementById("firstButton3");
    if (extraParagraph.style.display === "none" && secondButton.style.display === "none") {
        extraParagraph.style.display = "block";
        secondButton.style.display = "block";
        firstButton.style.display = "none";
    }
    else {
        extraParagraph.style.display = "none";
        secondButton.style.display = "none";
        firstButton.style.display = "block";
    }
}



function button4Clicked() {
    var extraParagraph = document.getElementById("extraParagraph4");
    var secondButton = document.getElementById("secondButton4");
    var firstButton = document.getElementById("firstButton4");
    if (extraParagraph.style.display === "none" && secondButton.style.display === "none") {
        extraParagraph.style.display = "block";
        secondButton.style.display = "block";
        firstButton.style.display = "none";
    }
    else {
        extraParagraph.style.display = "none";
        secondButton.style.display = "none";
        firstButton.style.display = "block";
    }
}

// var x = window.matchMedia("(max-width: 768px)")
// if (x.matches) {
//     img.style.display = "none";
//     role.style.display = "none";
//     firstButton.style.display = "none";
//     secondButton.style.display = "block";


// }
// button5Clicked(x) // Call listener function at run time
// x.addListener(button5Clicked) // Attach listener function on state changes


function button5Clicked() {

    var extraParagraph = document.getElementById("extraParagraph5");
    var secondButton = document.getElementById("secondButton5");
    var firstButton = document.getElementById("firstButton5");
    var icon6 = document.getElementById("icon6");
    var role = document.getElementById("remove");
    var img = document.getElementById("personImage");

    if (extraParagraph.style.display === "none" && secondButton.style.display === "none") {
        secondButton.style.display = "block";
        firstButton.style.display = "none";
        role.style.display = "none";
        icon6.style.display = "flex";
        img.style.display = "none";
        extraParagraph.style.display = "block";

    }
    else {
        img.style.display = "block";
        extraParagraph.style.display = "none";
        secondButton.style.display = "none";
        role.style.display = "block";
        icon6.style.display = "none";
        firstButton.style.display = "block";
    }


}

function button6Clicked() {
    var para6 = document.getElementById("para6");
    var icon6 = document.getElementById("icon7");
    var secondButton = document.getElementById("secondButton6");
    var firstButton = document.getElementById("firstButton6");
    var personImage1 = document.getElementById("personImage1");
    if (firstButton.style.display === "none") {
        para6.style.display = "none";
        secondButton.style.display = "none";
        firstButton.style.display = "block";
        icon6.style.display = "none";
        personImage1.style.display = "block";
    }
    else {

        para6.style.display = "block";
        icon6.style.display = "flex";
        secondButton.style.display = "block";
        firstButton.style.display = "none";
        personImage1.style.display = "none";

    }
}

/*Contact*/
function validateForm() {
    var x = document.forms["myForm"]["name"];
    var y = document.forms["myForm"]["message"];
    var z = document.forms["myForm"]["email"];
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var nameError = document.getElementById("nameError");
    var messageError = document.getElementById("messageError");
    var emailError = document.getElementById("emailError");


    if (x.value == "") {
        document.getElementById("name").style.color = " #F67E7E";
        document.getElementById("name").className += " formInvalid";
        nameError.textContent = "This field is required";
        x.focus();
        return false;
    }

    if ((reg.test(z.value) == false) || (z == "")) {
        document.getElementById("email").style.color = " #F67E7E";
        document.getElementById("email").className += " formInvalid";
        emailError.textContent = "This field is required";
        z.focus();
        return false;
    }

    if (y == "") {
        document.getElementById("Message").style.color = " #F67E7E";
        document.getElementById("Message").className += " formInvalid";
        messageError.textContent = "This field is required";
        y.focus();
        return false;
    }


}