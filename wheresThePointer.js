// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click


const tdLoc = document.querySelectorAll('td');

const printLoc = function(e){
    //console.log("message")
    //const tdLocation = this.getElementsByTagName('td');
    //tdLocation.innerHTML = "TEST"
    console.log(e.path[0])
    e.path[0].innerHTML = "x:" + e.x + "y:"+ e.y
};

for(let i=0; i<tdLoc.length; i++)
    tdLoc[i].addEventListener('click', printLoc);
