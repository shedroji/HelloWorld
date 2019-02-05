$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

function check(input) {
    if (input.value != document.getElementById('pwd').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}

function goBack() {
    window.history.back();
}