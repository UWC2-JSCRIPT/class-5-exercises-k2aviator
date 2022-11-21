// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

bodyPara = document.querySelector('p')

aHref = document.createElement('a');
const hrefText = 
    document.createTextNode("Buy now!")
aHref.appendChild(hrefText)

aHref.setAttribute(
    'id','cta');

bodyPara.appendChild(aHref)

// Access (read) the data-color attribute of the <img>,
// log to the console

const imgColor = 
    document.querySelector('img');
    const color = imgColor.dataset.color;
    console.log("Car image color is :", color)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const featuresList = document.querySelectorAll('li')
const turboCharged = featuresList[2]

turboCharged.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

mainBody = document.querySelector('main')
WmainChildren = mainBody.children;

mainBody.removeChild(bodyPara)