function validateForm() {

    if (!validateLength(document.myForm.name.value)) {
        alert("Por favor, preencha o campo nome");
        document.myForm.name.focus();
        return false;
    }
    if (!validateEmail(document.myForm.email.value) || !validateLength(document.myForm.email.value)) {
        alert("Por favor, preencha um email válido");
        document.myForm.email.focus();
        return false;
    }
    if (!validateLength(document.myForm.title.value)) {
        alert("Por favor, preencha seu título");
        document.myForm.title.focus();
        return false;
    }
    if (!validateLength(document.myForm.comment.value)) {
        alert("Por favor, preencha seu comentário");
        document.myForm.comment.focus();
        return false;
    }
    return (true);
}

function validateEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
}
function validateLength(value) {
    if (value.length != "") {
        return true;
    }
}