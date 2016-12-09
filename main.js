var person = {
	name: 'John',
	sayHello: function(){
		//メソッド呼び出しパターン
		//thisはperson(オブジェクトがthisの対象)
		console.log('Hello, ' + this.name + '!');
	}
};


/*****************関数呼び出しパターン***************
// var test = function(){
// 	//関数呼び出しパターン
// 	//thisはグローバルオブジェクト
// 	console.log(this);
// };
// test();
************************************************/

//改良
//設計図
var Person = function(name){
	this.name = name || 'nanashi';
	this.sayHello = function(){
		console.log('Hello, ' + this.name + '!');
	};
	// this.sayGoodBye = function(){
	// 	console.log('GoodBye, ' + this.name + '!');
	// };
};

var p = new Person();
p.sayHello();

/*************コンストラクタ呼び出しパターン***************
//コンストラクタ呼び出しパターン
//thisはp
var p = new Person('test')
************************************************/

/*************************************************
var Hero = function(name,hp,job){
	this.name = name;
	this.hp = hp;
	this.job = job;
};

Hero.prototype = new Person();

var c = new Hero('Cusinart',59,'fighter');

Person.prototype.teleport = function(){
	console.log('Oops!');
};

c.teleport();

// console.log(c.name);
// console.log(c.hp);
// console.log(c.job);
// c.sayHello();

************************************************/

/*************************************************

//newのイメージ
// var Person__ = function(name){
// 	var o = {
// 		name: name;
// 		sayHello: function(){
// 			console.log('Hello, ' + this.name + '!');
// 		}
// 	};
// 	return o;
// }

//実体化されたもの
// var p1 = new Person('John');
// var p2 = new Person('Paul');
// var p3 = new Person('George');
// var p4 = new Person('Ringo');

//newのイメージ
//var j2 = Person__('John');

************************************************/


// var a = 0;
// var b = a;

// b = 5;

// // console.log('a: ' + a); // 0
// // console.log('b: ' + b); // 5

// var c = {x:0,y:0};
// var d = c;
// d.x = 5;
// console.log(c);
// console.log(d);