function hexColors() {
for (let i = 0; i < 5; i++) {
    let hexColor = '#';
    let hexChars = '0123456789ABCDEF';

    for (let j = 0; j < 6; j++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    }

    console.log(hexColor);
}
}


