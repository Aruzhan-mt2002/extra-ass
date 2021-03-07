const message = document.getElementById("message")
var maxi=1;
let split = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;


function myFunction() {
    message = prompt("Please, write no less than 20 words", "smth x 20");
    if (message >= 20 ) {
        var split = message.split(" ");
        console.log(split);
    }
}

for (var i=0; i<split.length; i++)
{
    for (var j=i; j<split.length; j++){
        if (split[i] == split[j])
        numberOfWordsInTheMessage++;
        if (maxi<numberOfWordsInTheMessage){
            theMostFrequentWord = split[i];
        }
    }
}
console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)


const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

var choose = randomPhrasesAndPictures[Math.floor(Math.random()*3)];
alert(choose);