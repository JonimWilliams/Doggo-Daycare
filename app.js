// Blur Event Listener
document.getElementById("fname").addEventListener("blur", validateFirstName);
document.getElementById("lname").addEventListener("blur", validateLastName);
document.getElementById("dname").addEventListener("blur", validateDogName);
document.getElementById("dage").addEventListener("blur", validateDogAge);
document.getElementById("phone").addEventListener("blur", validateDogAge);

document.getElementsByClassName("btn").addEventListener("click", Submit);

function validateFirstName() {
  const fname = document.getElementById("fname");
  const re = /^[A-Za-z]{2,10}$/;

  if (re.test(fname.value)) {
    fname.classList.add("is-invalid");
  } else {
    fname.classList.remove("is-invalid");
  }
}

function validateFirstName() {
  const lname = document.getElementById("lname");
  const re = /^[A-Za-z]{2,10}$/;

  if (re.test(lname.value)) {
    lname.classList.add("is-invalid");
  } else {
    lname.classList.remove("is-invalid");
  }
}

function validateFirstName() {
  const dname = document.getElementById("dname");
  const re = /^[A-Za-z]{2,10}$/;

  if (re.test(dname.value)) {
    dname.classList.add("is-invalid");
  } else {
    dname.classList.remove("is-invalid");
  }
}

function validateFirstName() {
  const dage = document.getElementById("dage");
  const re = /^[A-Za-z]{2,10}$/;

  if (re.test(dage.value)) {
    dage.classList.add("is-invalid");
  } else {
    dage.classList.remove("is-invalid");
  }
}

function validateFirstName() {
  const phone = document.getElementById("phone");
  const re = /^[0-9]{10}$/;

  if (re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
