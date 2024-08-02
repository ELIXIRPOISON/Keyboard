let history=[];
document.addEventListener('keydown', function(event) {
    const keyDisplay = document.getElementById('key');
    const codeDisplay = document.getElementById('code');
    const historyDisplay = document.getElementById('historyList');

    keyDisplay.textContent = 'You Pressed '+event.key;
    codeDisplay.textContent = "Key Code "+event.keyCode;
    
    history.unshift(`${event.key} (${event.keyCode})`);
    if (history.length > 20){
        history.pop();
    }
    historyDisplay.textContent = history.join(',');
});