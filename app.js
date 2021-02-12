const result = document.querySelector('.result')
const buttonEl = document.querySelector('.button')
const numbersEl = document.querySelector('#numbers')



const e164 = () => {
    let changed = ''
    let data = document.getElementById('numbers').value.split('\n')
    for (number of data) {
        if (number[0]=='0' || number[0]=='+') {
            number = number.slice(1,number.length)
        }

        if (number.includes(" ")) {
            number = `${removeSpaces(number)}`
        }

        if(number[0]=='6' && number[1]=='1')
        {
            changed += `${number}\n`
        } else {
            changed += `61${number}\n`
        }
    }
    result.innerHTML = changed
}

const nsn = () => {
    
    let changed = ''
    let data = document.getElementById('numbers').value.split('\n')
    for (number of data) {
        console.log('number', number)
        if(number[0]==='6' && number[1]==='1') {
            number = `0${number.slice(2)}`
            changed+=`${number}\n`
        }
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
    return result
}

const removeCommas = () => {
    let numbers = numbersEl.value;
    let newResult = '';
    let newArray = numbers.split(",")

    for (number of newArray) {
        newResult += `${number}\n`
    }

    result.innerHTML = newResult
}



buttonEl.addEventListener('click', removeCommas)