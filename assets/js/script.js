
const inputlist = document.querySelector("#inputfield");
//note test if class name works for button
const inputbutton = document.querySelector(".listbutton");
//targets the div ul list 
const inputoutlist = document.querySelector(".listblocks");
//To filter the view 
const filterView = document.querySelector(".filter");



//lisener
// eventlisner to get the document to local storage 
document.addEventListener ("DOMContentLoaded", getMylistStorage);
inputbutton.addEventListener("click", taskAdd);




//functions 

function taskAdd(event) {
    event.preventDefault();

    // Prevent from entering blank todo tasks
    const inputValue = inputlist.value.trim();
    if (inputValue === "") {
        alert("Please type text in field.");
        return;
    }

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
         //local storage 
    addMylistStorage();
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
       
        //local storage 
    addMylistStorage();

    });

    outDiv.appendChild(deletButton);
    //add to ul list 
    inputoutlist.appendChild(outDiv);
   
    //local storage 
    addMylistStorage();
     //clear input 
    inputlist.value = "";
    

}

/**
*This function is for adding the list items to the local storage.
*The first function adds the item in array to storage.
*The secon function gets these items and displays it on the page.
*/
 
function addMylistStorage() {

    const listItems = [];
    const listDivs = document.querySelectorAll(".listdiv")
    listDivs.forEach(div =>{
        const listItem = div.querySelector(".new-item").innerText;
        listItems.push(listItem);
    });
    
    localStorage.setItem("storageList", JSON.stringify(listItems));
console.log(listItems)
}

// Get the list from the local storage 

function getMylistStorage() {
    
    const storedList = JSON.parse(localStorage.getItem("storageList"));

    storedList.forEach (item => {
        const outDiv = document.createElement("div");
    outDiv.classList.add("listdiv");

    const newListItem = document.createElement('li');
    newListItem.innerText = item.text;
    newListItem.classList.add('new-item');
    
    outDiv.appendChild(newListItem);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    checkButton.classList.add("done");

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

    const deletButton = document.createElement('button');
    deletButton.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
    deletButton.classList.add("delet");
   
    deletButton.addEventListener('click', event => {
        const parent = event.currentTarget.parentElement;
        parent.remove()
          
    });

    outDiv.appendChild(deletButton);
    inputoutlist.appendChild(outDiv);
    inputlist.value = "";

    });
}



