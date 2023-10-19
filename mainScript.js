let formData = new FormData();
let currentStep = 0

let pageSelectors = []
let numberSelectors = []

window.onload = () => {
    let firstPage = document.querySelector("#firstForm")
    let secondPage = document.querySelector("#secondForm")
    let thirdPage = document.querySelector("#thirdForm")
    let fourthPage = document.querySelector("#fourthForm")
    let fifthPage = document.querySelector("#fifthPage")

    pageSelectors[0] = firstPage
    pageSelectors[1] = secondPage
    pageSelectors[2] = thirdPage
    pageSelectors[3] = fourthPage
    pageSelectors[4] = fifthPage
    
    let firstNumber = document.querySelector(".stepOneNumber")
    let secondNumber = document.querySelector(".stepTwoNumber")
    let thirdNumber = document.querySelector(".stepThreeNumber")
    let fourthNumber = document.querySelector(".stepFourNumber")

    numberSelectors[0] = firstNumber
    numberSelectors[1] = secondNumber
    numberSelectors[2] = thirdNumber
    numberSelectors[3] = fourthNumber

    document.querySelector("#personalInfoForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const personalData = new FormData(e.target);

        

        for(const dataPoint of personalData.entries()){
            formData.set(dataPoint[0], dataPoint[1])
        }
        console.log(formData)
    })

    document.querySelector("#planSelectionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const personalData = new FormData(e.target);

        

        for(const dataPoint of personalData.entries()){
            formData.set(dataPoint[0], dataPoint[1])
        }

    })

    document.querySelector("#addonSelectionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const personalData = new FormData(e.target);

        

        for(const dataPoint of personalData.entries()){
            formData.set(dataPoint[0], dataPoint[1])
        }
        console.log(formData)
    })

    document.querySelectorAll(".backButton").forEach((button) => {
        button.addEventListener("click", previousPage)
    })

    document.querySelectorAll(".nextButton").forEach((button) => {
        button.addEventListener("click", nextPage)
    })

    document.querySelector(".stepOneNumber").classList.add("currentNumber")
}

function previousPage(){
    currentStep -= 1;
    if(currentStep < 0){
        currentStep = 0;
    }
    
    pageSelectors.forEach((page, index) => {
        if(index != currentStep){
            pageSelectors[index].classList.add("hidden")
        }
        else {
            pageSelectors[index].classList.remove("hidden")
        }

      });    

      numberSelectors.forEach((number, index) => {
        if(index != currentStep){
            numberSelectors[index].classList.remove("currentNumber")
        }
        else {
            numberSelectors[index].classList.add("currentNumber")
        }

      });    
}

function nextPage(){
    currentStep += 1;
    if(currentStep > 4){
        currentStep = 4;
    }

    validateForms()

    pageSelectors.forEach((page, index) => {
        if(index != currentStep){
            pageSelectors[index].classList.add("hidden")
        }
        else {
            pageSelectors[index].classList.remove("hidden")
        }

      });

      numberSelectors.forEach((number, index) => {
        if(index != currentStep){
            numberSelectors[index].classList.remove("currentNumber")
        }
        else {
            numberSelectors[index].classList.add("currentNumber")
        }

      });    
      console.log(currentStep)
    
}

function validateForms(){
    
}