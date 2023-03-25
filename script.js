window.onload = function(){
    let randomSymbol = randomSuit();
    let simboloRandom = document.getElementsByTagName('h2');
    let randomValue = randomCardValue();
    let valueRandom = document.getElementsByTagName('h1')[0];
    let color = cardColor(randomSymbol);
    simboloRandom[0].textContent = randomSymbol;
    simboloRandom[1].textContent = randomSymbol;
    valueRandom.textContent = randomValue;
    simboloRandom[0].style.color = color;
    simboloRandom[1].style.color  = color;
    valueRandom.style.color = color;
   
}

function randomSuit(){
    let suits = ['♠','♣','♦','♥'];
    let random = Math.floor(Math.random() * suits.length);
    return suits[random];
}


function randomCardValue(){
    let cardValue = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
    let random = Math.floor(Math.random() * cardValue.length);
    return cardValue[random];

}


function cardColor(x){ 
    if (x === '♦' || x === '♥') {
        return '#f00'; // red
    } else {
        return '#000'; // black
    }
}
   


//   let color = cardColor();
// simboloRandom[0].style.color = color;
// simboloRandom[1].style.color = color;
// valueRandom.style.color = color;

