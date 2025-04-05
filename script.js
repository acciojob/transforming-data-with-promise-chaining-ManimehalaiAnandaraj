//your JS code here. If required.
function transformData(inputNumber) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(inputNumber);
	},2000);
	})	
	.then((number) => {
		document.getElementById('output').textContent=`Result:${number}`;
		return new Promise(resolve => setTimeout(()=> resolve(number * 2),2000));
	})
	.then((number) => {
		document.getElementById('output').textContent=`Result:${number}`;
		return new Promise(resolve => setTimeout(()=> resolve(number - 2),2000));
	})
	 .then((number) => {
		document.getElementById('output').textContent=`Result:${number}`;
		return new Promise(resolve => setTimeout(()=> resolve(number / 2),2000));
	})
	 .then((number) => {
		document.getElementById('output').textContent=`Result:${number}`;
		return new Promise(resolve => setTimeout(()=> resolve(number + 2),2000));
	})
	.then((number) => {
		document.getElementById('output').textContent=`Final Result:${number}`;
	});
}


