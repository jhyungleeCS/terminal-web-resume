
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
let textElement = document.getElementById("text-element").insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');

//Wasn't sure how to use the pseudo ::before element here. Fix later. 
//textElement.insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');
let testElement = document.getElementById("test")
//Div for Result from command
let textResult = document.getElementById("text-result");
//let textHere = document.getElementById("text-here");

document.addEventListener("keyup");
//Start of Function to display input text
let inputElement = document.getElementById("input-element").value="";
if (e.key === 'Enter') {
    textResult.innerHTML = testElement.value
};













textElement.value = "";
inputElementer.innerHTML = textElement.value;

function inputElementer(cmd) {
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



