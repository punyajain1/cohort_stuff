function addtodo(){
    const inputel = document.querySelector("input");
    const value = inputel.value; // this will not give anything as nothing is present in input box initially
    console.log(value);
}


let ctr = 2;
function callback(){
    const el = document.querySelectorAll("h4")[1];
    el.innerHTML=ctr;
    ctr+=1;
}

setTimeout(callback,1000); 