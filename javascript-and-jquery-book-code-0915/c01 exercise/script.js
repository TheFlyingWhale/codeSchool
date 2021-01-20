let today = new Date();
console.log(today);
let hourNow = today.getHours();
console.log(hourNow);
let greeting;

if(hourNow > 18){
    greeting = 'Good evening!';
}else if(hourNow > 12){
    greeting = 'Good afternoon!';
}else if(hourNow > 0){
    greeting = 'Good morning!';
}else{
    greeting = 'Welcome!';
}
console.log(greeting);

document.write(`<h3>${greeting}</h3>`);