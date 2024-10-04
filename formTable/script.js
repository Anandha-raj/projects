function addContact(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pinCode = document.getElementById("pinCode").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    var choiceOfFood = document.getElementsByName('choice');
    var selectedValues = [];
    for (var i = 0; i < choiceOfFood.length; i++) {
        if (choiceOfFood[i].checked) {
            selectedValues.push(choiceOfFood[i].value);
        }
    }
        
    table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    table.innerHTML += `<td>${firstName}</td><td>${lastName}</td><td>${email}</td><td>${address}</td><td>${pinCode}</td><td>${gender.value}</td><td>${selectedValues.join(', ')}</td><td>${state}</td><td>${country}</td>`;
}