'use strict';

var workers = {
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        }
   ]
}

workers.employees.forEach(function (element, index) {
    console.log('Zatrudniony z LP ' + (index + 1) + ' ma na imię ' + element.firstName + ' a na nazwisko ' + element.lastName);
});