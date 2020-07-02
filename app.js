const result = document.querySelector('.result')

const change = () => {
    let changed = ''
    const data = document.getElementById('numbers').value.split('\n')

    for (number of data) {
        if (number[0]=='0') {
            number = number.slice(1,number.length)
        }
        if (number.includes(" ")) {
            number = `${removeSpaces(number)}`
        }
        changed += `61${number}\n`
    }
    result.innerHTML = changed
}

const removeSpaces = (number) => {
    numberArray = number.split('')
    let result = ''

    console.log(numberArray)
    for (item of numberArray) {
        if(item != " ") {
            result+=item
        }
    }
    return `${result}`
}