const result = document.querySelector('.result')
const heading = document.querySelector('.content__heading')

if(document.querySelector('body').classList.contains('home')){

    document.querySelector('main').innerHTML = "<h1>&#8592 Please select mode</h1>"

} else if(document.querySelector('body').classList.contains('e164')) {
    heading.innerHTML = 'Convert Numbers to E164 Format'
    document.querySelector('ul').children[0].classList.add('current_format')
}

const change = () => {
    let changed = ''
    const data = document.getElementById('numbers').value.split('\n')

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