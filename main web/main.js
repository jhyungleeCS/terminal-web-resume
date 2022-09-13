//Enter Command 
let commandInput = document.getElementById("command-input");

let div1 = document.getElementById("div").insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');

//Command Result
let commandResult = document.getElementById("command-result")

function helpCommand() {
    for (let i = 0; i < help.length; i++) {
        commandResult.innerHTML = 
        "<li>" + help[0] + "</li>" + 
        "<li>" + help[1] + "</li>" + 
        "<li>" + help[2] + "</li>" + 
        "<li>" + help[3] + "</li>" +
        "<li>" + help[4] + "</li>"  
    }
}


//reading Enter Key
const keyBoard = document.querySelector('.keyboard')
keyBoard.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        //function()
        console.log(e)
    }
})

//function for input
if (commandInput === 'help') {
    helpCommand;
}