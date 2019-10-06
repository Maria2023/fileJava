
// this is where I write all the vars
var chosenLength;
var passwordValue ;

// this is where I get all the elements into a var
var genButton = document.getElementById('genButton');
var passInput = document.getElementById('passInput');

// this is where I will write all the functions
function ask(){

  let number = prompt('What is the length of your password? (between 8 and 128)')

  if (number <8) {
    alert('YOU MUST ENTER 8 OR ABOVE!!')
  } else if (number > 128) {
    alert('YOU MUST ENTER BELOW 128')
  } else {
    chosenLength = number;
    passwordMaker()
  }
  


}

function passwordMaker(length) {
  numbers = [1,2,3,4,5,6,7,8,9,0]
  uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  specials = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
  
  var numberUser =  window.confirm('Use Numbers?');
  var uppersUser =  window.confirm('Use Uppers?');
  var lowrUser =  window.confirm('Use Lowers?');
  var specialUser =  window.confirm('Use Specials?');
  var password = ''
  for (i=0; i<chosenLength; i++){
    password += numbers[Math.floor(Math.random()*numbers.length -1)];
  }
  

  for (i=0; i<chosenLength; i++){
    password += uppers[Math.floor(Math.random()*uppers.length -1)];
  }
  
  
 for (i=0; i<chosenLength; i++){
  password += lowers[Math.floor(Math.random()*lowers.length -1)];
  
 }
 
  for (i=0; i<chosenLength; i++){
    password += specials[Math.floor(Math.random()*specials.length -1)];
  }
  

  password = password.split('').sort(function(){return Math.random()}).join('');
    console.log(password)
    // Document.getElementById("box").innerText(password)

    //alert(password)
    document.getElementById('box').innerHTML = password;
}
 



// this is where I will add all the event listeners
genButton.addEventListener( 'click' , ask  );