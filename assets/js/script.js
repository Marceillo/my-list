/* jshint esversion: 6 */

/* Selectors*/
const inputlist = document.querySelector("#inputfield");
const inputbutton = document.querySelector(".listbutton");
const inputoutlist = document.querySelector(".listblocks");
//Event Lisener
document.addEventListener("DOMContentLoaded", getMylistStorage);
inputbutton.addEventListener("click", taskAdd);
/** 
 *Functions creat a new task with two buttons.
 *Check button to indicate the task is done or not.
 *Delete button to remove the task.
 */
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

    //checkbutton event listener
    checkButton.addEventListener('click', event => {
        const parent = event.currentTarget.parentElement;
        if (parent.style.textDecoration === 'line-through') {
            parent.style.textDecoration = 'none';

            checkButton.style.color = '#654321';
        } else {
            parent.style.textDecoration = 'line-through';
            checkButton.style.color = 'green';

        }

    });

    outDiv.appendChild(checkButton);
    //delete Button 
    const deletButton = document.createElement('button');
    deletButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deletButton.classList.add("delet");
    //delete button when clicked
    deletButton.addEventListener('click', event => {
        const parent = event.currentTarget.parentElement;
        parent.remove();

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
    const listDivs = document.querySelectorAll(".listdiv");
    listDivs.forEach(div => {
        const listItem = div.querySelector(".new-item").innerText;
        /* isComplted for the line through to persist after refresh not working*/
        const isCompleted = div.querySelector(".new-item").classList.contains('completed');
        listItems.push({ item: listItem, isCompleted: isCompleted });
    });

    localStorage.setItem("storageList", JSON.stringify(listItems));
}
// Get the list from the local storage 
function getMylistStorage() {
    const storedList = JSON.parse(localStorage.getItem("storageList"));
    if (storedList !== null) {
        storedList.forEach(item => {
            const outDiv = document.createElement("div");
            outDiv.classList.add("listdiv");
            const newListItem = document.createElement('li');
            newListItem.innerText = item.item;
            newListItem.classList.add('new-item');

            if (item.isCompleted) {
                newListItem.style.textDecoration = 'line-through';

            }

            outDiv.appendChild(newListItem);
            //Check button 
            const checkButton = document.createElement('button');
            checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
            checkButton.classList.add("done");
            // check button event listener for getMylistStorage
            checkButton.addEventListener('click', event => {
                const parent = event.currentTarget.parentElement;
                if (parent.style.textDecoration === 'line-through') {
                    parent.style.textDecoration = 'none';
                    parent.isCompleted = false;
                    checkButton.style.color = '#654321';

                } else {
                    parent.style.textDecoration = 'line-through';
                    parent.isCompleted = true;
                    checkButton.style.color = 'green';

                }
                updateStorage();

            });

            outDiv.appendChild(checkButton);
            //delet button 
            const deletButton = document.createElement('button');
            deletButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            deletButton.classList.add("delet");

            deletButton.addEventListener('click', event => {
                const parent = event.currentTarget.parentElement;
                const itemText = parent.querySelector(".new-item").innerText;
                parent.remove();

                removeMylistStorage(itemText);
            });

            outDiv.appendChild(deletButton);
            inputoutlist.appendChild(outDiv);
            inputlist.value = "";

        });


    }
}
/* Check button update*/
function updateStorage() {
    const storedList = JSON.parse(localStorage.getItem("storageList"));
    localStorage.setItem("storageList", JSON.stringify(storedList));
}

function removeMylistStorage(itemText) {
    const storedList = JSON.parse(localStorage.getItem("storageList"));
    const toRemove = storedList.findIndex(item => item.item === itemText);
    if (toRemove !== -1) {
        storedList.splice(toRemove, 1);
        localStorage.setItem("storageList", JSON.stringify(storedList));

    }

}
