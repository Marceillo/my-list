//selector dom elements 

const inputlist = document.querySelector("#inputfield");
//note test if class name works for button
const inputbutton = document.querySelector(".listbutton");
//targets the div ul list 
const inputoutlist = document.querySelector(".listblocks");
const filterview = document.querySelector(".filter");



//lisener
// eventlisner to get the document to local storage 
inputbutton.addEventListener("click", taskAdd);







//functions 

function taskAdd(event) {
    //prevent form from submitting 
    event.preventDefault();
    
    //outlist div 
   const outDiv = document.createElement("div");
   outDiv.classList.add("listdiv");
   //create Li 
   const newListItem = document.createElement('li');
   newListItem.innerText = 'mmm';
   newListItem.classList.add('new-item');
   outDiv.appendChild(newListItem);
   //check button 
   const checkButton = document.createElement('button');
   checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
   checkButton.classList.add("done");
   outDiv.appendChild(checkButton);
   //delete Button 
   const deletButton = document.createElement('button');
   deletButton.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
   deletButton.classList.add("delet");
   outDiv.appendChild(deletButton);
   //add to ul list 
   inputoutlist.appendChild(outDiv);
 
   
}