let words =[
    "Howe",
    "Ahmed",
    "Tapol",
    "combuter",
    
]
let word2 =[
"laptop",
    "Keyword",
    "pan",
    "coffes",
    "batrey",
    "keybord",
    "resst",
    "phone",
    "frindes",
    "coledge",
    "hassan",
    "ashraf"
]
let word3=[

    "fooer",
    "door",
    "fares",
    "file",
    "Assles",
    "math",
    "loop",
    "go to",
    "sleep",
    "came",
    "manye",
    "onclick",
    "Hover",
    "shar",
    "updata",
    "restart"
]

//setting levels
let lvls = {
    "Easy":5,
    "Normal":10,
    "Hard":2
}
// default 
let s = document.querySelector(".radio")
let time = document.querySelector(".time span")
let seconds = document.querySelector(".massage .seconds")
let massage = document.querySelector(".massage .lvl")
let radio_name = document.querySelector(".radio_name")

let button = document.querySelector(".start")
let the_word = document.querySelector(".the_word")
let upcoming_words = document.querySelector(".upcoming_words")

let input = document.querySelector(".input")
let scoreGot = document.querySelector(".score .got")
let scoreTotal = document.querySelector(".score .total")
let finish = document.querySelector(".finish")


s.onclick =function(){
    radio_name.style.display= "none";
let defaultlevelName ="Easy";
let defaultlevelSeconds = lvls[defaultlevelName ];
//massage
    massage.innerHTML=defaultlevelName
   //seconds 
  seconds.innerHTML=defaultlevelSeconds 
  //time 
  time.innerHTML=defaultlevelSeconds
scoreTotal.innerHTML= word2.length

input.onpaste =function(){
    return false
}

button.onclick=function(){
    this.remove()
   input.focus()
   // Generate word function
   generateWord()
}

function generateWord(){
//get Random word from Array
let randomWord =word2 [Math.floor(Math.random() * word2.length)]
// get words index
let wordsIndecs = word2.indexOf( randomWord)
//Remove wordform Arrey
word2.splice(wordsIndecs ,1)
//show the Randome word 
the_word.innerHTML= randomWord
//Empty upcoming_words
upcoming_words.innerHTML=''
//comen word
for(let i = 0 ; i <word2.length ; i++){
//create div Element
let div = document.createElement("div")
let txt = document.createTextNode(word2[i])
div.appendChild(txt)
upcoming_words.appendChild(div)

}
//start play function
startplay ()
}

function startplay (){
    
    time.innerHTML = defaultlevelSeconds
let start = setInterval(() => {
    time.innerHTML--
    if(time.innerHTML === "0"){
        clearInterval(start)
// commpar words
        if(the_word.innerHTML.toLowerCase() ===  input.value.toLowerCase() ) {
            input.value='';
            //increas score
            scoreGot.innerHTML ++
           if(word2.length > 0){
            generateWord()
           }else{
            let spans = document.createElement("span")
            spans.className ='good';
            let gaam_over = document.createTextNode("good game")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
            upcoming_words.remove()
           }

        }else{
            let spans = document.createElement("span")
            spans.className ='bad';
            let gaam_over = document.createTextNode("Game over")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
        }
    }
}, 1000);
}
}
let o = document.querySelector(".radio2")
o.onclick =function(){
    radio_name.style.display= "none";
let defaultlevelName ="Normal";
let defaultlevelSeconds = lvls[defaultlevelName ];
//massage
    massage.innerHTML=defaultlevelName
   //seconds 
  seconds.innerHTML=defaultlevelSeconds 
  //time 
  time.innerHTML=defaultlevelSeconds
scoreTotal.innerHTML= word3.length

input.onpaste =function(){
    return false
}

button.onclick=function(){
    this.remove()
   input.focus()
   // Generate word function
   generateWord()
}

function generateWord(){
//get Random word from Array
let randomWord = word3[Math.floor(Math.random() * word3.length)]
// get words index
let wordsIndecs = word3.indexOf( randomWord)
//Remove wordform Arrey
word3.splice(wordsIndecs ,1)
//show the Randome word 
the_word.innerHTML= randomWord
//Empty upcoming_words
upcoming_words.innerHTML=''
//comen word
for(let i = 0 ; i < word3.length ; i++){
//create div Element
let div = document.createElement("div")
let txt = document.createTextNode(word3[i])
div.appendChild(txt)
upcoming_words.appendChild(div)

}
//start play function
startplay ()
}

function startplay (){
    
    time.innerHTML = defaultlevelSeconds
let start = setInterval(() => {
    time.innerHTML--
    if(time.innerHTML === "0"){
        clearInterval(start)
// commpar words
        if(the_word.innerHTML.toLowerCase() ===  input.value.toLowerCase() ) {
            input.value='';
            //increas score
            scoreGot.innerHTML ++
           if(word3.length > 0){
            generateWord()
           }else{
            let spans = document.createElement("span")
            spans.className ='good';
            let gaam_over = document.createTextNode("good game")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
            upcoming_words.remove()
           }

        }else{
            let spans = document.createElement("span")
            spans.className ='bad';
            let gaam_over = document.createTextNode("Game over")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
        }
    }
}, 1000);
}
}

let one = document.querySelector(".radio3")

one.onclick =function(){
    radio_name.style.display= "none";
let defaultlevelName ="Hard";
let defaultlevelSeconds = lvls[defaultlevelName ];
//massage
    massage.innerHTML=defaultlevelName
   //seconds 
  seconds.innerHTML=defaultlevelSeconds 
  //time 
  time.innerHTML=defaultlevelSeconds
scoreTotal.innerHTML= words.length

input.onpaste =function(){
    return false
}

button.onclick=function(){
    this.remove()
   input.focus()
   // Generate word function
   generateWord()
}

function generateWord(){
//get Random word from Array
let randomWord = words[Math.floor(Math.random() * words.length)]
// get words index
let wordsIndecs = words.indexOf( randomWord)
//Remove wordform Arrey
words.splice(wordsIndecs ,1)
//show the Randome word 
the_word.innerHTML= randomWord
//Empty upcoming_words
upcoming_words.innerHTML=''
//comen word
for(let i = 0 ; i < words.length ; i++){
//create div Element
let div = document.createElement("div")
let txt = document.createTextNode(words[i])
div.appendChild(txt)
upcoming_words.appendChild(div)

}
//start play function
startplay ()
}

function startplay (){
    
    time.innerHTML = defaultlevelSeconds
let start = setInterval(() => {
    time.innerHTML--
    if(time.innerHTML === "0"){
        clearInterval(start)
// commpar words
        if(the_word.innerHTML.toLowerCase() ===  input.value.toLowerCase() ) {
            input.value='';
            //increas score
            scoreGot.innerHTML ++
           if(words.length > 0){
            generateWord()
           }else{
            let spans = document.createElement("span")
            spans.className ='good';
            let gaam_over = document.createTextNode("good game")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
            upcoming_words.remove()
           }

        }else{
            let spans = document.createElement("span")
            spans.className ='bad';
            let gaam_over = document.createTextNode("Game over")
            spans.appendChild(gaam_over)
            finish.appendChild(spans)
        }
    }
}, 1000);
}
}
console.log(input.value.toLowerCase())
