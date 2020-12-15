var input = document.querySelector("#txtarea");
var btntranslate = document.querySelector("#btn");
var output1 = document.querySelector("#OutputTxt");
var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

btntranslate.addEventListener("click", clickevent);

function getTranslationurl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorhandler(error) {
    console.log("Error Occured", error);
    alert("Sever is down.It will take some time");
}

function clickevent() {
    var inputtxt = input.value;
    fetch(getTranslationurl(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated;
            output1.innerText = translated;
        })
        .catch(errorhandler);

};