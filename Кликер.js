let click = document.getElementById('butt')
let clickPassiveReceive = document.getElementById('butt1')
let clickUp = document.getElementById('butt2')
let clickPassiveUp = document.getElementById('butt3')
let clickAllUp = document.getElementById('butt4')

money = document.getElementById('money')
let count = 0
let countMoneyByClick = 1
let countMoneyPassive = 1
let levelUpByClick = 10
let levelUpPassive = 30



let ClickByMoney = function(){
    count = count + countMoneyByClick
    money.innerHTML = 'У вас есть' + " " + count + " " + '$'
}


let clickPassive = function(){
setInterval( function(){
    count = count + countMoneyPassive
    console.log(count)
    money.innerHTML = 'У вас есть' + " " + count + " " + '$'

},1000)
}



click.onclick = function(){
    ClickByMoney()
}

clickPassiveReceive.onclick = function(){
    if (count >= levelUpPassive){
    alert('Улучшение сделано')
    count = count - levelUpPassive
    clickPassiveReceive.style.display = 'none'
        clickPassive()
        money.innerHTML = 'У вас есть' + " " + count + " " + '$'
    }else alert('Вам не хватает')
    }

clickUp.onclick = function(){
    if (count >= (levelUpByClick)){
        alert("Улучшение сделано")
    count = count - levelUpByClick
     levelUpByClick = levelUpByClick + 10
     countMoneyByClick++
     console.log(count)
     console.log(levelUpByClick)
     money.innerHTML = 'У вас есть' + " " + count + " " + '$'
     butt2.innerHTML = 'Улучшение клика' + " " + "Цена" + " " +levelUpByClick // И это тоже как-то надо изменить нихуя не понимаю)0)
    }
    else alert('Вам не хватает')//Как сделать так что-бы в алерт можно было написать расчет сколько не хватает
}

clickPassiveUp.onclick = function(){
    if (count >= (levelUpPassive)){
        alert('Улучшение сделанно Пассив')
        count = count - levelUpPassive
        levelUpPassive = levelUpPassive * 2
        countMoneyPassive++
        console.log(count)
        console.log(levelUpPassive)
        money.innerHTML = 'У вас есть' + " " + count + " " + '$' // Можно как-то писать это сразу не дублируя везде?
        clickPassiveUp.style.backgroundColor = 'red' // Как сделать так что-бы когда хватало загоралось зеленым?
    }else alert('Вам не хватает на пассив')
}
clickAllUp.onclick = function(){
    if (count >= 100){
        count = count - 100
    countMoneyByClick = countMoneyByClick * 2
    countMoneyPassive = countMoneyPassive * 2
    console.log(countMoneyByClick)
    console.log(countMoneyPassive)
    }
}
