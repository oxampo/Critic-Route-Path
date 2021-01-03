
const getTextAndPrintit = ()=>{
    let text = document.getElementById("textToConsole").value
    if (text) {
        console.log(text)
    } else {
        alert('There is no text')
    }
}

const addActivity = ()=>{
    insertNewRow()
}

const removeElement = (element)=>{
    element.classList.add("removed")
    element.addEventListener("transitionend",()=>{
        element.remove()
    })
}

const insertNewRow = ()=>{
    let rows = document.getElementsByClassName("rows")[0]
    let row = document.createElement("div")
    row.classList.add("row")
    
    for (tag of ["Identification","Description","Duration","Requirements"]){
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = tag
        row.appendChild(input)
    }
    rows.appendChild(row)
}


const calculateCritic = ()=>{
    let formContainer = document.getElementsByClassName("formContainer")[0];
    removeElement(formContainer);

    const rows = document.getElementsByClassName("rows")[0].children;

    let i = 0;
    while (i < rows.length-1){
        let row = rows[i];
        let valuesOfTask = row.children;
        let task = {
            'identification': valuesOfTask[0].value,
            'description': valuesOfTask[1].value,
            'duration': valuesOfTask[2].value,
            'requirements': valuesOfTask[3].value
        };
        console.log(task)
        i++;
    }

  /*   for(let row in Object. rows){
        let valuesOfTask = row.children
        console.log(task)
    } */
    
}