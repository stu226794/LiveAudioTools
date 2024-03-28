console.log('script.js loaded');

document.addEventListener("DOMContentLoaded", function() {
    let laufzeitButton = document.querySelector("#LaufzeitBerechnenButton");
    let schallwegButton = document.querySelector("#SchallwegBerechnenButton");  
    let csaButton = document.querySelector("#CSABerechnenButton");
    let endfireButton = document.querySelector("#EndfireBerechnenButton");

    let welcomeButton = document.querySelector("#welcomeButton");   
    let aboutButton = document.querySelector("#aboutButton");

    let menuMobileAnkerAudioTools = document.querySelector("#menuMobileAnkerAudioTools");


    if(laufzeitButton){
        laufzeitButton.addEventListener("click", LaufzeitBerechnen);
    }
    if(schallwegButton){
        schallwegButton.addEventListener("click", SchallwegBerechnen);
    }
    if(csaButton){
        csaButton.addEventListener("click", CSABerechnen);
    }
    if(endfireButton){
        endfireButton.addEventListener("click", EndfireBerechnen);
    }
    if(welcomeButton){
        welcomeButton.addEventListener("click", LinkZufallsRechner);
    }
    if(aboutButton){
        aboutButton.addEventListener("click", LinkZufallsRechner);
    }
    if(menuMobileAnkerAudioTools){
        menuMobileAnkerAudioTools.addEventListener("click", OpenMobileDropdownContent);
    }

    document.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
            let path = window.location.pathname;
            if(path.includes("Laufzeit.html")) {
                LaufzeitBerechnen();
            } else if(path.includes("Schallweg.html")) {
                SchallwegBerechnen();
            } else if(path.includes("CSA.html")) {
                CSABerechnen();
            } else if(path.includes("Endfire.html")) {
                EndfireBerechnen();
            }
        }
    });
});


function OpenMobileDropdownContent(){
    let dropdownContent = document.querySelector('#menuMobileDropdownContent');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'flex';
    } else {
        dropdownContent.style.display = 'none';
    }
}

function LinkZufallsRechner(){
    let random = Math.floor(Math.random() * 4) + 1;
    switch(random) {
        case 1:
            window.location.href = "../html/OnlineTools/Laufzeit.html";
            break;
        case 2:
            window.location.href = "../html/OnlineTools/Schallweg.html";
            break;
        case 3:
            window.location.href = "../html/OnlineTools/CSA.html";
            break;
        case 4:
            window.location.href = "../html/OnlineTools/Endfire.html";
            break;
    }
}

function Schallgeschwindigkeit(Temperatur){
    return 331.4 + (0.6 * Temperatur);
}

function LaufzeitBerechnen() {    
    let form = document.querySelector('#LaufzeitForm');
    let resultField = document.querySelector('#LaufzeitErgebnis');

    let inputMeter = form.elements["LaufzeitInputMeter"].value;
    let inputTemperatur = form.elements["LaufzeitInputTemperatur"].value;
    let inputHaas = form.elements["LaufzeitInputHaasEffekt"].checked;
    let inputLaufzeitRunden = form.elements["LaufzeitInputRunden"].checked;

    if(inputMeter == ""){
        inputMeter = 0;
    }
    if(inputTemperatur == ""){
        inputTemperatur = 20;
    }

    let schallgeschwindigkeit = Schallgeschwindigkeit(inputTemperatur);
    let ergebnis = parseFloat(((inputMeter/schallgeschwindigkeit)*1000).toFixed(2));



    if(inputHaas == true){
       ergebnis =  ergebnis + 20.00;
    }

    if(inputLaufzeitRunden == true){
        ergebnis = Math.round(ergebnis);
    }else {
        ergebnis = parseFloat(ergebnis.toFixed(2));
    }

    resultField.textContent = ergebnis + " ms";
}

function SchallwegBerechnen() { 
    let form = document.querySelector('#SchallwegForm');
    let resultField = document.querySelector('#SchallwegErgebnis');

    let inputLaufzeit = form.elements["SchallwegInputLaufzeit"].value;
    let inputTemperatur = form.elements["SchallwegInputTemperatur"].value;
    let inputSchallwegRunden = form.elements["SchallwegInputRunden"].checked;

    if(inputLaufzeit == ""){
        inputLaufzeit = 0;
    }
    if(inputTemperatur == ""){
        inputTemperatur = 20;
    }

    let schallgeschwindigkeit = Schallgeschwindigkeit(inputTemperatur);
    let ergebnis = parseFloat(((inputLaufzeit/1000)*schallgeschwindigkeit).toFixed(2));
    
    if(inputSchallwegRunden == true){
        ergebnis = Math.round(ergebnis);
    }
    resultField.textContent = ergebnis + " m";
}

function CSABerechnen(){
    let form = document.querySelector('#CSAForm');
    let resultField = document.querySelector('#CSAErgebnis');

    let inputMeter = form.elements["CSAInputMeter"].value;
    let inputTemperatur = form.elements["CSAInputTemperatur"].value;

    if(inputMeter == ""){
        inputLaufzeit = 0;
    }
    if(inputTemperatur == ""){
        inputTemperatur = 20;
    }

    let schallgeschwindigkeit = Schallgeschwindigkeit(inputTemperatur);
    let ergebnis = parseFloat((((inputMeter/schallgeschwindigkeit)*1000)*2).toFixed(2));

    resultField.textContent = ergebnis + " ms";
}

function EndfireBerechnen(){
    let form = document.querySelector('#EndfireForm');
    let resultField = document.querySelector('#EndfireErgebnis');

    let inputMeter = form.elements["EndfireInputMeter"].value;
    let inputTemperatur = form.elements["EndfireInputTemperatur"].value;

    if(inputMeter == ""){
        inputLaufzeit = 0;
    }
    if(inputTemperatur == ""){
        inputTemperatur = 20;
    }

    let schallgeschwindigkeit = Schallgeschwindigkeit(inputTemperatur);
    let ergebnis = parseFloat(((inputMeter/schallgeschwindigkeit)*1000).toFixed(2));

    resultField.textContent = ergebnis + " ms";
}

