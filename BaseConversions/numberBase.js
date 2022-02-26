var db = window.document.querySelector("div#db")
var bd = window.document.querySelector("div#bd")
var dO = window.document.querySelector("div#do")
var od = window.document.querySelector("div#od")
var dh = window.document.querySelector("div#dh")

var hd = window.document.querySelector("div#hd")
var bo = window.document.querySelector("div#bo")
var ob = window.document.querySelector("div#ob")
var bh = window.document.querySelector("div#bh")
var hb = window.document.querySelector("div#hb")

let but = []

/* ================================== INTERACTION FUNCTIONS =================================== */

function clicked (bt) {
    but.push(bt)
    if (but.length == 2) {
        but[0].style.background = 'rgb(110, 173, 110)'
        but[0].style.color = 'black'
        but.shift()
    }
    bt.style.background = 'rgba(0, 0, 0, 0.450)'
    bt.style.color = 'white'
    answer(bt)   
} 

function enter (bt) {
    if (bt != but[0]) {
        bt.style.background = 'white'
        bt.style.color = 'rgba(0, 0, 0, 0.890)'   
    }    
}

function out (bt) {
    if (but.length == 0 || (but.length == 1 && bt != but[0])) {
        bt.style.background = 'rgb(110, 173, 110)'
        bt.style.color = 'black'   
    }    
}

let d = window.document.getElementById('div3')

function ShowUp (strInp, strButton) { // creates an input and a button       
    var inp = document.createElement('input')
    inp.setAttribute('id', 'i1')
    d.innerHTML = strInp    
    inputStyle(inp) // tentemos modifications  
    d.appendChild(inp)
    var button = document.createElement('button')
    button.setAttribute('onclick', strButton)
    button.innerHTML = 'Convert'
    buttonStyle(button) // modifications
    d.appendChild(button)   
}

let d1 = window.document.getElementById('div4')

function presentation (corresp, result, start, from, destiny) { // Shows the results
    d.appendChild(d1)    
    var p2 = document.createElement('p')
    var p3 = document.createElement('div')    
    p2.innerHTML = 'Therefore:'
    p3.innerHTML = `${start} <strong>${from}</strong> = ${result} <strong>${destiny}</strong>`    
    p3Style(p3) // modifications    
    d1.innerHTML = corresp + `<strong>${result}</strong>`  
    d1.appendChild(p2)
    d1.appendChild(p3)
}

/* ======================================= CONVERT FUNCTIONS ========================================= */

function convertDecBin () { // presentation - Decimal_Binary
    let n = window.document.getElementById("i1")
    let dec = Number(n.value)
    let bin = conversionDecBin(dec)
    presentation('Correspondent <strong>binary</strong> number: ', bin.join(''), dec, '(dec)', '(bin)')
}

function convertBinDec () { // presentation - Binary_Decimal
    let n = window.document.getElementById("i1")
    let bin = String(n.value)
    let dec = conversionBinDec(bin)
    presentation('Correspondent <strong>decimal</strong> number: ', dec, bin, '(bin)', '(dec)')
}

function convertDecOct () { // presentation - Decimal_Octal
    let n = window.document.getElementById("i1")
    let dec = Number(n.value)
    let oct = conversionDecOct(dec)
    presentation('Correspondent <strong>octal</strong> number: ', oct.join(''), dec, '(dec)', '(octal)')
}

function convertOctDec () { // presentation - Octal_Decimal
    let n = window.document.getElementById("i1")
    let oct = String(n.value)
    let dec = conversionOctDec(oct)
    presentation('Correspondent <strong>decimal</strong> number: ', dec, oct, '(octal)', '(dec)')
}

function convertDecHex () { // presentation - Decimal_Hexadecimal
    let n = window.document.getElementById("i1")
    let dec = Number(n.value)
    let hex = conversionDecHex(dec)
    presentation('Correspondent <strong>hexadecimal</strong> number: ', hex.join(''), dec, '(dec)', '(hex)')
}

function convertHexDec () { // presentation Hexadecimal_Decimal
    let n = window.document.getElementById("i1")
    let hex = String(n.value)
    let dec = conversionHexDec(hex)
    presentation('Correspondent <strong>decimal</strong> number: ', dec, hex, '(hex)', '(dec)')
}

function convertBinOct () { // presentation Binary_Octal
    let n = window.document.getElementById("i1")
    let bin = String(n.value)
    let dec = conversionBinDec(bin)
    let oct = conversionDecOct(dec)
    presentation('Correspondent <strong>octal</strong> number: ', oct.join(''), bin, '(bin)', '(octal)')
}

function convertOctBin () { // presentation Octal_Binary
    let n = window.document.getElementById("i1")
    let oct = String(n.value)
    let dec = conversionOctDec(oct)
    let bin = conversionDecBin(dec)
    presentation('Correspondent <strong>binary</strong> number: ', bin.join(''), oct, '(octal)', '(bin)')
}

function convertBinHex () { // presentation Binary_Hexadecimal
    let n = window.document.getElementById("i1")
    let bin = String(n.value)
    let dec = conversionBinDec(bin)
    let hex = conversionDecHex(dec)
    presentation('Correspondent <strong>hexadecimal</strong> number: ', hex.join(''), bin, '(bin)', '(hex)')
}

function convertHexBin () { // presentation Hexadecimal_Binary
    let n = window.document.getElementById("i1")
    let hex = String(n.value)
    let dec = conversionHexDec(hex)
    let bin = conversionDecBin(dec)
    presentation('Correspondent <strong>binary</strong> number: ', bin.join(''), hex, '(hex)', '(bin)')
}

