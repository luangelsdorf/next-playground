export function animate(element) {
    element.style.backgroundColor = 'rgba(255, 0, 0, 1)'
    setTimeout(() => {
        element.style.transition = 'all 500ms ease'
        element.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    }, 50)
    element.style.transition = null
}

export async function fetchWords() {
    const dic = await fetch('http://localhost:3000/etc/pt-br.dic')
    const data =  await dic.text()
    return new Promise(resolve => {
        resolve(data)
    })
}

export function convertToArray(responseText) {
    const plainText = responseText.replaceAll("\r\n", ";")
    return plainText.split(";");
}

export function filterArray(array) {
    return array.filter(isHexadecimal)
}

export function isHexadecimal(word) {
    let isHex
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== 'a' &&
            word[i] !== 'b' &&
            word[i] !== 'c' &&
            word[i] !== 'd' &&
            word[i] !== 'e' &&
            word[i] !== 'f') {
            isHex =  false
            break
        }
        isHex = true
    }
    return isHex
}

export function setCor(color, container) {
    let hexColor = '#' + color
    container.style.backgroundColor = hexColor
    document.querySelector('code').innerText = hexColor
    document.querySelector('code').style.color = hexColor
}

export function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

export function validateForm(input, element, container, content) {
    let isHex = isHexadecimal(input)
    let hasSixChars = input.length === 6;
    let isValidWord = content.includes(input)

    try {
        if (!isHex) throw 'Entre com uma palavra que tenha só as letras "a", "b", "c", "d", "e" ou "f"!'
        if (!hasSixChars) throw 'Entre com uma palavra que contenha 6 letras!'
        if (!isValidWord) throw 'Entre com uma palavra que exista!'
        element.innerHTML = ''
        element.style.backgroundColor = null
        setCor(input, container)
    } catch (error) {
        animate(element)
        element.innerHTML = `<div><span class="material-icons">error</span><small>${error}</small></div>`
    }
}