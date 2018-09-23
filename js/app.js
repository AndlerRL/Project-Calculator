//// Constantes y variantes generales ////

const onKey = document.getElementById('on');
const signKey = document.getElementById('sign');
const rootKey = document.getElementById('raiz');
const divideKey = document.getElementById('dividido');
const dotKey = document.getElementById('punto');
const equalKey = document.getElementById('igual');
const plusKey = document.getElementById('mas');
const perKey = document.getElementById('por');
const minusKey = document.getElementById('menos');
const key_0 = document.getElementById('0');
const key_1 = document.getElementById('1');
const key_2 = document.getElementById('2');
const key_3 = document.getElementById('3');
const key_4 = document.getElementById('4');
const key_5 = document.getElementById('5');
const key_6 = document.getElementById('6');
const key_7 = document.getElementById('7');
const key_8 = document.getElementById('8');
const key_9 = document.getElementById('9');

const display = document.getElementById('display');
// Condicional para el límite en la pantalla //
if (display.innerHTML.length >= 7 && key === true) {
    key = false;
    display.classList.add('blink_once');
    setTimeout(() => {
        display.classList.remove('blink_once');
    }, 333);
}

let num1 = 0;
let num2 = 0;
let num3 = 0;
let key = true;

let Result = {
    plus: false,
    minus: false,
    per: false,
    divide: false,
    equal: false
};

//// Calculadora por Patrón Modular... ////

var calculator = {
    key0: function () {
        key_0.value = 0;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_0.value);
            }
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }

        display.classList.remove('blink');
    },
    key1: function () {
        key_1.value = 1;

        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                if (num1, num2, num3 == false) {
                    num1 = true;
                    display.innerHTML += parseFloat(key_1.value);
                }
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_1.value);
            }
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }


        display.classList.remove('blink');
    },
    key2: function () {
        key_2.value = 2;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_2.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_2.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key3: function () {
        key_3.value = 3;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_3.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_3.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key4: function () {
        key_4.value = 4;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_4.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_4.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key5: function () {
        key_5.value = 5;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_5.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_5.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key6: function () {
        key_6.value = 6;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_6.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_6.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key7: function () {
        key_7.value = 7;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_7.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_7.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length <= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key8: function () {
        key_8.value = 8;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_8.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_8.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    key9: function () {
        key_9.value = 9;
        if (key === true) {
            if (display.innerHTML.length >= 1 && display.innerHTML > 0 && display.innerHTML.length <= 7) {
                display.innerHTML += parseFloat(key_9.value);
            } else if (display.innerHTML == 0) {
                display.innerHTML = parseFloat(key_9.value);
            }
            display.classList.remove('blink');
        } else if (display.innerHTML.length >= 7 && key == false) {
            display.classList.add('blink_once');
            setTimeout(() => {
                display.classList.remove('blink_once');
            }, 333);
        }
    },
    onKey: function () {
        display.classList.remove('blink_once');
        display.classList.add('blink');
        display.innerHTML = 0;
        key = true;
        Result.per = false;
        Result.plus = false;
        Result.minus = false;
        Result.divide = false;
        num1 = 0;
        num2 = 0;
        num3 = 0;
    },
    dotKey: function () {
        dotKey.value = ".";
        if (display.innerHTML !== 0) {
            display.innerHTML += dotKey.value;
        }
        display.classList.remove('blink');
    },
    signKey: function () {
        let num1 = parseFloat(display.innerHTML);
        if (+num1) {
            display.innerHTML = 0;
            display.innerHTML = -num1;
        } else if (-num1) {
            display.innerHTML = +num1;
        }

        //Sólo falta que sea consistente cuando se ingresa un número extra...

        display.classList.add('blink_once');
        setTimeout(() => {
            display.classList.remove('blink_once');
        }, 500);
    },
    plusKey: function () {
        resetScreen();

        display.classList.add('blink_once');
        setTimeout(() => {
            display.classList.remove('blink_once');
        }, 500)

        Result.plus = true;

        console.log(Result.plus, num1, num2, num3, "plusKey");
    },
    minusKey: function () {
        resetScreen();

        display.classList.add('blink_once');
        setTimeout(() => {
            display.classList.remove('blink_once');
        }, 500)

        Result.minus = true;

        console.log(Result.minus, num1, num2, num3, "minusKey");
    },
    perKey: function () {
        resetScreen();

        display.classList.add('blink_once');
        setTimeout(() => {
            display.classList.remove('blink_once');
        }, 500)

        Result.per = true;

        console.log(Result.per, num1, num2, num3, "perKey");
    },
    divideKey: function () {
        resetScreen();

        display.classList.add('blink_once');
        setTimeout(() => {
            display.classList.remove('blink_once');
        }, 500)

        Result.divide = true;

        console.log(Result.divide, num1, num2, num3, "divideKey");
    },
    rootKey: function () {
        num1 = parseFloat(display.innerHTML);
        let result = Math.sqrt(num1);
        display.innerHTML = parseFloat(result).toPrecision(8);
    },
    equalKey: function () {
        num2 = parseFloat(display.innerHTML);

        Result.equal = true;

        let result;

        if (Result.plus === true) {
            if (num1 !== 0 && num3 === 0) {
                result = num1 + num2;
                num3 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num3).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num3);
                }
                console.log(Result.equal, num1, num2, num3, "Result:->" + result, "Ecuation1-Plus");
            } else if (num1 !== 0 && num3 !== 0) {
                result = num3 + num2;
                num1 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num1).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num1);
                }
                console.log(Result.equal, num3, num2, num1, "Result:->" + result, "Ecuation2-Plus");
            }

            Result.plus = false;
        }

        if (Result.minus === true) {
            if (num1 !== 0 && num3 === 0) {
                result = num1 - num2;
                num3 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num3).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num3);
                }
                console.log(Result.equal, num1, num2, num3, "Result: –> " + result, "Ecuation1-Minus");
            } else if (num1 !== 0 && num3 !== 0) {
                result = num3 - num2;
                num1 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num1).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num1);
                }
                console.log(Result.equal, num3, num2, num1, "Result:->" + result, "Ecuation2-Minus");
            }

            Result.minus = false;
        }

        if (Result.per === true) {
            if (num1 !== 0 && num3 === 0) {
                result = num1 * num2;
                num3 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num3).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num3);
                }
                console.log(Result.equal, num1, num2, num3, "Result: –> " + result, "Ecuation1-Per");
            } else if (num1 !== 0 && num3 !== 0) {
                result = num3 * num2;
                num3 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num3).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num3);
                }
                console.log(Result.equal, num3, num2, num1, "Result: –> " + result, "Ecuation2-Per");
            }

            Result.per = false;
        }
        if (Result.divide === true) {
            if (num1 !== 0 && num3 === 0) {
                result = num1 / num2;
                num3 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num3).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num3);
                }
                console.log(Result.equal, num1, num2, num3, "Result: –> " + result, "Ecuation1-Divide");
            } else if (num1 !== 0 && num3 !== 0) {
                result = num3 / num2;
                num1 = result;
                if (display.innerHTML.length >= 7) {
                    display.innerHTML = parseFloat(num1).toPrecision(6);
                } else {
                    display.innerHTML = parseFloat(num1);
                }
                console.log(Result.equal, num3, num2, num1, "Result: –> " + result, "Ecuation2-Divide");
            }

            Result.divide = false;
        }

        display.classList.add('blink_once');
    }
}

