//after user inserts data into form, create an entry in respective area
const form2 = document.getElementById("todo-form2");
const input2 = document.getElementById("todo-input2");
const todoLane2 = document.getElementById("todo-lane2");

let fqCount = 0;

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    const value2 = input2.value;

    if (!value2) return;

    const newTask2 = document.createElement("p");
    newTask2.classList.add("task", "fq-input", "col-1");
    newTask2.innerText = value2;

    todoLane2.appendChild(newTask2);

    //testing 2 input formats
    let divElement = document.createElement("div");
    divElement.classList.add("col-2");

    var rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.min = "0";
    rangeSlider.max = "10";
    rangeSlider.value = "5";
    rangeSlider.classList.add("slide-size");
    //this makes all instance of current buttons unique click amongst group
    rangeSlider.name = "option" + dbmhCount;

    divElement.appendChild(rangeSlider);
    todoLane2.appendChild(divElement);
    
    //fix this bc w/o it the input inline outputs, since previous element doesnt extend to entire line
    //todoLane.appendChild(document.createElement('br'));
    //end test area
    fqCount += 1;
    input2.value = "";
});