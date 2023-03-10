const display = document.getElementById("display")
// console.log(display)

function modDisplay(str){
    if(display.innerText.length < 30)
        display.innerText += str
}
function clearDisplay(){
    display.innerText = ""
}
// console.log(math.evaluate('2+2'))
const elem = document.getElementsByClassName("_1")
for(i=0; i<elem.length; ++i){
    // console.log(elem[i].innerHTML)
    const str = elem[i].innerText
    if(str !== '=' && str !== 'C'){
        elem[i].addEventListener("click", function(){
            modDisplay(str)
        })
    }
    else{
        elem[i].addEventListener("click", function(){
            const expr = display.innerText
            console.log(expr)
            clearDisplay()
            if(str === '='){
                try{
                    if(math.evaluate(expr))
                    modDisplay(math.evaluate(expr));
                }
                catch(err){
                    console.log("tf you doing?", err);
                    modDisplay("Syntax Error")
                }
    
            }
        })
        
    }
}