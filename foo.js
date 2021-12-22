const Player = (name, icon) => {
    const getName = () => name
    const getIcon = () => icon
    return {
        getName,
        getIcon,
    }
}

const gameFlow =  (name1,name2) => {
    const player1 = Player(name1,"X")
    const player2 = Player(name2,"O")
    let board = new Array(9).fill("")
    const winConditions = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [6,7,8],
        [3,4,5],
    ]
    let currentPlayer = player1
    const playerSwitch = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2
        }
        else currentPlayer = player1
    }

    const isWin = () => {
        const winChecker = winConditions.find(winConditions => winConditions.every(index => board[index] === currentPlayer.getIcon()))
        if (winChecker === undefined) return false
        else {return winChecker}
    }
    const isTie = () => {
        if (Boolean(isWin())) {return false}
        if (board.includes("")) {return false}
        else return true
    }

    const reset = () => {
        board.fill("")
    }

    const addMark= (index) =>  {
        if (board[index] != "") {
            return false
        }
        else if (board[index] === "") {
            board[index] = currentPlayer.getIcon()
            console.log(board)
            return true
        }
    }

    const initialize  = () => {

        return {
            player1,
            player2
        }
    }
    
    const turn =  (index) => {
        let roundResult = isWin()
        if (roundResult) {
            return
        }
        switch (addMark(index)) {
            case true:
                addMark(index)
                displayController().displayMark(board,index)
                let roundResult = isWin()
                if (roundResult) {
                    displayController().displayWinner(currentPlayer,roundResult)
                    break;
                }
                else if(isTie()) {
                    displayController().displayTie()
                }
                playerSwitch()
                break;
            case false:
                break;
        }
    }


    return {
        board,
        currentPlayer,
        initialize,
        playerSwitch,
        isWin,
        isTie,
        reset,
        addMark,
        turn,


    }
}

const displayController = () => {

    const nameInputRemover = () => {
        document.querySelector("nameInputs").remove()
    }
    const startButtonRemover = () => {
        document.querySelector(".start").remove()
    }

    const displayBoard  = () => {
        for( i=0; i<9; i++) {
            const button = document.createElement("button")
            document.querySelector("#gameboard").appendChild(button)
        }
    }
    const displayMark = (board,index) => {
        let grid = document.querySelector("#gameboard")
        let gameBoard = grid.querySelectorAll("button")
        gameBoard[index].textContent = board[index]
        
    }
    const displayWinner = (currentPlayer,roundResult) => {
        let gameBoard = document.querySelector("#gameboard").children
        gameBoardArray = Array.from(gameBoard)
        roundResult.forEach(item => {
            
        })
        let container  =  document.querySelector("container")
        let gameWinText = document.createElement("p")
        gameWinText.classList.add("gameWinText")
        gameWinText.textContent = "The winner is" + currentPlayer.getName()
        container.appendChild(gameWinText)
    }
    const displayTie = () => {
        let gameBoard = document.querySelector("#gameboard").children
        gameBoard = Array.from(gameBoard)
        gameBoard.forEach(item => {
            item.remove()
        })
        let container  =  document.querySelector("container")
        let gameTieText = document.createElement("p")
        gameTieText.classList.add("gameTieText")
        gameTieText.textContent = "The game is a tie!"
        container.appendChild(gameTieText)
    }
    const nameDisplayer = (player1Name, player2Name) => {
        let playerDisplayContainer = document.createElement("playerDisplay")
        document.querySelector("container").append(playerDisplayContainer)

        let player1Display = document.createElement("player1Display")
        playerDisplayContainer.appendChild(player1Display)
        player1Display.append(document.createElement("playerName"))
        player1Display.append(document.createElement("playerIcon"))
        player1Display.firstChild.textContent =  "Player 1:" + player1Name
        player1Display.lastChild.textContent = "Icon:" + "X"

        let player2Display = document.createElement("player2Display")
        playerDisplayContainer.appendChild(player2Display)
        player2Display.append(document.createElement("playerName"))
        player2Display.append(document.createElement("playerIcon"))
        player2Display.firstChild.textContent =  "Player 2:" + player2Name
        player2Display.lastChild.textContent = "Icon:" + "O"


        document.querySelector("playerDisplay").style.order = 0
        document.querySelector("gamestatebuttons").style.order = 1
        document.querySelector("grid").style.order = 2

    }

    return {
        nameInputRemover,
        startButtonRemover,
        nameDisplayer,
        displayBoard,
        displayWinner,
        displayTie,
        displayMark,
    }
}

const game = (() => {
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
        displayController().nameDisplayer(player1Name,player2Name)
        displayController().nameInputRemover()
        displayController().startButtonRemover()
        displayController().displayBoard()

        const TicTacToe = gameFlow(player1Name,player2Name)
        const gameBoardButtons = document.querySelectorAll("grid button")
        const clickEventAdder =  ((item,index) => {
            gameBoardButtons[index].addEventListener("click", () => {
                TicTacToe.turn(index)
            })
        })
        gameBoardButtons.forEach(clickEventAdder)
    })
})()