function liczznaki(tekst) {

    console.log(tekst);
    var podzielone = tekst.toLowerCase().split('').sort();

    console.log(podzielone);

    var count = 1;
    var repeats = [];
    var element = podzielone[0];
    console.log(element);

    for (var i = 1; i <= podzielone.length; i++) {
        if (element == podzielone[i]) {
            ++count;
            console.log(count);
        } else {
            console.log('test');
            repeats.push([element, count]);
            count = 1;
            element = podzielone[i];

        }

    }
    return repeats;
}

console.log(liczznaki('Kajak'));