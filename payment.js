const selected = localStorage.getItem('selected');

console.log(selected)

const paymentText = document.querySelector('.payment-text').innerHTML = `Your total is: $${selected}.00`