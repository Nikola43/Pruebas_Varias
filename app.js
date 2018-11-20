var str = [];

function initializeKey() {
    for (let i = 0; i < 64; i++) {
        str.push(0)
    }
}

function printPrivateKey(key) {
    for (let i = 0; i < key.length; i++) {
        process.stdout.write(key[i].toString());
    }
    console.log();
}

initializeKey();
printPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);
incrementPrivateKey(str);


function incrementPrivateKey(privateKey) {
    var keyLength = privateKey.length;

    if (privateKey[keyLength - 1] !== 'F'){


        privateKey[keyLength - 1]++;

        switch (privateKey[keyLength - 1]) {
            case 10  : privateKey[keyLength - 1] = 'A'; break;
            case 'A' : privateKey[keyLength - 1] = 'B'; break;
            case 'B' : privateKey[keyLength - 1] = 'C'; break;
            case 'C' : privateKey[keyLength - 1] = 'D'; break;
            case 'D' : privateKey[keyLength - 1] = 'E'; break;
            case 'E' : privateKey[keyLength - 1] = 'F'; break;
        }
        printPrivateKey(privateKey);
    }
}