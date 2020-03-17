function main() {
    console.log("in main function")
}

function validateForm(event) {
    console.log("validating from");
    if (myForm.email.value == "") {
    event.preventDefault();
    valid = false;
    document.getElementById("errorName").style.display = "block";
  } else {
    document.getElementById("errorName").style.display = "none";
    valid = true;
  }
}