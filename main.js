//window.onload = function(); -->event handler fires when the resource
  //has loaded.
//declare any variables needed...
//query select the display and assign it to a variable(may already be declared)
//target(query select all class) number buttons and assign to a variable
//add a click event listener to number keys
//iterate over the array containing the numbers(array returned from selecting
//all elements of the class/stored in variable)
//add clicked number to display using display.innerhtml(adds the html we are
//writing in js to the )
//give it a limit to how many characters can be accepted into the display
//Do something if the . is pressed with nothing on the screen (concat 0. +
//whatever numbers are input)


var btn = document.getElementsByClassName("buttons");
var display= document.getElementById('display');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');
var array=[];

for(let i = 0; i < btn.length; i+=1){
  btn[i].addEventListener('click', function(){
    console.log(btn[i].value);
    array.push(btn[i].value);
    console.log(array);
    display.innerHTML = array.join('');
  })
 }

equals.addEventListener('click', function() {
  display.innerHTML = eval(array.join(''));
})

clear.addEventListener('click', function() {
  display.innerHTML = '';
  array = [];
})
