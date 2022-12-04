
var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");


function register()
	{
	x.style.left = "-400px";
	y.style.left = "50px";
	z.style.left = "110px";
	}
function login()
	{
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0";
	}
function reg(){
    var reg_no=document.getElementById("reg_no").value;
    var mail=document.getElementById("mail").value;
	var pswd=document.getElementById("pswd").value;
    localStorage.setItem('ls_pswd', pswd);
    if (!localStorage.getItem('ls_pswd'))
    {
        alert("Registration Faill");
    } 
    else 
    {
        alert("Registration Success!... your id is:9513");
    }

}

		
function log()
{

	var log_id=document.getElementById("log_id").value;


	if (log_id==9513) 
	{
		pswd();
	} else 
	{
		alert("Invalid Id");
	}

function pswd()
{
	var log_pswd=document.getElementById("log_pswd").value;
	if (log_pswd==localStorage.getItem("ls_pswd")) 
		{
			alert("Login Success");
			window.open("../html/jacsice.html")
		} else {
			alert("Invalid Password");
		}
}
	
}
