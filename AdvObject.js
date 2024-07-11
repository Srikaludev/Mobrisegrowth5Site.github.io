var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};
function b() {
	let a = 4;
}
//Context gives idea abt within the object.
const object4 = {
	a:function(){
		console.log(this);
	}
}
class Player {
	constructor(name,type){
		console.log('Player',this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am a ${this.type}`)
	}
}
class Wizard extends Player {

	constructor(name,type){
		super(name,type);
		console.log('Wizard',this);
	}
	play(){
		console.log(`WEEEEEEEEEEE I'm a ${this.type}`)
	}
}
const wizard1 = new Wizard('Barry','Flash');