const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const loading = document.querySelector('.loading-container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})


let i = 1

setTimeout(() => {
    loading.style.opacity = `${i}`
    appearance(i)

    function appearance(i) {
        if (i > 0){
            setTimeout(() => {
                loading.style.opacity = `${i}`
                appearance(i - 0.1)
            }, 200)
        } else if (i < 0) {
            loading.style.display = 'none'
        }
    } 
}, 3000)
