//Load Other JS files into the main.js
function loadScript(src) {
    const script = document.createElement("script");
    script.src =src;
    document.head.prepend(script);
}
loadScript('tcommands.js');

//Enter Command 
let commandInput = document.getElementById("command-input")
.insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');

//Command Result
let commandResult = document.getElementById("command-result")

function helpCommand() {
    commandResult.textContent = "h3lp"
}

