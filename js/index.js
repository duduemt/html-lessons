function suma(a, b) {
    return a + b;
}


function getRandomNumber(start, end) {
    var distance = end - start;
    return Math.floor(start + (Math.random() * distance));
}

var obiekt = {
    id: 10,
    name: 'Obiekt 10'
};

var tabela = [1, 1, 2, 3, 5, 8, 13, 21];


// Ciag fibonacci
/**
 * 
 * var i = 0  <= warunek poczatkowy
 * i < 100    <= warunek sprawdzany przy kazdej iteracji
 * i++ <=> i = i + 1   <= co iteracje
 */
for (var i = 0, tab = [1, 1]; i < 100; i++) {
    tab.push(
        tab[i] + tab[i+1]
    );
}

var game = [];

for (var i = 0; i < 5; i++) {
    game.push(
        {
            id: i,
            name: 'Player ' + (i + 1),
            win: Math.floor(Math.random() * 5),
            lose: 0
        }
    );
}

// var
console.info(game);

game.every(function (item) {
    item.lose = getRandomNumber(0, 25);
    return item;
});
console.info('-----------------');
console.info(game);

var winners = game.filter(function(item) {
    return item.win > 3;
});

console.info('-----------------');
console.info(winners);
