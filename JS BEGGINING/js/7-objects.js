'use strict';

/*
var greg = {
    customerName: 'Greg Miąsek',
    customerPhone: 6119600,
    orderConfirmation: function () {
    console.log(this.customerName+' właśnie złożył zamówienie');
    }
}

var rafal = {
    customerName: 'Rafał Zalewski',
    customerPhone: 6129780,
    orderConfirmation: function () {
        console.log('Rafał Zalewski właśnie złożył zamówienie');
    }
}

console.log(rafal.customerPhone);
console.log(rafal['customerName']);

greg.orderConfirmation();
*/

class Customer {
    constructor(customerName, customerPhone) {
        this.name = customerName;
        this.phone = customerPhone;
    }

    orderConfirmation() {
        console.log(this.name + ' właśnie złożył zamówienie');
    }
}

var currentCustomer = new Customer('Greg Miąsek', 607890456);

console.log(currentCustomer);
console.log(currentCustomer.name);

/*
class Osoba {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    licznikBmi() {
        return this.weight / Math.pow(this.height, 2);
    }
}
*/

function Osoba(height,weight) {
    this.height = height;
    this.weight = weight;
    this.liczBmi = function () {
        return this.weight / Math.pow(this.height, 2)
    }
}

var Greg = new Osoba(1.78, 105);

console.log(Greg.liczBmi());