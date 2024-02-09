const generatePassword = (config) => {

    // Diccionario en el que guardaremos todos los carácteres necesarios
    const characters = {
        numbers: '0123456789',
        symbols: '!@#$%^&*()_-+={[}]|;:<,>.?/',
        mayus: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numChars: 'abcdefghijklmnopqrstuvwxyz'
    };

    // Creamos dos variables para almacenar los carácteres permitidos y la contraseña final.
    let allowedCharacters = ''
    let password = ''

    // Bucle para recorrer si las claves del localStorage son 'true', si lo son, los carácteres se sumaran a la variable establecida.
    for(let prop of Object.keys(config)){
        if(config[prop] === 'true'){
            allowedCharacters += characters[prop]
        }
    }

    // Suma por defecto las letras minúsculas.
    allowedCharacters += characters.numChars

    // Bucle en el que se generará la contraseña de manera aleatoria.
    for(let i = 0; i < config.numChars; i++){
        password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
    }

    return password
}

export default generatePassword