let youBudget = prompt("Ваш бюджет?"),
	nameScore = prompt("Название вашего магазина?"),
	time = 8;
	

console.log(youBudget); 
console.log(nameScore);


let mainList = {
	budget 	  : youBudget,
	nameShop  : nameScore,
	shopGoods :[],
	employers : {},
	open: false

};

	for(let i = 0; i < 5; i++){

	let a = prompt("Какой тип товара будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;

	} else {
		--i;
	}
} 




//Первый способ
/*let i = 0;
while(i < 5) {
	console.log(i);
	i++;
	let a = prompt("Какой тип товаров будем продавать?");
 		mainList.shopGoods[i] = a;
 		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
 		console.log('Все верно');
 	} else {
 		--i;
 	}
 	
}; 
*/





//Второй способ

/*let i = 0;
 	do {
		console.log(i);
		i++;
		let a = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods[i] = a;
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
 		console.log('Все верно');
 	} else {
 		--i;
 	}
 	} while(i < 5);*/



console.log(mainList);

let budgetDaysMonth  = 30,
	budgetDay        = youBudget/budgetDaysMonth;

	alert("Ваш бюджет на один день:" + budgetDay);






