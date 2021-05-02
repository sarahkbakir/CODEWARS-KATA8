// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//Rules:
//scissors beats paper
//paper beats rock
//rock beats scissors

//solution 1:
const rps = (p1, p2) => {
    if(p1 === 'paper' && p2 === 'rock') {return 'Player 1 won!'}
    else if(p1 === 'rock' && p2 === 'scissors') {return 'Player 1 won!'}
    else if(p1 === 'scissors' && p2 === 'paper') {return 'Player 1 won!'}
    else if(p1 === p2) {return 'Draw!'}
    else {return 'Player 2 won!'}
    
  };

  //solution 2:
  const rps = (p1, p2) => {
    let game = ['Player 1 won!','Player 2 won!','Draw!']
    return p1 === 'paper' && p2 === 'rock' ? game[0] :p1 === 'rock' && p2 === 'scissors'? game[0] : p1 === 'scissors' && p2 === 'paper'? game[0]:p1 === p2? game[2]:game[1]
  };