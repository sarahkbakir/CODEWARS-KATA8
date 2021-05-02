// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// Solution 1:

function defineSuit(card) {
    if(card.includes('♣')){return 'clubs'}
    else if(card.includes('♠')) {return 'spades'}
    else if(card.includes('♦')) {return 'diamonds'}
    else if(card.includes('♥')) {return 'hearts'}
    
  }

//   Solution 2:

function defineSuit(card) {
    let clubs = card.includes('♣')
    let spades = card.includes('♠') 
    let diamonds = card.includes('♦')
    let hearts = card.includes('♥')
    
    return clubs ? 'clubs' : spades ? 'spades': diamonds ? 'diamonds' : 'hearts'
  }