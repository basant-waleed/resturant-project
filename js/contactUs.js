document.addEventListener('DOMContentLoaded', function() {
    var inputName = document.getElementById('inputName');
    var inputPhone = document.getElementById('inputPhone');
    var inputDate = document.getElementById('inputDate');
    var inputState = document.getElementById('inputState');
    var inputcomment = document.getElementById('inputcomment');
    var btnSubmit = document.getElementById('btnsubmit');
    var validationServerUsernameFeedback = document.getElementById("validationServerUsernameFeedback");
    var confirmationMessage = document.getElementById('confirmationMessage');
    var resOrders = JSON.parse(localStorage.getItem("reservations")) || [];

    function addReserve() {
        if (allValid()) {
            validationServerUsernameFeedback.classList.add('d-none');
            confirmationMessage.classList.add('d-none');

            var reservation = {
                name: inputName.value,
                phone: inputPhone.value,
                date: inputDate.value,
                state: inputState.value,
                comment: inputcomment.value
            };

            resOrders.push(reservation);
            localStorage.setItem("reservations", JSON.stringify(resOrders));
      

            // Show confirmation message
            confirmationMessage.classList.remove('d-none');

            // Optionally redirect to another page to display the table
            // window.location.href = "displayReservations.html"; // Redirect to the display page

        } else {
            validationServerUsernameFeedback.classList.remove('d-none');
            confirmationMessage.classList.add('d-none');
        }
    }

    function validatePhone() {
        var regx = /^01[0125][0-9]{8}$/;
        if (regx.test(inputPhone.value)) {
            inputPhone.classList.add("is-valid");
            inputPhone.classList.remove("is-invalid");
            return true;
        } else {
            inputPhone.classList.add("is-invalid");
            inputPhone.classList.remove("is-valid");
            return false;
        }
    }

    function validateName() {
        var regx2 = /^[a-zA-Z]{3,20}$/;
        if (regx2.test(inputName.value)) {
            inputName.classList.add('is-valid');
            inputName.classList.remove('is-invalid');
            return true;
        } else {
            inputName.classList.add('is-invalid');
            inputName.classList.remove('is-valid');
            return false;
        }
    }

    function validateOtherInputs() {
        var isValid = true;
        if (!inputDate.value) {
            inputDate.classList.add('is-invalid');
            isValid = false;
        } else {
            inputDate.classList.remove('is-invalid');
            inputDate.classList.add('is-valid');
        }
        if (!inputState.value) {
            inputState.classList.add('is-invalid');
            isValid = false;
        } else {
            inputState.classList.remove('is-invalid');
            inputState.classList.add('is-valid');
        }
        return isValid;
    }

    function allValid() {
        return validateName() && validatePhone() && validateOtherInputs();
    }

    btnSubmit.addEventListener('click', addReserve);
});
function addReserve() {
    console.log('Adding reservation');
    // rest of the code
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


