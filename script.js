let paragraph = document.getElementsByTagName("p")[0]
let text = "";

for (let num = 1; num <= 100; num++){
  if ((num % 5 === 1 ) && (num % 7 == 1)) {
    text += "ChickenMonkey ";
  } else if (num % 5 == 1 ) {
    text += "Chicken "
  } else if (num % 7 == 1 ) {
    text += "Monkey "
  } else {
    text += `${num} `
  }
}

paragraph.textContent = text 
