function createContact(){
	window.location.href="tel://9074043146";
}
function subscribe(){
	var name = document.getElementById('tf-outlined').value;
	window.location.href="https://wa.me/919074043146?text=%2Asubscription%2A%0D%0AADD+%3C"+ name +"%3E";
}
mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));