var departments = require('./data/departments.json');
var employees = require('./data/employees.json');
const fs = require('fs');



var employing = [];
var departing = [];
function initialize(){
	return new Promise(function(resolve, reject){
	fs.readFile('./data/employees.json', function read(err, data) {
    if (err) {
        throw err;
		reject(err)
    } else {
    employing = JSON.parse(data);
    fs.readFile('./data/departments.json', function read(err1, data1) {
    if (err) {
        throw err1;
		reject(err1)
    } else {
    departing = JSON.parse(data1);
    resolve(employing, departing);   
    
    }
	});
    }
	});		
	})	
}

function getAllEmployees(){
	return new Promise(function(resolve, reject){
		if (employing.length == 0){
			reject('sorry array empty')	
		} else {
			resolve(employing);
		}
		
	})
	
	
	
}
function getDepartments(){
	return new Promise(function(resolve, reject){
		if (employing.length == 0){
			reject('sorry array empty')	
		} else {
			resolve(departing);
		}
		
	})
	
	
	
}
function getManagers(){
	return new Promise(function(resolve, reject){
		var manager = [];
		for (let i = 0; i < employing.length; i++){
			console.log(employing[i]);
			if (employing[i].isManager == true){
				manager.push(employing[i]);
				
			}
		}
		resolve(manager);
	
	})
	
	
	
}


module.exports = {
	init:initialize,
	emp:getAllEmployees,
	dep:getDepartments,
	manage:getManagers
}