// Object Literals
var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin', 'double', 'suite'],
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};
var hotelName = hotel.name;
var hotelName1 = hotel['name'];
var roomsFree = hotel.checkAvailability();

console.log(hotelName);
console.log(hotelName1);
console.log(roomsFree);

// Object constructor
var hotel1 = new Object();

hotel1.name = 'Quay';
hotel1.rooms = 40;
hotel1.booked = 25;
hotel1.checkAvailability = function(){
	return this.rooms - this.booked;
};
console.log(hotel1.checkAvailability());

// Constructor functions
function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
	return this.rooms - this.booked;
	};
}

var quayHotel = new Hotel('Quay', 40, 25); // Instance of an object/new object is created called quayHotel
var parkHotel = new Hotel('Park', 120, 77); // Instance of an object/new object is created called quayHotel

var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();

var details2= parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();

console.log(details1);
console.log(details2);

// Adding and deleting properties
quayHotel.gym = true;
quayHotel.pool = false;
delete quayHotel.booked;
console.log(quayHotel);

// A function in global scope
function windowSize(){
	var width= this.innerWidth;
	var height = this.innerHeight;
	return [height, width];
}

// Global variables
var width = 600;
var shape = {width: 300};
var showWidth = function(){
	// document.write(this.width);
};
showWidth();

// Global Objects
// String Objects

var saying = 'Home sweet home ';
console.log(saying.length);
console.log(saying.toUpperCase());
console.log(saying.toLowerCase());
console.log(saying.charAt(12));
console.log(saying.indexOf('ee'));
console.log(saying.lastIndexOf('e'));
console.log(saying.substring(8, 14));
console.log(saying.split(' '));
console.log(saying.trim());
console.log(saying.replace('me', 'w'));