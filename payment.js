const selected = localStorage.getItem('selected');

console.log(selected)

const paymentText = document.querySelector('.payment-text').innerHTML = `Your total order is: $${selected}`