/* ====================================== CONVERSION FUNCTIONS ======================================= */

function conversionDecBin (dec) { // Decimal_Binary
    var prot = []
    while (dec != 0) {
        prot.push(dec % 2)
        dec = parseInt(dec/2)        
    }
    var bin = []
    let tam = prot.length
    let auxTam = tam
    for (var i = 0; i < auxTam; i++) {
        bin[i] = prot[tam - 1]
        tam--
    }
    return bin 
}

function conversionBinDec (bin) { // Binary_Decimal
    let tam = bin.length
    var dec = 0
    var auxTam = tam
    for (var i = 0; i < auxTam; i++) {
        dec += Number(bin[i])*(2**(tam - 1))
        tam--
    }
    return dec
}

function conversionDecOct (dec) { // Decimal_Octal
    var prot = []
    while (dec != 0) {
        prot.push(dec % 8)
        dec = parseInt(dec/8)
    }
    var oct = []
    let tam = prot.length
    let auxTam = tam
    for (var i = 0; i < auxTam; i++) {
        oct[i] = prot[tam - 1]
        tam--
    }
    return oct
}

function conversionOctDec (oct) { // Octal_Decimal
    let tam = oct.length
    var dec = 0
    var auxTam = tam
    for (var i = 0; i < auxTam; i++) {
        dec += Number(oct[i])*(8**(tam - 1))
        tam--
    }    
    return dec
}

function conversionDecHex (dec) { // Decimal_Hexadecimal
    var prot = []
    while (dec != 0) {
        prot.push(dec % 16)
        dec = parseInt(dec/16)
    }
    var protHex = []
    let tam = prot.length
    let auxTam = tam
    for (var i = 0; i < auxTam; i++) {
        protHex[i] = prot[tam - 1]
        tam--
    }
    
    let HexNumbers = [10, 11, 12, 13, 14, 15]
    let HexLetters = ['a', 'b', 'c', 'd', 'e', 'f']

    for (var i = 0; i < auxTam; i++) {
        for (var j = 0; j < 6; j++) {
            if (protHex[i] == HexNumbers[j]) {
               protHex[i] = HexLetters[j]
                break 
            }                
        }
    }

    return protHex
}

function conversionHexDec (hex) { // Hexadecimal_Decimal
    let tam = hex.length
    var auxTam = tam
    var prot = []

    let HexNumbers = [10, 11, 12, 13, 14, 15]
    let HexLetters = ['a', 'b', 'c', 'd', 'e', 'f']

    var cont = 0
    for (var i = 0; i < auxTam; i++) {
        for (var j = 0; j < 6; j++) {
            if (hex[i] == HexLetters[j]) {
                cont++
                prot.push(HexNumbers[j])
                break
            }                                  
        }
        if (cont == 0) 
            prot.push(Number(hex[i]))
        cont = 0
    }

    var dec = 0
    for (var i = 0; i < auxTam; i++) {
        dec += prot[i]*(16**(tam - 1))
        tam--
    }
    return dec
}

function answer (bt) { // Analizes the answers
    if (bt == db) {
        ShowUp('Enter a number in <strong>decimal</strong> base: ', 'convertDecBin()')
    } else if (bt == bd) {
        ShowUp('Enter a number in <strong>binary</strong> base: ', 'convertBinDec()')
    } else if (bt == dO) {
        ShowUp('Enter a number in <strong>decimal</strong> base: ', 'convertDecOct()')
    } else if (bt == od) {
        ShowUp('Enter a number in <strong>octal</strong> base: ', 'convertOctDec()')
    } else if (bt == dh) {
        ShowUp('Enter a number in <strong>decimal</strong> base: ', 'convertDecHex()')
    } else if (bt == hd) {
        ShowUp('Enter a number in <strong>hexadecimal</strong> base: ', 'convertHexDec()')
    } else if (bt == bo) {
        ShowUp('Enter a number in <strong>binary</strong> base: ', 'convertBinOct()')
    } else if (bt == ob) {
        ShowUp('Enter a number in <strong>octal</strong> base: ', 'convertOctBin()')
    } else if (bt == bh) {
        ShowUp('Enter a number in <strong>binary</strong> base: ', 'convertBinHex()')
    } else if (bt == hb) {
        ShowUp('Enter a number in <strong>hexadecimal</strong> base: ', 'convertHexBin()')
    }
}

/* ==================================== STYLE FUNCTIONS =================================== */

function inputStyle (inp) {
    inp.style.width = "110px"
    inp.style.height = "22px"
    inp.style.fontFamily = "system-ui"
    inp.style.paddingBottom = "5px"
    inp.style.borderWidth = "2px"
    inp.style.borderStyle = "solid"
    inp.style.borderColor = "black"
    inp.style.borderRadius = "10px"
    inp.style.paddingLeft = "8px"
    inp.style.fontSize = "20px"
}

function buttonStyle (button) {
    button.style.height = "33px"
    button.style.margin = "5px"
    button.style.fontSize = "20px"
    button.style.borderStyle = "solid"
    button.style.borderColor = "#2b462f"
    button.style.borderRadius = "10px"
}

function p3Style (p3) {
    p3.style.textAlign = "center"
    p3.style.fontSize = "25px"
    p3.style.background = "#cbc4c4"
    p3.style.padding = "20px"
    p3.style.width = "450px"
    p3.style.margin = "auto"
    p3.style.border = "black"
    p3.style.borderStyle = "solid"
    p3.style.borderRadius = "20px"
    p3.style.borderWidth = "2px"
}