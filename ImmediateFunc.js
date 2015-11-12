(function(){
	var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	var today = new Date()
	var msg = "Today is" + days[today.getDay()] + ',' + today.getDate()
	console.log(msg)
})();   // Today isThu,29


// 即时函数的参数
(function(who,when){
	console.log(' i met ' + who + ' on ' + when)
})("cynthai",new Date());  //i met cynthai on Thu Oct 29 2015 18:03:09 GMT+0800 (中国标准时间)



