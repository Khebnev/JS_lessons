function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", done);

function done() {
            console.log("Я прошёл 3-ий урок");
}
