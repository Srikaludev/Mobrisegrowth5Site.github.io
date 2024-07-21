// ES8 
// .padstart()
// .padEnd()
// object.values
// entries
// keys
let obj = {
	username0: 'Santa',
	username1: 'Rudo',
	username2: 'Grin'
}
Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key]);
})
Object.values(obj).forEach(value => {
	console.log(value);
})//Object.entries


//BIGINT to cross number 124n
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard
//?if object exists ??null check too 