const placeholder = document.querySelector('.placeholder')
const editableInput = document.querySelector('.editable')

editableInput.addEventListener('click', () => {
    placeholder.style.color = "#98a5b1"
})

editableInput.onblur = () => {
    placeholder.style.color = "#333"
}

editableInput.onkeypress = (e) => {
    placeholder.style.display = 'none'
    inputValidate(e.target.innerText)
}

editableInput.onkeyup = (e) => {
    inputValidate(e.target.innerText)
}

const inputValidate = (tweet) => {
    console.log(tweet.length)
    const tweetLength = tweet.length
    if (tweetLength <= 0) {
        placeholder.style.display = 'block'
    }
}