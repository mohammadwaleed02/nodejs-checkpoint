// task: 1
console.log("HELLO WORLD");

//task 2:
const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

//task 3:
const fs = require('fs');

fs.writeFileSync("welcome.txt", "Hello Node", (err, data) => {
    if (err) {
        console.log("Try again!");
    } else {
        console.log("Successful")
    }
});

//task 4: 
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);

//task 5:
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '**************@gmail.com',
    pass: 'wstrzrsrndnbizew'
  }
});

var mailOptions = {
  from: '**************@gmail.com',
  to: '**************@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});