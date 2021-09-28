var inputText = document.querySelector("#input-text");
var button = document.querySelector("#translate-button");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/yoda.json";

function clickListner() {
    if (inputText.value.trim() === "") {
        outputText.innerText = "Please enter some text.";
    } else {
        var updatedUrl = url + "?text=" + inputText.value;
        fetch(updatedUrl)
            .then((data) => data.json())
            .then((json) => {
                if (json.error?.code == 429) {
                    outputText.innerText =
                        "You can translate only 5 times in 1 hour, please try after 1 hour";
                } else {
                    outputText.innerText = json.contents.translated;
                }
            })
            .catch(
                (error) =>
                    (outputText.innerText =
                        "Some error has occured, please try again later")
            );
    }
}

button.addEventListener("click", clickListner);
