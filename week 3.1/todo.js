let id=1;


function deletetodo(index){
    const elem= document.getElementById(index);
    elem.parentNode.removeChild(elem);
    id--;

}

function addtodo() {
    const data = document.querySelector("input");
    const value = data.value;
    
    // Creating div
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", id);
    
    // Creating heading
    const head = document.createElement("h4");
    head.textContent = id + '. ' + value;
    
    // Creating button
    const butt = document.createElement("button");
    butt.textContent = "delete";
    butt.setAttribute("onclick", "deletetodo(" + id + ")");
    
    newDiv.appendChild(head);
    newDiv.appendChild(butt);
    
    document.querySelector("body").appendChild(newDiv);
    id++;
}