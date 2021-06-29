export function clearFields() {
    var inputs = document.getElementsByClassName('input_field');
    for(var i=0; i < inputs.length; i++){
        inputs[i].value='';
     }
}


