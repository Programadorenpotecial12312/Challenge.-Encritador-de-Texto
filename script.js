function encryptText() {
    let input = document.getElementById("inputText").value;
    let output = "";
    let shift = 3; // Número de posiciones a desplazar

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        
        // Solo encriptar letras
        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            output += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            output += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            output += input[i]; // No encriptar caracteres especiales
        }
    }

    document.getElementById("outputText").value = output;
}

function decryptText() {
    let input = document.getElementById("outputText").value;
    let output = "";
    let shift = 3; // Número de posiciones a desplazar

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        
        // Solo desencriptar letras
        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            output += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            output += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            output += input[i]; // No desencriptar caracteres especiales
        }
    }

    document.getElementById("inputText").value = output;
}
