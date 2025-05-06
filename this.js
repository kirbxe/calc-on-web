// const calculator = {
//     read() {
//         this.a = Number(prompt('Введите первое число:', 0))
//         this.b = Number(prompt('Введите второе число:', 0)) 
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }


// }
// calculator.read()
// console.log(calculator)
// console.log('Сумма:' + calculator.sum())
// console.log('Приозвидение:' + calculator.mul())


// const ladder = {
//     step: 0,
//     up(){
//         this.step++;
//         return this
//     },
//     down(){
//     this.step--
//     return this

//     },
//     showStep() {

//         console.log('Текущая ступенька: ' + this.step)
//         return this

//     }

// }

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.showStep()
// function calculate(data1, data2, sign){
//     let result;
// switch (sign){
//  case "+": 
//         result = data1 + data2
//    break;
// case "-":
//     result =  data1 - data2
//     break;
// case "*":
//     result = data1 * data2
//     break;
// case "/":
//     if(data2 == 0){
//         console.error('Ошибка деление на ноль!')
//     }
//     result =  data1 / data2;
//     break;
// default:
//     return console.log("Неверный символ действия!")
// }

// const resultMessage = `${data1} ${sign} ${data2} = ${result}`

// alert(resultMessage)
// }

// calculate(4, 5, "+")
// calculate(10,42, "-")
// calculate(100,10,"/")




