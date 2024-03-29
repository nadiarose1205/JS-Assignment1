//declaring variables + arrays
let select = document.getElementById("welcome");
let para = document.querySelector("p");
let greeting = "Hello ";
let instructorArray = ["Jessica Gilfillan", "Maziar Shajari", "Ben Blanc", "Susy Stewart", "Samuel Halloran", "Tim Patrick"];
let studentArray = ["Jeff Grant", "Vraj Patel", "Gagandeep Kaur", "Patrick Gareau", "Kuei-Chin Huang", "Nicole Yaghoobi", "Birhanu Bishaw", "Scott Baron", "Linh Dao", "Alap Dhruva", "Manuel Gonzalez", "Tyler Auslitz", "Shinhee Kim", "Nadine Paquette", "Nix Thompson", "Taylor Gamsby", "Jason Asselin", "Giuseppe Leone", "Zixiao Sun", "Mitch Haak", "Joel Grenier", "Andrew Arpin", "Chengbin Huang", "Kurtis Jones", "Jakob Clements", "Nadia Corkum"];

//using onchange to detect a change
select.onchange = setChoice;

//define setChoice() function
function setChoice()
{
  clearPara();

  var choice = select.value;

  if(choice === "instructor")
  {
    for(let i = 0; i < instructorArray.length; i++)
    {
      para.innerHTML += greeting + instructorArray[i] + "!" + "<br>";
    }
  }//if instructor
  else if(choice === "student")
  {
    for(let i = 0; i < studentArray.length; i++)
    {
      para.innerHTML += greeting + studentArray[i] + "!" + "<br>";
    }
  }//else if student
  else
  {
    para.textContent = "Please make a selection.";
  }
}//end of setChoice()

//clears para.innerHTMl - clears the instructor list to make room for the student list and vice versa
function clearPara(){
  para.innerHTML = " ";
}//end of clearPara
