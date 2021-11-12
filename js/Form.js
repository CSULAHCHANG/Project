function processForm() {

	let inputN = $("#name");
	let valueN = inputN.val();

	let copyE = $("#submitSuccessMessage");
		copyE.text("Thank you!" + " " + valueN + ", for your valuable feedback~!");
    copyE.show();
    
  return false;
}
// Add all event handlers 
function addEventHandlers() {
	$("#submitButton").on('click', processForm);
}
addEventHandlers();