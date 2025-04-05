//your JS code here. If required.
const inputElement=document.getElementById('ip');
const buttonElement=document.getElementById('btn');
const outputElement=document.getElementById('output');

	buttonElement.addEventListener('click',() => {
		const inputValue=inputElement.value;
		
			 new Promise(resolve => {
		setTimeout(() => {
			const number=parseInt(inputValue);
			outputElement.textContent=`Result:${number}`;
			resolve(number);
	},2000);
	})
		
	.then((number) => {
		return new Promise(resolve => {
			setTimeout(() => {
					const result=number * 2;
				outputElement.textContent=`Result: ${result}`;
				resolve(result);
			},2000);
		});
	})

	.then((number) => {
		return new Promise(resolve => {
			setTimeout(() => {
					const result=number - 3;
				outputElement.textContent=`Result: ${result}`;
				resolve(result);
			},1000);
		});
	})

	.then((number) => {
		return new Promise(resolve => {
			setTimeout(() => {
					const result=number / 2;
				outputElement.textContent=`Result: ${result}`;
				resolve(result);
			},1000);
		});
	})

	.then((number) => {
		return new Promise(resolve => {
			setTimeout(() => {
					const result=number + 10;
				outputElement.textContent=`Final Result: ${result}`;
				resolve(result);
			},1000);
		});
	})
	   .catch(error => {
		   outputElement.textContent =`Error: ${error}`;
	   });
});

				
		
	