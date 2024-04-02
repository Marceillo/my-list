
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
//test this lisener as code was changed below
filterView.addEventListener("click", selectView);


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
    //local storage


}




//Select Menu button 

function selectView(e) {
    const mylist = inputoutlist.childNodes;

    console.log('The list contains ' + mylist.length + ' items');
    console.log("The filter target value is ='" + e.target.value + "'");
    console.log('');

    console.log('Looping over child elements:');
    var newListItem;
    for (var i = 0; i < mylist.length; i++) {
        newListItem = mylist[i];

        console.log("\titeration " + i);
        console.log("\tchild element is " + newListItem.nodeName);
        console.log("\tcss = " + newListItem.classList);
        console.log("\telemnt HTML = " + newListItem.outerHTML);
        console.log('\t');

        if (newListItem.nodeName === "LI") {
            switch (e.target.value) {
                case "all":
                    newListItem.style.display = "flex";
                    break;

                case "completed":
                    if (newListItem.children[0].classList.contains("completed")) {
                        newListItem.style.display = "flex";
                    } else {
                        newListItem.style.display = "none";
                    }
                    break;

                case "inprogress":
                    if (newListItem.children[0].classList.contains("completed")) {
                        newListItem.style.display = "none";
                    } else {
                        newListItem.style.display = "flex";
                    }
                    break;
            }
        }
    }
}


// Add to the local storage  


// Get the list from the local storage 

