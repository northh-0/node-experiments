console.log("runtime")

function random(max) {
    return Math.floor(Math.random() * max);
}

const paraText = [
    "trash the ploy.",
    "it's safer here.",
    "carbon stars orbiting.",
    "byte by byte.",
    "please check console.",
    "don't mention it.",
    "it's code 200.",
    "indexes indice indefinitely.",
    "is that you?",
    "i missed you.",
    "three words only.",
    "error parsing haiku.",
    "migraines suck, right?",
    "make you hurt.",
    "louie duffle bag.",
    "distant horns shout.",
    "shh... don't talk!",
    "doctor breen again?",
    "come here often...?",
    "do something better.",
    "hit the encore.",
    "it's 2013 again.",
    "i'll never go.",
    "shrimps fry rice?",
    "i'm mel, IRL.",
    "karma's white tie.",
    "autumn every day.",
    "autumn's other days.",
    "it's bittersweet, really.",
    "i'm anew, again.",
    "posture, play, pretend.",
    "sprawling ballrooms close.",
    "i broke the rule.",
    "electrons, protons, neutrons.",
    "through the doors.",
    "i hate winter.",
    "i hate spring.",
    "i hate summer.",
    "you get it.",
    "you're still here.",
    "please click me!",
    "that sounds poetic.",
    "(*w*)/ - i'm also here!",
    "my punctuation curves.",
    "well, now what?",
    "insert witty text.",
    "been a while.",
    "no errors today?",
    "time to relax.",
    "stream some flacs.",
    "better than freezer.",
    "correct branch, hopefully.",
    "did node complain?",
    "no DNS issues.",
    "no Apache issues.",
    "no UFW issues.",
    "still network issues.",
    "sudo apt update.",
    "cron still going?",
    "disks all good?",
    "ddns down again?",
    "no xml here.",
    "not a moron.",
    "insert obscure reference.",
    "TS or ES6?",
    "developers (3x)",
    "please add details.",
    "remote add origin.",
    "404 not found",
    "i'm code 204.",
    "301 moved permanently",
    "received code 306.",
    "sorry, i'm 403.",
    "... code 429.",
    "... code 504.",
    "oh! sorry, 501.",
    "try the Zune.",
    "try the iPod.",
    "try us out.",
    "P.S: thank you."
]

const paraHTML = document.getElementById("cool_text");
var old_text = [];
function randomPara() {
    if (old_text.length == 8)
    {
        old_text.shift();
    }
    
    // Make sure we don't return one we've recently seen
    var new_text = paraText[random(paraText.length)];
    console.log(new_text);
    for (var compare of old_text) {
        if (new_text == compare) {
            console.log("streamer.js - retrying");
            randomPara();
            return 0;
        }
    }
    paraHTML.innerText = new_text;
    old_text.push(paraHTML.innerText);
    // console.table(old_text);
    return 0;
}

randomPara();