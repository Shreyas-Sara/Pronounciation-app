function speak(){
    value1 = document.getElementById("text").value

    var spk = window.speechSynthesis;

    var utter = new SpeechSynthesisUtterance(value1)

    spk.speak(utter);
}