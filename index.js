
//help array command displaying help commands
const help = [
    'whoami             Who is mangoclient?',
    'projects           View projects',
    'contacts           View contact information',
    'resume             Link to LaTeX resume',
    'help               View list of possible commands'
]

//whoami array
const whoami = [
    'My name daniel.'
]
//projects array
const projects = [
    'My project here'
]
//contacts array
const contacts = [
    'My contact here'
]
//resume array
const resume = [
    'My resume here'
]


//Function to create before div text
let textElement = document.getElementById("text-element");
//Wasn't sure how to use the pseudo ::before element here. Fix later. 
textElement.insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');

//Div for Result from command
let textResult = document.getElementById("text-result");
//let textHere = document.getElementById("text-here");

//Start of Function to display input text into <p id="text-here">
//use for loop or if else statement? 
let inputElement = document.getElementById("input-element");
let listElement = document.getElementById("myList");

textElement.value = "";
commander.innerHTML = textElement.value;

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            for (let i = 0; i < help.length; i++) {
                textResult.textContent += help[i]
            };
            break;
        case "whoami":
            //textcontent of whoami;
            break;
        case "projects":
            //textcontent of projects;
            break;
        case "contacts":
            //textcontent of contacts;
            break;
        case "resume":
            //textcontent of contacts;
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;     
    }
}



/*function generateList(){
    help.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = help;
        listElement.appendChild(li);
    })
} */


/*if (inputElement.value.toLowerCase() === 'help') {
    generateList()
}else {
    textHere.innerHTML="Didn't enter help"
}*/



