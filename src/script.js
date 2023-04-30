let data = new Date()

let diaSemanaExtenso = data.getDay()
let dia =  data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let horas = data.getHours()
let minutos = data.getMinutes()

function zeroAEsquerda(params) {
  return params >= 10 ? params : `0${params}`
}

function getMonthText (param1){
  let monthText = ''
  switch(param1){
    case 0:
    monthText = "Janeiro";
    break;
    case 1:
    monthText = "Fevereiro";
    break;
    case 2:
    monthText = "Março";
    break;
    case 3:
    monthText = "Abril";
    break;
    case 4:
    monthText = "Maio";
    break;

    default:
    monthText = "Unxpected";
    break;
  }
  return monthText
}

function getDayWeekText (param1){
  let dayWeekText = ''
  switch(param1){
    case 0:
    dayWeekText = "Domingo";
    break;
    case 1:
    dayWeekText = "Segunda-Feira";
    break;
    case 2:
    dayWeekText = "Terça-Feira";
    break;
    case 3:
    dayWeekText = "Quarta-Feira";
    break;
    case 4:
    dayWeekText = "Quinta-Feira";
    break;
    case 5:
    dayWeekText = "Sexta-Feira";
    break;
    case 6:
    dayWeekText = "Sabado";
    break;

    default:
    dayWeekText = "Unxpected";
    break;
  }
  return dayWeekText
}
let dataCompleta = `${getDayWeekText(diaSemanaExtenso)}, ${zeroAEsquerda(dia)} de ${getMonthText(mes)} de ${ano} às ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}`
// Update header text
document.querySelector('#header').innerHTML = dataCompleta

//==================================================================================

let dataCompletaMenor = Intl.DateTimeFormat('pt-BR', {dateStyle:'full', timeStyle:'short'}).format(data)
console.log(dataCompletaMenor)
document.querySelector('#header2').innerHTML = dataCompletaMenor