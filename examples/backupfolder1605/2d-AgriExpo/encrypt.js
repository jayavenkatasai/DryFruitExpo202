function decrypt(x){
    return window.atob(x)
}

function encrypt(x){
    return window.btoa(x)
}

// Assuming encrypt function is defined elsewhere and converts to lowercase
function encryptWithCasePreservation(input) {
    // Convert input to a format that preserves case, e.g., base64
    var encodedInput = btoa(input);
    console.log(encodedInput)
    // Encrypt the encoded input
    var encryptedInput = encrypt(encodedInput);
    console.log(encryptedInput)
    return encryptedInput;
}

// When decrypting, you'll need to reverse the process
function decryptWithCasePreservation(encryptedInput) {
    // Decrypt the input
    var decryptedInput = decrypt(encryptedInput);
    console.log(decryptedInput)
    // Decode the original case information
    var originalInput = atob(decryptedInput);
    console.log(originalInput)
    return originalInput;
}