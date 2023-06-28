
function start(){
let storedList = JSON.parse(localStorage.getItem("items")); //this is an array
if(storedList !== null){
for(let i=0;i<storedList.length;i++){
    const list=document.createElement("span");
    list.classList.add("thirdSpan");
    list.innerHTML=`<div class="listItems">${storedList[i]}</div><button class="deleteButton" id="${i+1}"onclick="deleted(this)" title="Delete the current item"><i class="fa fa-trash"></i></button><br>`;
    document.getElementById("main").appendChild(list);
}
}
}


// add button function --> main function that create the list item
let items=JSON.parse(localStorage.getItem("items"));
function add(){
    let value=document.getElementById("input").value;
    if(value != ""){
     if(items !== null) items.push(value);
     else items=[value]; 
    localStorage.setItem("items", JSON.stringify(items));
    let storedList = JSON.parse(localStorage.getItem("items"));

    const list=document.createElement("span");
    list.classList.add("thirdSpan");
    list.innerHTML=`<div class="listItems">${storedList[storedList.length-1]}</div><button class="deleteButton" onclick="deleted(this)" title="Delete the current item"><i class="fa fa-trash"></i></button><br>`;
    document.getElementById("main").appendChild(list);
    document.getElementById("input").value="";
    }
}


//  // add functon hi hai jo enter button se execute hoga
document.addEventListener("keydown",function(e){
    if(e.key==="Enter")add()
})


//delete function --> delete the current item
function deleted(current){ 
    let items=JSON.parse(localStorage.getItem("items"));
    items.splice(current.id-1,1);
    localStorage.setItem("items", JSON.stringify(items));
    current.parentElement.remove();
    
}


//just to clear all items by pressing the delete button
document.addEventListener("keydown",function(e){
    if(e.key==="Delete" && confirm("Do You Really Want To Clear All Items.")===true){ //fetches the delete button and confirm with the user that he really want to dlete all items
        const spa=document.querySelectorAll(".thirdSpan");
        for(let i=0;i<spa.length;i++) {   // loop through all the listitem and remove them
            spa[i].remove(); 
            localStorage.clear();}
    }
})


//info button --> display the alert box with info about buttons (delete and enter)
function info(){
    alert("GUIDES\n1.Press Enter to add items.\n2.Press DELETE to clear all the list items ");
}
