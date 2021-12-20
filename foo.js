/*
1. 
*/

const TicTacToe = ((name1, name2) => {
    let gridArray = new Array(9).fill("")
    player1 = {
        name: name1,
        icon: "X"
    }
    player2 = {
        name: name2,
        icon: "O"
    }
    players = {
        player1,
        player2
    }
    return {
        gridArray,
        players
    }
})

const gameInitalize = (() => {
    const startButton = document.querySelector(".start")
    startButton.addEventListener("click", () => {
        const player1Input = document.querySelector("#player1")
        const player2Input  = document.querySelector("#player2")
        let player1Name = player1Input.value
        let player2Name = player2Input.value
        if (!player1Name.trim()) {
            return
        }
        if (!player2Name.trim()) {
            return
        }
        TicTacToe(player1Name, player2Name)
        const nameInputs = document.querySelector("nameInputs")
        nameInputs.remove()
        /*
        PLAYER INPUT RECONSTRUCTOR
        document.querySelector("container").append(nameInputs)
        document.querySelector("nameInputs").style.order = 0
        document.querySelector("gamestatebuttons").style.order = 1
        document.querySelector("grid").style.order = 2
        */
    })
})()






/*const playerCreator = ((name) => {
    this.name = name

    return {
        name
    }
});

// Let gameArray = document.queryselectorall("button").textcontent
const gameBoard = (() => {
    let gameArray = ["","","","","","","","",""]

    let addMark = ((item,index) => {
        if (game.gridButtons[index].textContent === "X" || game.gridButtons[index].textContent === "O") {
            return
        }
        if (game.turnCounter === true) {
            gameBoard.gameArray[index] = "X"
        }
        else {
            gameBoard.gameArray[index] = "O"
        }
        game.turnCounter = !game.turnCounter
        displayController.render(gameBoard.gameArray)
        game.gameStateCheck()
    })

    return {
        gameArray,
        addMark
    }
    
})()

const displayController = (() => {
    const render = ((input) => {
        let square = document.querySelector("#gameboard").children
        for (let i = 0; i<input.length; i++) {
            square[i].textContent = input[i]
        }
    })

    return {render}
})();

const game = (() => {
    let players = {
        player1 : playerCreator("Alex"),
        player2 : playerCreator("Josh")
    }
    let turnCounter = true
    let isWon = false
    let isTie = false
    const gridButtons = document.querySelectorAll("grid button")

    const clickEventAdder = ((item, index) => {
        gridButtons[index].addEventListener("click", function() {
            gameBoard.addMark(item,index)
        })
    })
    gridButtons.forEach(clickEventAdder)

    const gameStateCheck = (() => {
        let letter
        for (let i = 2; i>0; i--) {
            if (i === 2) {
                letter = "X"
            }
            if (i ===1) {
                letter = "O"
            }
            if (
                (gameBoard.gameArray[0] === letter &&
                gameBoard.gameArray[1] === letter &&
                gameBoard.gameArray[2] === letter) ||
                (gameBoard.gameArray[0] === letter &&
                gameBoard.gameArray[3] === letter &&
                gameBoard.gameArray[6] === letter) ||
                (gameBoard.gameArray[0] === letter &&
                gameBoard.gameArray[4] === letter &&
                gameBoard.gameArray[8] === letter) ||
                (gameBoard.gameArray[1] === letter &&
                gameBoard.gameArray[4] === letter &&
                gameBoard.gameArray[7] === letter) ||
                (gameBoard.gameArray[2] === letter &&
                gameBoard.gameArray[5] === letter &&
                gameBoard.gameArray[8] === letter) ||
                (gameBoard.gameArray[2] === letter &&
                gameBoard.gameArray[4] === letter &&
                gameBoard.gameArray[6] === letter) ||
                (gameBoard.gameArray[6] === letter &&
                gameBoard.gameArray[7] === letter &&
                gameBoard.gameArray[8] === letter) ||
                (gameBoard.gameArray[3] === letter &&
                gameBoard.gameArray[4] === letter &&
                gameBoard.gameArray[5] === letter)
            ) {

                isWon = true
            }
        }
        if (gameBoard.gameArray.includes("") === false && isWon === false) {
            isTie = true
        }
    })
    return {
        players,
        turnCounter,
        gridButtons,
        gameStateCheck,
        isWon,

    }
})();
*/
