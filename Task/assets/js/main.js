const clicked = Array.from(document.querySelectorAll('li'))
const li1 = document.getElementsByTagName('li')[0]
const li2 = document.getElementsByTagName('li')[1]
const li3 = document.getElementsByTagName('li')[2]
const li4 = document.getElementsByTagName('li')[3]
const li5 = document.getElementsByTagName('li')[4]
clicked.forEach((li) => {
    li.onclick = () => {
        li1.classList.remove('green')
        li2.classList.remove('green')
        li3.classList.remove('green')
        li4.classList.remove('green')
        li5.classList.remove('green')
        li.classList.add('green')
    }
})


window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clicked.forEach((li) => {
            li.onclick = () => {
                if (li.className === '') {
                    li.classList.add('green')
                } else(
                    li.classList.remove('green')
                )
            }
        })
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        clicked.forEach((li) => {
            li.onclick = () => {
                li1.classList.remove('green')
                li2.classList.remove('green')
                li3.classList.remove('green')
                li4.classList.remove('green')
                li5.classList.remove('green')
                li.classList.add('green')
            }
        })
    }
})