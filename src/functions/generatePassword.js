const generatePassword = (config) => {

    const characters = {
        numbers: '0123456789',
        symbols: '!@#$%^&*()_-+={[}]|;:<,>.?/',
        mayus: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numChars: 'abcdefghijklmnopqrstuvwxyz'
    };

    let allowedCharacters = ''
    let password = ''

    for(let prop of Object.keys(config)){
        if(config[prop] === 'true'){
            allowedCharacters += characters[prop]
        }
    }

    allowedCharacters += characters.numChars

    for(let i = 0; i < config.numChars; i++){
        password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
    }

    return password
}

export default generatePassword