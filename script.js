let btn = document.getElementById('btn')
let quote = document.getElementById('quote')
let author = document.getElementById('author')
let quotes = '';

fetch('data.json').then((res) => res.json()).then((res) => { quotes = res })

window.onload = function () {
    btn.addEventListener('click', () => {
        let h3 = document.querySelector('h3')
        let h3s = document.querySelectorAll('h3')
        h3.style.display = 'none' ? h3s.forEach((element) => {
            element.style.display = 'block';
        }) : h3.style.display = 'none';
        let random = Math.floor(Math.random() * quotes.length)
        quote.textContent = quotes[random].quote
        author.textContent = `${quotes[random].character} - ${quotes[random].anime}`
    })
}
