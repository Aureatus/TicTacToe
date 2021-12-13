/*
1. Gameboard
    1.1 Create Gameboard Object(module)
    1.2 Create Gameboard Array inside of Gameboard Object

2. Players
    2.1 Create Player objects(2),(Factory Function)
    2.2 Create name property inside of Player object.

3. GameFlow
    3.1 Create GameFlow object

4. displayController
    4.1 Create function(Factory Function) that renders contents of
    gameboardArray to webpage.

5. playerMark
    5.1 Create functions that searches dom for
        grid elements, adds click eventHandler with mark function executed
        on click.(Should place a marker on clicked element.)
    5.2 THINK WHERE EACH BIT SHOULD RESIDE(IN GAME,PLAYER OR GAMEBOARD
        OBJECTS)
6 interfaceInputs
        6.1 allow player to input name
        6.2 include start/restart button
        6.3 add display element to congratulate winner
*/

const playerCreator = ((name) => {
    this.name = name

    return {
        name
    }
});

const render = ((input) => {
    let square = document.querySelector("#gameboard").children
    for (let i = 0; i<input.length; i++) {
        square[i].textContent = input[i]
    }
})

const displayController = (() => {
    render(gameBoard.gameArray)
})

const gameBoard = (() => {
    let gameArray = ["X","X","O","X","O","O","O","X","X"]
    return {
        gameArray
    }
    
})()

const game = (() => {
    let players = {
        player1 : playerCreator("Alex"),
        player2 : playerCreator("Josh")
    }
    return {
        players
    }
})();
