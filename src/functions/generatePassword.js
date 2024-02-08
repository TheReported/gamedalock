const generatePassword = (config) => {

    const characters = {
        numbers:  '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        mayus:  'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        numChars:  'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    let allowedCharacters = ''
    let password = ''

    for(let prop of Object.keys(config)){
        if(localStorage[prop] === 'true'){
            allowedCharacters += characters[prop] + ' '
        }
    }

    allowedCharacters += characters.numChars

    allowedCharacters = allowedCharacters.split(' ');

    for(let i = 0; i < localStorage.numChars; i++){
        password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
    }

    return password
}

export default generatePassword