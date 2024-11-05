function submitData(e) {
	/* Для работы с формой и вывода результата */
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Ваш доход: ${res.toFixed(2)} руб`;
}

function calculate(sum, day, percent, isCapital) {
	/* TODO: Нужно написать данную функцию */
	if (isCapital=='yes') {
		return sum * (1 + (percent / 100) / 365)**day - sum;
	}	else {
		return sum * percent * day / 365 / 100
	} 
	/* TODO: Вернуть получившееся значение */
}