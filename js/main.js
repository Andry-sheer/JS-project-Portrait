
const age = +prompt('Hello please enter your AGE: ');

if (age <= ''){
  alert('its very sadly you didnt want to enter your AGE');
  
}

const city = prompt('please enter your CITY (only Eng): ');

let capital;
switch(city){
  case "Kyiv":
    capital = "Ukraine";
    break;

  case "Vashington":
    capital = "USA";
    break;

  case "London":
    capital = "UK";
    break;

  case "Berlin":
    capital = "Germany";
    break;

  default:
    capital = city;
    break;
}

if (city <= ''){
  alert('its very sadly you didnt want to enter your CITY');
}

const sport = prompt('please enter your FAVORITE SPORT (only Eng): ');

let champion;
switch(sport){
  case "football":
    champion = "Do you want to be a new Messie";
    break;

  case "basketball":
    champion = "Do you want to be a new Michael Jordan";
    break;

  case "baseball":
    champion = "Do you want to be a new Roger Clemens";
    break;

  case "hockey":
    champion = "Do you want to be a new Alex Ovechkin";
    break;

  case "box":
    champion = "Do you want to be a new Mike Tyson";
    break;

    case "golf":
    champion = "Do you want to be a new Greg Norman";
    break;

  case "swimming":
    champion = "Do you want to be a new Michael Phelps";
    break;

  case "biathlon":
    champion = "Do you want to be a new BJOERNDALEN Ole Einar";
    break;

  case "tennis":
    champion = "Do you want to be a new Andre Agassi";
    break;

  default:
    champion = '';
    break;
}

if (sport <= ''){
  alert('its very sadly you didnt want to enter your SPORT');
}

if (age <= '' && city <= '' && sport <= '' ){
  alert(`${age = ''} \n${capital = ''} \n${champion = ''}`);
}
else {
  alert(`${'Your age is: ' + age} \n${'you Living in the capital of ' + capital} \n${champion}`);
}

// alert(`your age is: ${age} \nyou Living in ${capital}. \n${champion}`);