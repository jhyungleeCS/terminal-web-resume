
//help array command displaying help commands
const help = [
    'whoami             Who is mangoclient?',
    'projects           View projects',
    'contacts           View contact information',
    'resume             Link to LaTeX resume',
    'help               View commands'
]

//whoami array
//projects array
//contacts array
//resume array

//Function to create before div text
let textElement = document.getElementById("text-element");
//Wasn't sure how to use the pseudo ::before element here. Fix later. 
textElement.insertAdjacentText('beforebegin', 'Daniel Lee@mangoclient [~] $: ');

let textResult = document.getElementById("text-result");
let textHere = document.getElementById("text-here");

//Start of Function to display input text into <p id="text-here">
//use for loop or if else statement? 
let inputElement = document.getElementById("input-element");
let listElement = document.getElementById("myList");

function generateList(){
    help.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        listElement.appendChild(li);
    })
}

if (inputElement.value.toLowerCase() === 'help') {
    generateList()
}else {
    textHere.innerHTML="Didn't enter help"
}



