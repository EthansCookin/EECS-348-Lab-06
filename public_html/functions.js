function validate() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;


    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (pass1 != pass2) {
        alert("The two passwords don't match!")
    } else {
        alert("The two passwords match!")
    }
}

function alert_paragraph_color() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var text_R = document.getElementById("text_R").value;
    var text_G = document.getElementById("text_G").value;
    var text_B = document.getElementById("text_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.color = `rgb(${text_R},${text_G},${text_B})`;
}
