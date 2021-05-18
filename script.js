let numberone = '',
  numbertwo = '',
  mathsign = 0,
  operation;
let display = document.getElementById('calculator__display');
function fnPad(val) {
  //   console.log(val);

  switch (val) {
    case 'clear':
      display.innerHTML = '';
      fnClearValues();
      break;
    case 'one':
      fnMathOperation(1);

      break;
    case 'two':
      fnMathOperation(2);

      break;
    case 'three':
      fnMathOperation(3);

      break;
    case 'four':
      fnMathOperation(4);

      break;
    case 'five':
      fnMathOperation(5);

      break;
    case 'six':
      fnMathOperation(6);

      break;
    case 'seven':
      fnMathOperation(7);

      break;
    case 'eight':
      fnMathOperation(8);
      break;
    case 'nine':
      fnMathOperation(9);
      break;
    case 'zero':
      fnMathOperation(0);
      break;
    // Operations
    case 'plus':
      triggerMath('plus');
      break;
    case 'percentage':
      triggerMath('percentage');
      break;
    case 'division':
      triggerMath('division');
      break;
    case 'multiplication':
      triggerMath('multiplication');
      break;
    case 'minus':
      triggerMath('minus');
      break;

    case 'result':
      if (numberone !== '' && numbertwo !== '') {
        numberone = fnOperation(mathsign, operation);
        numbertwo = '';
      } else if (operation === 'percentage') {
        numberone = fnOperation(mathsign, operation);
      }

      //   display.innerHTML += fnOperation('percentage');
      break;

    default:
      break;
  }
}
function fnOperation(mathsign, operation) {
  if (mathsign === 1) {
    if (operation == 'addition') {
      return (display.innerHTML = Number(numberone) + Number(numbertwo));
    } else if (operation == 'multiplication') {
      return (display.innerHTML = Number(numberone) * Number(numbertwo));
    } else if (operation == 'minus') {
      return (display.innerHTML = Number(numberone) - Number(numbertwo));
    } else if (operation == 'division') {
      return (display.innerHTML = Number(numberone) / Number(numbertwo));
    } else if (operation == 'percentage') {
      return (display.innerHTML = Number(numberone) / 100);
    }
  }
}

function fnClearValues() {
  numberone = '';
  numbertwo = '';
  mathsign = 0;
  operation = '';
}

function fnMathOperation(val) {
  if (mathsign === 1) {
    numbertwo = String(numbertwo) + String(val);
    if (numbertwo.length > 1) {
      display.innerHTML = numbertwo;
    } else {
      display.innerHTML = val;
    }
  } else {
    display.innerHTML += val;
  }
}

function triggerMath(math) {
  numberone = display.innerHTML;
  mathsign = 1;
  display.innerHTML = numberone;
  if (math === 'plus') {
    operation = 'addition';
  } else if (math === 'minus') {
    operation = 'minus';
  } else if (math === 'multiplication') {
    operation = 'multiplication';
  } else if (math === 'division') {
    operation = 'division';
  } else if (math === 'percentage') {
    operation = 'percentage';
  }
}

function fnTheme() {
  let element = document.getElementById('calculator');
  if (document.getElementById('theme__checkbox').checked === true) {
    element.classList.add('theme__dark');
    element.classList.remove('theme__white');
  } else {
    element.classList.remove('theme__dark');
    element.classList.add('theme__white');
  }
}
