module.exports = function toReadable (number) {
	let ones=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
		tens=["", "", "twenty","thirty","forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	let numberArray = number.toString().split("").map(val=> +val);
	let humanNumber = "";

	for(let i=0, j=numberArray.length; i<numberArray.length; i++, j--){

		if(j>2){
			humanNumber+=ones[numberArray[i]]+" hundred ";
		}else if(j==2 && numberArray[i]>1){
			humanNumber+=(tens[numberArray[i]]+" ");
		}else if(j==2 && numberArray[i]==1){
			humanNumber+=ones[numberArray[i]*10+numberArray[i+1]];
			break;
		}
		else{
			humanNumber+= (!i || numberArray[i]) ? ones[numberArray[i]] : "";	
		}
		
	}
	return humanNumber.trim();
}
