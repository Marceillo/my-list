//selector dom elements font size

const inputlist = document.querySelector("#inputfield");
//note test if class name works for button
const inputbutton = document.querySelector(".listbutton");
//targets the div ul list 
const inputoutlist = document.querySelector(".listblocks");
//To filter the view 
const filterView = document.querySelector(".filter");



//lisener
// eventlisner to get the document to local storage 
inputbutton.addEventListener("click", taskAdd);
//tes this lisener as code was changed below

filterView.addEventListener("click", selectView);


//functions 

function taskAdd(event) {
    //prevent form from submitting 
    event.preventDefault();

    //outlist div 
    const outDiv = document.createElement("div");
    outDiv.classList.add("listdiv");
   
    //create Li 
    const newListItem = document.createElement('li');
    newListItem.innerText = inputlist.value;
    newListItem.classList.add('new-item');
    outDiv.appendChild(newListItem);
   
    //check button 
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    checkButton.classList.add("done");

    //checkbutton when clicked 
    checkButton.addEventListener('click', event => {
        const parent = event.currentTarget.parentElement;
        if (parent.style.textDecoration === 'line-through') {
            parent.style.textDecoration = 'none';
            parent.style.removeProperty('textDecorationThickness');
        } else {
            parent.style.textDecoration = 'line-through';
        }
    });

    outDiv.appendChild(checkButton);

    //delete Button 
    const deletButton = document.createElement('button');
    deletButton.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
    deletButton.classList.add("delet");
    //delete button when clicked
    deletButton.addEventListener('click', event => {
        const parent = event.currentTarget.parentElement;
        parent.remove()
    });

    outDiv.appendChild(deletButton);
    //add to ul list 
    inputoutlist.appendChild(outDiv);
    //clear input 
    inputlist.value = "";
   
}

//Select Menu button 

 // add to local storage 


