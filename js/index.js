const faqBoxes = document.querySelectorAll('.faq-box')

const reset = () => {
    faqBoxes.forEach(box => box.classList.remove('active'))
}

faqBoxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if(!box.classList.contains('active')) reset()
        box.classList.toggle('active')
    })
})