function fizzb(){
  var num_fizz=[];
  for(var i=1;i<101;i++){
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
    document.getElementById('allvalues').innerHTML+=num_fizz;
}  