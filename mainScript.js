let formData = new FormData();
let currentStep = 0

window.onload = () => {
    document.querySelector("#personalInfoForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const personalData = new FormData(e.target);

        

        for(const dataPoint of personalData.entries()){
            formData.set(dataPoint[0], dataPoint[1])
        }

        nextPage()
        secondPage()
        console.log(formData)
    })

    // nextPage()
    //     secondPage()
    document.querySelector(".stepOneNumber").classList.add("currentNumber")
}


function firstPage(){
    checkNumbers()

    let formHolder = document.querySelector(".formHolder")
    formHolder.innerHTML=""

    let header1 = document.createElement("h1");
    header1.innerHTML="Personal info";

    let header2 = document.createElement("h2");
    header2.innerHTML= "Please provide your name, email address, and phone number";

    formHolder.appendChild(header1)
    formHolder.appendChild(header2)
    
    
    let form = document.createElement("form")
    form.id = "personalInfoForm"
    form.action = "post"

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const personalData = new FormData(e.target);

        

        for(const dataPoint of personalData.entries()){
            formData.set(dataPoint[0], dataPoint[1])
        }

        nextPage()
        secondPage()
        console.log(formData)
    })

    // element to hold the name elements
    let fullnameLabel = document.createElement("label");
    fullnameLabel.htmlFor = "fullName"
    fullnameLabel.id = "fullNameLabel"
    fullnameLabel.innerHTML = "Name"

    form.appendChild(fullnameLabel)

    let fullNameInput = document.createElement("input");
    fullNameInput.type = "text";
    fullNameInput.id = "fullNameInput";
    fullNameInput.name = "fullName";
    fullNameInput.placeholder = "e.g. Stephen King";

    form.appendChild(fullNameInput);

    
    // element to hold email address
    let emailAddressLabel = document.createElement("label");
    emailAddressLabel.htmlFor = "emailAddress"
    emailAddressLabel.id = "emailAddressLabel"
    emailAddressLabel.innerHTML = "Email Address"

    form.appendChild(emailAddressLabel)

    let emailAddressInput = document.createElement("input");
    emailAddressInput.type = "text";
    emailAddressInput.id = "emailAddressInput";
    emailAddressInput.name = "emailAddress";
    emailAddressInput.placeholder = "e.g. stephenking@lorem.com";

    form.appendChild(emailAddressInput);

    // element to hold phone number
    let phoneNumberLabel = document.createElement("label");
    phoneNumberLabel.htmlFor = "phoneNumber"
    phoneNumberLabel.id = "phoneNumberLabel"
    phoneNumberLabel.innerHTML = "Phone Number"

    form.appendChild(phoneNumberLabel)

    let phoneNumberInput = document.createElement("input");
    phoneNumberInput.type = "text";
    phoneNumberInput.id = "phoneNumberInput";
    phoneNumberInput.name = "phoneNumber";
    phoneNumberInput.placeholder = "e.g. +1 234 567 890";

    form.appendChild(phoneNumberInput);

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Next Step"
    nextButton.type="submit"
    nextButton.className = "nextButton"

    form.appendChild(nextButton)


    formHolder.appendChild(form);
}

function secondPage(){
    checkNumbers()

    document.querySelector("h1").innerHTML="Select Your Plan";
    document.querySelector("h2").innerHTML="You have the option of monthly or yearly billing";

    document.querySelector("#personalInfoForm").remove();

    let planButtons = document.createElement("span");
    planButtons.classList.add("planButtons");


    let optionButtons = document.createElement("div")
    optionButtons.className = "optionButtons"

    let arcadeButton = document.createElement("button");
    
    let advancedButton = document.createElement("button");

    let proButton = document.createElement("button");

    optionButtons.appendChild(arcadeButton);
    optionButtons.appendChild(advancedButton);
    optionButtons.appendChild(proButton);

    planButtons.appendChild(optionButtons)

    let switchHolder = document.createElement("div");

    let backButton = document.createElement("button")
    backButton.innerHTML="Go Back";
    
    backButton.onclick = function() {prevPage(); firstPage()};

    let forwardButton = document.createElement("button")

    planButtons.appendChild(switchHolder)

    planButtons.appendChild(backButton)
    planButtons.appendChild(forwardButton)

    document.querySelector(".formHolder").appendChild(planButtons)


}

function fourthPage(){

}
function thirdPage(){

}


function validateForm(formID){
    
}

function prevPage(){
    currentStep -= 1;
}

function nextPage(){
    currentStep += 1;
}

function checkNumbers(){
    var stepDict= {
        0: ".stepOneNumber",
        1: ".stepTwoNumber",
        2: ".stepThreeNumber",
        3: ".stepFourNumber",
    }

    for(var key in stepDict){
        document.querySelector(stepDict[key]).classList.remove("currentNumber")
    }

    document.querySelector(stepDict[currentStep]).classList.add("currentNumber")

    console.log(stepDict)
}