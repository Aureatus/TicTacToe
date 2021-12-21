const Player = (name, icon) => {
    const getName = () => name
    const getIcon = () => icon
    return {
        getName,
        getIcon,
    }
}

const gameFlow =  () => {
    const player1 = Player("Alex","X")
    const player2 = Player("Josh","O")
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
        for (let i = winConditions.length-1; i>=0; i--) {
            if (board.includes(currentPlayer.getIcon(),winConditions[i][0]) ||
                board.includes(currentPlayer.getIcon(),winConditions[i][1]) ||
                board.includes(currentPlayer.getIcon(),winConditions[i][2])
            )
            {
                return true
            }
            else return false
        }
    }
    const isTie = () => {
        if (isWin() === true) {
            return false
        }
        else if(board.includes("") === true) {
            return false
        }
        else return true
    }

    const reset = () => {
        board.fill("")
    }

    const addMark= (index) =>  {
        board[index] = currentPlayer.getIcon()
    }

    const displayBoard  = () => {
        for( i=0; i<9; i++) {
            const button = document.createElement("button")
            document.querySelector("#gameboard").appendChild(button)
        }
    }
    const displayWinner = () => {
        let gameBoard = document.querySelector("#gameboard").children
        gameBoard = Array.from(gameBoard)
        gameBoard.forEach(item => {
            item.remove()
        })
        let container  =  document.querySelector("container")
        let gameWinText = document.createElement("p")
        gameWinText.classList.add("gameWinText")
        gameWinText.textContent = "The winner is" + currentPlayer
        container.appendChild(gameWinText)
    }



    return {
        board,
        currentPlayer,
        playerSwitch,
        isWin,
        isTie,
        reset,
        addMark,
        displayBoard,
        displayWinner,

    }
}


/*const gameInitalize = (() => {
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

        document.querySelector("nameInputs").remove()
        let playerDisplayContainer = document.createElement("playerDisplay")
        document.querySelector("container").append(playerDisplayContainer)

        let player1Display = document.createElement("player1Display")
        playerDisplayContainer.appendChild(player1Display)
        player1Display.append(document.createElement("playerName"))
        player1Display.append(document.createElement("playerIcon"))
        player1Display.firstChild.textContent =  "Player 1:" + player1.name
        player1Display.lastChild.textContent = "Icon:" + player1.icon

        let player2Display = document.createElement("player2Display")
        playerDisplayContainer.appendChild(player2Display)
        player2Display.append(document.createElement("playerName"))
        player2Display.append(document.createElement("playerIcon"))
        player2Display.firstChild.textContent =  "Player 2:" + player2.name
        player2Display.lastChild.textContent = "Icon:" + player2.icon


        document.querySelector("playerDisplay").style.order = 0
        document.querySelector("gamestatebuttons").style.order = 1
        document.querySelector("grid").style.order = 2

        document.querySelector(".start").remove()
    })
})()*/