var regFirstName = document.getElementById("regFirstName");
regFirstName.addEventListener("blur",checkFirstName);

var regSurname = document.getElementById("regSurname");
regSurname.addEventListener("blur",checkLastName);

var regEmail = document.getElementById("regEmail");
regEmail.addEventListener("blur",checkEmail);

var regPasswordFirst = document.getElementById("regPasswordFirst");
regPasswordFirst.addEventListener("keyup",checkPaswordLength);

var regPasswordConfirm = document.getElementById("regPasswordConfirm");
regPasswordConfirm.addEventListener("keyup",checkPaswordMatch);

var regPhoneNumber = document.getElementById("regPhoneNumber");
regPhoneNumber.addEventListener("blur",checkPhoneNumber);//

var go = document.getElementById("registerButton");
registerButton.addEventListener("click",changeDetails);

var firstNameAT = document.getElementById("firstNameAT");
var surenameameAT = document.getElementById("surenameameAT");
var phoneNumberAT = document.getElementById("phoneNumberAT");


var emailAT = document.getElementById("emailAT");

var passLenghtActionText = document.getElementById("passLenghtActionText"); 
var passMatchActionText = document.getElementById("passMatchActionText"); 
passMatchActionText.innerHTML = "Text here <br>";
var allCheck = [true,true,true,true,true];
//--------------------------------------------------------------
//
//**************posisciion
var posUserOne = parseInt(SeasonData.pos);
loadMainUserArray();

regFirstName.value = mainUserArray[posUserOne].firstName;
regSurname.value = mainUserArray[posUserOne].lastName;
regPasswordFirst.value = mainUserArray[posUserOne].password;
regPasswordConfirm .value = mainUserArray[posUserOne].password;
regEmail.value = mainUserArray[posUserOne].email;
regPhoneNumber.value = mainUserArray[posUserOne].cardNumber;

function checkFirstName()
{
	if(regFirstName.value=="")
	{
		firstNameAT.innerHTML = "<br>Please fill this";
		allCheck[0]=false;
	}else
	{
		firstNameAT.innerHTML = "<br>Good";
		allCheck[0]=true;
	}
	 
	
}
function checkLastName()
{
	if(regSurname.value=="")
	{
		surenameameAT.innerHTML = "<br>Please fill this";
		allCheck[1]=false;
	}else
	{
		surenameameAT.innerHTML = "<br>Good";
		allCheck[1]=true;
	}

}
function checkEmail()
{
	var str = regEmail.value;
	var check1 = str.includes("@");
	var check2 = str.endsWith(".com");
	var check3 = true;
	var char0 = str.charAt(0);
	console.log(char0);
	if(char0=='@')
	{
		check3 = false;
	}
	console.log(check1);
	console.log(check2);
	console.log(check3);
	if(check1&&check2&&check3)
	{
		emailAT.innerHTML ="<br>good";
		allCheck[2]=true;
	}else
	{
		emailAT.innerHTML ="<br>Please enter a valid email";
		allCheck[2]=false;
	}
}
function checkPaswordLength()
{
	var str = regPasswordFirst.value;
	console.log(str.length);
	if(str.length>=6)
	{
		passLenghtActionText.innerHTML = "good";
	}

	//console.log("key down pas lenght");
}
function checkPaswordMatch()
{
	var pasOne = regPasswordFirst.value;
	var pasTwo = regPasswordConfirm .value;
	
	if(pasTwo.length>=6&&pasOne==pasTwo)
	{
		passMatchActionText.innerHTML = "good";
		allCheck[3]=true;
	}else
	{
		passMatchActionText.innerHTML = "<br>Password not match";
		allCheck[3]=false;
	}
	
}
function checkPhoneNumber()
{
	var pN = regPhoneNumber.value;
	if(isNaN(pN))
	{
		phoneNumberAT.innerHTML= "<br>Please enter a number";
		allCheck[4]=false;
	}
	else
	{
		allCheck[4]=true;
	}	
}
function changeDetails()
{
	if(allCheck[0]&&allCheck[1]&&allCheck[2]&&allCheck[3]&&allCheck[4])
	{
		console.log("register click");
		
		loadMainUserArray();
		console.log(	mainUserArray[posUserOne]);
		mainUserArray[posUserOne].firstName = regFirstName.value; 
		mainUserArray[posUserOne].lastName= regSurname.value;
		mainUserArray[posUserOne].email= regEmail.value;
		mainUserArray[posUserOne].password= regPasswordConfirm.value;
		mainUserArray[posUserOne].cardNumber=regPhoneNumber.value;
		console.log(	mainUserArray[posUserOne]);
		localStorage.mainArrayLS = JSON.stringify(mainUserArray);
		updateSeasonData(posUserOne,mainUserArray[posUserOne].firstName);
		location.replace("index.html");
		
	}
}


//edit details*************************************************************************

//common functions
function checkIfLogin()
{
	isLogin = localStorage.isLoginLS;
}
function loginAction()
{
	localStorage.isLoginLS = "true";
}
function logoutAction()
{
	localStorage.isLoginLS = "false";
}
function readUserOne()
{
	userOne = JSON.parse(localStorage.userOneLS);
}
function saveMainUserArray()
{
	localStorage.mainArrayLS = JSON.stringify(mainUserArray);
}//save

function loadMainUserArray()
{
	mainUserArray = JSON.parse(localStorage.mainArrayLS);
}
function updateSeasonData(position,name)
{
	var SeasonData =  JSON.parse(localStorage.seasonLS);
	SeasonData.userName = name ;
	SeasonData.pos = position;
	localStorage.seasonLS = JSON.stringify(SeasonData);
}