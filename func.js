const input = document.getElementById("input");
const buttons = document.querySelectorAll(".buttons button");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try{
                string = calculate(string);
                input.value = string;
            }
            catch(err){
                input.value = "Syntax ERROR";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            input.value = '';
        }
        else if(e.target.innerHTML == 'DEL'){
            string = input.value.slice(0,-1);
            input.value = string;
        }
        else{

            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
function calculate(expression) {
    const cleanExp = expression.replace(/[^-\d/*%+.]/g, '');
    const calculateFunction = new Function('return ' + cleanExp);
    return calculateFunction();
}