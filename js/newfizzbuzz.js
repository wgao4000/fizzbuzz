function getnu(usernumber){
if(!isNaN(usernumber)){
  var inputnumber=+usernumber;
  if(inputnumber%1==0 && inputnumber>0 ){
    document.getElementById('allvalues').innerHTML="";
    var rev=fizzb(inputnumber);
    document.getElementById('allvalues').innerHTML+=rev;
  }
  else
    alert("Please input a positive integer!");
}
else
    alert("Please input a positive integer!");
}  
function fizzb(num){
  var num_fizz=[];
  for(var i=1;i<=num;i++){
  	//if i is divisible by 15
	if(i%3==0 && i%5==0){
		 num_fizz.push("  fizz buzz");
	}
	//if i is divisible by 3 only
	else if(i%3==0)
		 num_fizz.push("  fizz");
	//if i is divisible by 5 only
	else if(i%5==0)
		 num_fizz.push("  buzz");
	//if i is not divisible by 3 or 5
	else
	   num_fizz.push("  "+i);
  }
  return num_fizz;
}  