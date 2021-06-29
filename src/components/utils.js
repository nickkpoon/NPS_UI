export function clearFields() {
    var inputs = document.getElementsByClassName('input-field');
    for(var i=0; i < inputs.length; i++){
        inputs[i].value='';
     }
}


