
const subtotal = 100.00;
const taxRate = 0.10;
const shippingFee = 5.00;

const tax = subtotal * taxRate;
const total = subtotal + tax + shippingFee;

document.getElementById('subtotal').textContent = subtotal.toFixed(2);
document.getElementById('tax').textContent = tax.toFixed(2);
document.getElementById('shipping').textContent = shippingFee.toFixed(2);
document.getElementById('total').textContent = total.toFixed(2);



document.querySelector('form').addEventListener('submit', function (e) {
   const cvv = document.getElementById('stacked-Cvv').value;
   if (cvv.length !== 3 || isNaN(cvv)) {
       e.preventDefault();
       alert('CVV must be a 3-digit number.');
   }
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
   event.preventDefault();
   // Add your form submission logic here
   alert('Payment submitted successfully!');
});