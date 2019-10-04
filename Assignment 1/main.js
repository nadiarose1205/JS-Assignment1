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
  var choice = select.value;

  if(choice === "instructor")
  {
    for(let i = 0; i < instructorArray.length; i++)
    {
      console.log(greeting + instructorArray[i] + "!");
    }
  }//if instructor
  else if(choice === "student")
  {
    for(let i = 0; i < studentArray.length; i++)
    {
      console.log(greeting + studentArray[i] + "!");
    }
  }
  else
  {
    para.textContent = "Please make a selection."
  }
}//end of setChoice()
