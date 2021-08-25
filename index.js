const checkoutBtnOne = document.querySelector('.checkout-one');
const checkoutBtnTwo = document.querySelector('.checkout-two');
const checkoutBtnThree = document.querySelector('.checkout-three');

console.log(checkoutBtnOne)

checkoutBtnOne.addEventListener('click', function () {
    localStorage.setItem('selected', '30');
})

checkoutBtnTwo.addEventListener('click', function () {
    localStorage.setItem('selected', '25');
})

checkoutBtnThree.addEventListener('click', function () {
    localStorage.setItem('selected', '35');
})


// Get it from the local storage
const selectedOne = localStorage.getItem('selected');

console.log(selectedOne)