var express = require('express');
var app = express();
var departments = require('./data/departments.json');
var employees = require('./data/employees.json');
var data = require('./data-service.js');
app.use(express.static('public'));
const HTTP_PORT = process.env.PORT || 8080;



 app.get('/', function (req, res) {
	 res.sendFile(__dirname+ '/views/home.html');
	 
	 
 });
 app.get('/home', function (req, res) {
	 res.sendFile(__dirname+ '/views/home.html');
	 
	 
 });
 
 app.get('/about', function (req, res) {
	 
	 res.sendFile(__dirname+ '/views/about.html');
	 
	 
 });

 
 
 
  app.get('/employees', function (req, res) {
	 data.emp().then(function(succ){
		  res.json({
          data:succ
	   })
		 
		 
		 
	 }).catch(function(fail){
		  res.json({
          data:'fail'
	   })
		 
		 
	 });
		
	 
 });
 
  app.get('/managers', function (req, res) {
          data.manage().then(function(succ){
		  res.json({
          data:succ
	   })
		 
		 
		 
	 }).catch(function(fail){
		  res.json({
          data:'fail'
	   })
		 
		 
	 });
 });
  app.get('/departments', function (req, res) {
	 	 data.dep().then(function(succ){
		  res.json({
          data:succ
	   })
		 
		 
		 
	 }).catch(function(fail){
		  res.json({
          data:'fail'
	   })
		 
		 
	 });
		
    
	 
 });
 
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
 
 
 

 
 
 

 
 
 app.listen(HTTP_PORT, function () {
   data.init().then(function(succ){
		console.log('server on!');
		 
		 
		 
	 }).catch(function(fail){
		 console.log('didnt load data');
		 
	 });
  
});

	 