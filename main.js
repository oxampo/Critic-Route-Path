
let displayable = true

if (!displayable){

    document.getElementById("formContainer").style.backgroundColor = "red";
}

var containerOfRows = document.getElementById('containerOfRows')

const getTextAndPrintit = ()=>{
    let text = document.getElementById("textToConsole").value
    if (text) {
        console.log(text)
    } else {
        alert('There is no text')
    }
}



const addActivity = ()=>{
    alert('Adding new activity...')
}

const calculateCritic = ()=>{
    let formContainer = document.getElementsByClassName("formContainer")[0];
    
    removeElement(formContainer)
    // console.log(formContainer)
    
}

const removeElement = (element)=>{
    
    element.classList.add("removed")
        
    element.addEventListener("transitionend",()=>{
        element.remove()
    })
    
}


