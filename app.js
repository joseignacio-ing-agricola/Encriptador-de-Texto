document.getElementById('encrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-button').addEventListener('click', function() {
    var outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    
    var copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copiado!';
    setTimeout(function() {
        copyButton.textContent = 'Copiar';
    }, 2000);
});

function encryptText(text) {
    // Simple encryption logic Caesar cipher 
    let shift = 3;
    let encryptedText = text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
    return encryptedText;
}

function decryptText(text) {
    // Simple decryption logic Caesar cipher 
    let shift = 3;
    let decryptedText = text.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        } else {
            return char;
        }
    }).join('');
    return decryptedText;
    }


