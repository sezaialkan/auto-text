const autoText = document.getElementById('autoText')
let inner = autoText.innerText
let index = 1

let autoTextWrite = () => {

    autoText.innerText = inner.slice(0, index)
    index++

    if(index > inner.length)
        index = 1

    setTimeout(autoTextWrite, 150)
}

autoTextWrite()