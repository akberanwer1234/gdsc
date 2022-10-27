let emailInputValidation = false;
let passwordInputValidation = false;

function checkEmailValidation () {

	let emailInput = $("#email").val();
  	let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
	let emailCheck = false;

	if(!pattern.test(emailInput) || emailInput.length < 1 || emailInput.length > 64) {

		$("#validEmail").removeClass("valid");
		$("#validEmail").addClass("invalid");	
		emailCheck = false;	

	} else {

		$("#validEmail").removeClass("invalid");
		$("#validEmail").addClass("valid");	
		emailCheck = true;
    }

	if (emailCheck) {

		emailInputValidation = true;

	} else {

		emailInputValidation = false;
	}

	this.submitButtonHandler();	
};

function checkEmailValidationOnFocus () {
	$("#emailMessages").removeClass('d-none');
}

function checkEmailValidationOnBlur () {
	$("#emailMessages").addClass('d-none');
}

function checkPasswordValidationOnFocus () {
	$("#passwordMessages").removeClass('d-none');
}

function checkPasswordValidationOnBlur () {
	$("#passwordMessages").addClass('d-none');
}

function checkPasswordValidationOnKeyUp () {

	let passwordInput = $("#password").val();
	let letter = $("#letter");
	let capital = $("#capital");
	let number = $("#number");
	let minLength = $("#minLength");
	let maxLength = $("#maxLength");
	let letterCheck = false;
	let capitalCheck = false;
	let numberCheck = false;
	let minLengthCheck = false;
	let maxLengthCheck = false;

	// Validate lowercase letters
	let lowerCaseLetters = /[a-z]/g;
	if(passwordInput.match(lowerCaseLetters)) {  
	  letter.removeClass("invalid");
	  letter.addClass("valid");
	  letterCheck = true;
	} else {
	  letter.removeClass("valid");
	  letter.addClass("invalid");
	  letterCheck = false;
	}
	
	// Validate capital letters
	let upperCaseLetters = /[A-Z]/g;
	if(passwordInput.match(upperCaseLetters)) {  
	  capital.removeClass("invalid");
	  capital.addClass("valid");
	  capitalCheck = true;
	} else {
	  capital.removeClass("valid");
	  capital.addClass("invalid");
	  capitalCheck = false;
	}
  
	// Validate numbers
	let numbers = /[0-9]/g;
	if(passwordInput.match(numbers)) {  
	  number.removeClass("invalid");
	  number.addClass("valid");
	  numberCheck = true;
	} else {
	  number.removeClass("valid");
	  number.addClass("invalid");
	  numberCheck = false;
	}
	
	// Validate min length
	if(passwordInput.length >= 8) {
	  minLength.removeClass("invalid");
	  minLength.addClass("valid");
	  minLengthCheck = true;
	} else {
		minLength.removeClass("valid");
	minLength.addClass("invalid");
	  minLengthCheck = false;
	}

	// Validate max length
	if(passwordInput.length <= 64) {
		maxLength.removeClass("invalid");
		maxLength.addClass("valid");
		maxLengthCheck = true;
	  } else {
		maxLength.removeClass("valid");
		maxLength.addClass("invalid");
		maxLengthCheck = false;
	  }

	if (letterCheck && numberCheck && minLengthCheck && maxLengthCheck && capitalCheck) {

		passwordInputValidation = true;
		
	} else {

		passwordInputValidation = false;
	}

	this.submitButtonHandler();
}

function submitButtonHandler () {

	if (emailInputValidation && passwordInputValidation) {
		$("#submit-button").prop('disabled', false);
		$("#submit-button").removeClass('btn-light');
		$("#submit-button").addClass('btn-primary');
	} else {
		$("#submit-button").prop('disabled', true);
		$("#submit-button").addClass('btn-light');
		$("#submit-button").removeClass('btn-primary');
	}
}

