
function main() {
    document
      .getElementById("contact-form")
      .addEventListener("submit", handleSubmit);

}

function handleSubmit(event) {
    var myForm = document.getElementById("contact-form");
    var valid = true;
  

    if (myForm.email.value == "") {
        event.preventDefault();
        valid = false;
        document.getElementById("emailRequiredError").style.display = "block";
      } else {
        document.getElementById("emailRequiredError").style.display = "none";
        valid = true;
      }

        
    

      if (myForm.name.value == "") {
        event.preventDefault();
        valid = false;
        document.getElementById("nameRequiredError").style.display = "block";
      } else {
        document.getElementById("nameRequiredError").style.display = "none";
        valid = true;
      }

        
    

      if (valid) {
        console.log("form submitted");
      }
    
      event.preventDefault(); // this is so the page does not reload
    }
