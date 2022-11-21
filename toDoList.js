// If an li element is clicked, toggle the class "done" on the <li>

let liLoc = document.querySelectorAll('li');
let listItem = document.querySelectorAll('#list-item');
let ulLoc = document.querySelector('ul');
let mainLoc = document.querySelectorAll('main');
let aLoc = document.querySelectorAll('.delete');
increaseButtons = document.querySelectorAll('#increase');
decreaseButtons = document.querySelectorAll('#decrease');


//console.log(liLoc.length)

const liMarkDone = function(e){
    updateDom()
    console.log(this)
    this.className = "done"
    updateDom()
};

// Add function to reoder items

const reorderListPlus = function(e) {
  updateDom()
  console.log(this.previousSibling)
  console.log('Reoder list plus')
  updateDom()
};

const reorderListMinus = function(e) {
  updateDom()
  console.log(this.previousSibling)
  console.log('Reoder list minus')
  updateDom()
};
// update DOM function

const updateDom = function(){
  liLoc = document.querySelectorAll('li');
  aLoc = document.querySelectorAll('.delete');
  increaseButtons = document.querySelectorAll('#increase');
  decreaseButtons = document.querySelectorAll('#decrease');
  listItem = document.querySelectorAll('#list-item');
  for(let i=0; i<listItem.length; i++){
    listItem[i].addEventListener('click', liMarkDone)};
  for(let i=0; i<aLoc.length; i++){
    aLoc[i].addEventListener('click', deleteNode)};
  for(let i=0; i<increaseButtons.length; i++){
    increaseButtons[i].addEventListener('click', reorderListPlus)};
  for(let i=0; i<decreaseButtons.length; i++){
    decreaseButtons[i].addEventListener('click', reorderListMinus)};
}


// If a delete link is clicked, delete the li element / remove from the DOM

const deleteNode = function(e){
  updateDom()
  nodeToDelete = this.parentNode
  nodeToDelete.remove()
  console.log(this.parentNode)
  console.log('Deleted item:' + this.parentNode)
  updateDom()
};

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

let addLocation = document.querySelector('.add-item')
let listLength = liLoc.length
let currentLoc = listLength - 1

//console.log(liLoc, currentLoc, listLength)

const addListItem = function(e) {
  updateDom()
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  //console.log(liLoc[currentLoc])
  newLi = document.createElement('li');
  //orderSpan = document.createElement('span')
  //orderSpan.innerHTML = '<button class="button" type="button" id="increase">+</button> <button class="button" type="button" id="decrease">-</button> '
  //orderSpan.className = "orderButtons"
  newSpan = document.createElement('span')
  newSpan.setAttribute('id','list-item')
  newSpan.innerText = text + " "
  newAhref = document.createElement('a')
  newAhref.className = "delete"
  newAhref.innerText = "Delete"
  //newLi.appendChild(orderSpan)
  newLi.appendChild(newSpan)
  newLi.appendChild(newAhref)
  ulLoc.appendChild(newLi)
  liLoc = document.querySelectorAll('li');
  updateDom()

};

addLocation.addEventListener('click', addListItem);
updateDom()

