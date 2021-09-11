function showResults(res) {
    const pass = document.getElementById("div1")
    const adc = document.createElement("p")
    adc.innerText = res
    pass.appendChild(adc)
}


function kata1() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 1"
    div.appendChild(h2)
    
    let firstAttempt = "";

    for (let i = 1; i <= 25; i++) {
        firstAttempt += i + " ";
    }
    return firstAttempt;

}

showResults(kata1())

function kata2() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 2"
    div.appendChild(h2)

    let secondAttempt = "";

    for (let i = 25; i > 0; i--) {
        secondAttempt += i + " ";
    }
    return secondAttempt;
}

showResults(kata2())

function kata3() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 3"
    div.appendChild(h2)

    let thirdAttempt = "";

    for (let i = -1; i >= -25; i--) {
        thirdAttempt += i + " ";
    }
    return thirdAttempt;
}

showResults(kata3())

function kata4() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 4"
    div.appendChild(h2)

    let fourthAttempt = "";

    for (let i = -25; i <= -1; i++) {
        fourthAttempt += i + " ";
    }
    return fourthAttempt;
}

showResults(kata4())

function kata5() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 5"
    div.appendChild(h2)

    let fifthAttempt = "";

    for (let i = 3; i <= 100; i += 3) {
        fifthAttempt += i + " ";
    }
    return fifthAttempt;
}

showResults(kata5())

function kata6() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 6"
    div.appendChild(h2)

    let sixthAttempt = "";

    for (let i = 100; i >= 3; i -= 3) {
        sixthAttempt += i + " ";
    }
    return sixthAttempt;
}

showResults(kata6())

function kata7() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 7"
    div.appendChild(h2)

    let seventhAttempt = "";

    for (let i = 7; i <= 100; i += 7) {
        seventhAttempt += i + " ";
    }
    return seventhAttempt;
}

showResults(kata7())

function kata8() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 8"
    div.appendChild(h2)

    let eightAttempt = "";

    for (let i = 100; i >= 1; i--) {
        let resto3 = (i % 3)
        let resto7 = (i % 7)
        if ((resto3 == 0) || (resto7 == 0)) {
            eightAttempt += i + " ";
        }
    }
    return eightAttempt;
}

showResults(kata8())

function kata9() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 9"
    div.appendChild(h2)

    let ninthAttempt = "";

    for (let i = 5; i <= 100; i += 5) {
        let resto2 = (i % 2)
        let resto5 = (i % 5)
        if ((resto5 == 0) && (resto2 == 1)) {
            ninthAttempt += i + " ";
        }
    }
    return ninthAttempt;
}

showResults(kata9())

function kata10() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 10"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    return sampleArray
}

showResults(kata10())

function kata11() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 11"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let par = "";

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            par += sampleArray[i] + " "
        }
    }
    return par
}

showResults(kata11())

function kata12() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 12"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let impar = ""

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 1) {
            impar += sampleArray[i] + " "
        }
    }
    return impar
}

showResults(kata12())

function kata13() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 13"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let divEight = ""

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            divEight += sampleArray[i] + " "
        }
    }
    return divEight
}

showResults(kata13())

function kata14() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 14"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let square = ""

    for (let i = 0; i < sampleArray.length; i++) {
        square += sampleArray[i] * sampleArray[i] + " ";

    }
    return square
}

showResults(kata14())

function kata15() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 15"
    div.appendChild(h2)

    let sum = 0

    for (let i = 1; i <= 20; i++) {
        sum = sum + i;

    }
    return sum
}

showResults(kata15())

function kata16() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 16"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let sumArr = 0

    for (let i = 0; i < sampleArray.length; i++) {
        sumArr += sampleArray[i];

    }
    return sumArr
}

showResults(kata16())

function kata17() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 17"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    i = 0
    let menor = sampleArray[i]

    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] < menor) {
            menor = sampleArray[i];
        }

    }
    return menor;
}

showResults(kata17())

function kata18() {
    const div = document.getElementById('div1')
    const h2 = document.createElement('h2')
    h2.innerText = "Kata 18"
    div.appendChild(h2)

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let maior = 0

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maior) {
            maior = sampleArray[i];
        }

    }
    return maior;
}

showResults(kata18())

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
