let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        switch(buttonText){
            case 'X':
                buttonText='*';
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case '=':
                try{
                    screen.value = eval(screenValue);
                }   catch{
                    screen.value = "Error";
                }
                break;
            case 'C':
                screenValue = "";
                screen.value = screenValue;
                break;
            default:
                screenValue += buttonText;
                screen.value = screenValue;        
        }
        

    })
}