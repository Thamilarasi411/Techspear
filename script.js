  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const category = document.getElementById("category").value.trim();

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const categoryError = document.getElementById("category-error");

    nameError.textContent = "";
    phoneError.textContent = "";
    categoryError.textContent = "";

    let isValid = true;

    //  Name Validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else if (!nameRegex.test(name)) {
      nameError.textContent = "Name must contain only letters.";
      isValid = false;
    }

    //  Phone Validation 
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === "") {
      phoneError.textContent = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      phoneError.textContent = "Phone must be a 10-digit number.";
      isValid = false;
    }

    // Category Validation
    if (category === "") {
      categoryError.textContent = "Project category is required.";
      isValid = false;
    }

    // Success
    if (isValid) {
      alert("Form submitted successfully!");
    }
  }
