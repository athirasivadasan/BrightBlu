/////////////////////////////////
// Javascript 

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.


The javascript challenge will be submitted in the same File. For the React part, see below

*/

////////////////////////////////
//React JS
/*
https://codesandbox.io/s/prod-sea-xzvu2?file=/src/index.js
1. Open the link above
2. Fork the project so that you can make edits(You'll need a Github Account)
3. Follow the instructions(Inside the Index.js file) given to complete the challenge.



*/

//Code Starts Here
console.log("Happy Coding!\n");


console.log("Town Administration Details\n");


class Element {
	constructor (name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {

	constructor(name, buildYear, area, numTrees) {
		super(name, buildYear);
		this.area = area; //km2
		this.numTrees = numTrees;
	}
	
	//1. Tree density of each park in the town (forumla: number of trees/park area)
	treeDensity() {
		const density = this.numTrees / this.area;
		console.log(this.name+', has a tree density of "'+density+'" trees per square km.');
	}
	
}

class Street extends Element {
	constructor(name, buildYear, length, size) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}
	//5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(this.name+', build in '+this.buildYear+', is a '+classification.get(this.size)+' street.');
	}
}

const allParks = [new Park('Eravikulam National Park', 1978, 0.2, 250), new Park('Pambadum Shola National Park', 2003, 2.9, 4541), new Park('Periyar National Park', 1982, 0.4, 949)];

const allStreets = [new Street('Santhi Nagar Avenue', 1999, 1.1, 4), new Street('Evergree Street', 2004, 2.7, 2), new Street('Girinagar Street', 2015, 0.8), new Street('Golden vally', 1982, 2.5, 5)];

function calc(arr) {
	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
	return [sum, sum / arr.length];
}


function reportParks(p) {
	console.log('----PARKS DETAILS----\n');
	// Density
	p.forEach (el => el.treeDensity());

	// Average age //2. Average age of each town's park (forumla: sum of all ages/number of parks)
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log('Our '+p.length+' parks have an average of "'+avgAge+'" years.');

	// Which park has more than 1000 trees;  //3. The name of the park that has more than 1000 trees
	const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
	console.log(p[i].name+' has more than 1000 trees.');
}

function reportStreets(s) {
	console.log('---- STREETS DETAILS ----\n');

	//Total and average length of the town's streets  //4. Total and average length of the town's streets
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log('Our '+s.length+' streets have a total length of "'+totalLength+'" km, with an average of "'+avgLength+'" km.');

	//Classify sizes
	s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

console.log("\nThank You!");


