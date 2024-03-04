const img = document.querySelector('img')
const playerInput = document.querySelector('.playerInput')
const submitBtn = document.querySelector('.submitBtn')
const guessWord = document.querySelector('.guessWord')
const missLetters = document.querySelector('.missLetters')

const words = [
    'эпоха',
    'поезд',
    'нож',
    'плюс',
    'сердце',
    'любовь',
    'кулак',
    'пицца',
    
]

const man = [
    './src/Hangman-0.png',
    './src/Hangman-1.png',
    './src/Hangman-2.png',
    './src/Hangman-3.png',
    './src/Hangman-4.png',
    './src/Hangman-5.png',
    './src/Hangman-6.png',
]

let playWord = words[Math.floor(words.length * Math.random())].split('')
let shadow = []

for (let i = 0; i < playWord.length; i++) {
    shadow.push('*')
}

console.log(...shadow)

guessWord.innerHTML = shadow

console.log(playWord)
let sum = 0

submitBtn.addEventListener('click', () =>{
    if (playWord.includes(playerInput.value)) {
        const index = playWord.indexOf(playerInput.value)
        shadow[index] = playerInput.value
        console.log(shadow)
        guessWord.innerHTML = shadow
        playerInput.value = ''
        if (!shadow.includes('*')) {
            alert('вы выиграли')
        }
    }else if(playerInput.value == ''){
        alert('напиши букву')
    }
    else{
        sum += 1
        missLetters.innerHTML += playerInput.value
        man[sum]
        img.src = man[sum]

        if (sum >= man.length) {
            alert('вы проиграли')
            window.location.reload()
        }

        console.log(man.length)
    }
})

img.src = man[0]