//// Función condicional del bindkey ////

document.onkeyup = function (e) {
    if (e.which == 48 || e.keyCode == 48) {
        calculator.key0();
    }
    if (e.which == 49 || e.keyCode == 49) {
        calculator.key1();
    }
    if (e.wich == 50 || e.keyCode == 50) {
        calculator.key2();
    }
    if (e.which == 51 || e.keyCode == 51) {
        calculator.key3();
    }
    if (e.which == 52 || e.keyCode == 52) {
        calculator.key4();
    }
    if (e.which == 53 || e.keyCode == 53) {
        calculator.key5();
    }
    if (e.which == 54 || e.keyCode == 54) {
        calculator.key6();
    }
    if (e.which == 55 || e.keyCode == 55) {
        calculator.key7();
    }
    if (e.which == 56 || e.keyCode == 56) {
        calculator.key8();
    }
    if (e.which == 57 || e.keyCode == 57) {
        calculator.key9();
    }
    if (e.which == 187 || e.keyCode == 187) {
        calculator.plusKey();
    }
    if (e.which == 189 || e.keyCode == 189) {
        calculator.minusKey();
    }
    if (e.which == 191 || e.keyCode == 191) {
        calculator.divideKey();
    }
    if (e.which == 221 || e.keyCode == 221) {
        calculator.plusKey();
    }
    if (e.which == 13 || e.keyCode == 13) {
        calculator.equalKey();
    }
    if (e.which == 27 || e.keyCode == 27) {
        calculator.onKey();
    }
    if (e.which == 190 || e.keyCode == 190) {
        calculator.dotKey();
    }
};

//// Funciones para el cálculo ////

function resetScreen() {
    if (num1 === 0) {
        num1 = parseFloat(display.innerHTML);
    } else if (num1 !== 0) {
        num3 = parseFloat(display.innerHTML);
    }

    setTimeout(() => {
        display.innerHTML = 0;
    }, 5);
}

function startCal() {
    display.innerHTML = 0;
    display.classList.add('blink');
}

function validate(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('An error has occur... Sorry:( ');
        return false;
    } else {
        return true;
    }
}

//// Funciones de animación ////

function pressing(e) {
    e.style.width = "21%";
    e.style.height = "58.5px";
    e.style.opacity = ".9";

    setTimeout(() => {
        e.style.width = "22%";
        e.style.height = "62.91px";
        e.style.opacity = "1";
        e.style.marginLeft = "2.5px";
        e.style.marginTop = "2.5px";
        e.style.position = "relative";
    }, 150);
}

function pressingCol1(e) {
    e.style.width = "28%";
    e.style.height = "59px";
    e.style.opacity = ".9";

    setTimeout(() => {
        e.style.width = "29%";
        e.style.height = "62.91px";
        e.style.opacity = "1";
        e.style.marginLeft = "2.5px";
        e.style.marginTop = "2.5px";
        e.style.position = "relative";
    }, 150);
}

function pressingPlus(e) {
    e.style.width = "89%";
    e.style.height = "99%";
    e.style.opacity = ".9";

    setTimeout(() => {
        e.style.width = "90%";
        e.style.height = "100%";
        e.style.opacity = "1";
        e.style.marginLeft = "8px";
        e.style.marginTop = "2.5px";
        e.style.position = "relative";
    }, 150);
}