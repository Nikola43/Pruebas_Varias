var str = ['0','x'];

function initializeKey() {
    for (let i = 0; i < 64; i++) {
        str.push('0')
    }
}

function printKey(key) {
    for (let i = 0; i < key.length; i++) {
        process.stdout.write(key[i]);
    }
}

initializeKey();
printKey(str);

