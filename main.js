function validateFields() {
    var fieldName = "fname";
    validateField("fname");
    validateField("lname");
    validateField("phone");
    validateField("email");


}

function validateField(fieldName) {
    console.log(fieldName);
    var field = document.getElementById(fieldName);
    if (!field.checkValidity()) {
        console.log(fieldName + " not Valid");

        document.getElementById(fieldName + "-invalid").style.display = "block";
        document.getElementById(fieldName + "-invalid").style.visibility = "visible";
    } else {
        console.log(fieldName + " Valid");
        document.getElementById(fieldName + "-invalid").style.display = "none";
        document.getElementById(fieldName + "-invalid").style.visibility = "hidden";
    }

}

var bannerId = 1;

function onload() {
    myInterval = setInterval("changeBanner()", 5000);
}

function changeBanner() {
    bannerId++;
    if (bannerId > 3)
        bannerId = 1;

    var field = document.getElementById("banner").setAttribute("src", "images/banner-" + bannerId + ".jpg");

}