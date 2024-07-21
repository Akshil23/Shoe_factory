const order = {};
function addToOrder(product, price, quantityId) 
{
    const quantity = prompt(`Enter The Quntity for ${product} : `)
    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please Enter Numeric Quantity");
    }
    // if I already have quantity
    if (order[quantity]) 
        {
        order[product].quantity += Number(quantity);
    } else 
    {
        order[product] = { price: price, quantity: Number(quantity) }
    }
    document.getElementById(quantityId).textContent = `Quantity : ${order[product].quantity}`;

}

function checkout() {
    const customerName = prompt(`Enter Your Name to Place the Order: `)
    if (!customerName) {
        alert("Name Is Required")
    }
    console.log(customerName);
    let receipt = `<h2> Receipt for ${customerName}</h2>`;
    console.log(receipt)
    let total = 0;
    let count = 0;
    for(const[product, details] of Object.entries(order))
    {
        if(details.quantity >0)
        {
            
            const cost = details.price * details.quantity;
            receipt+=`<li> ${product} : ${details.quantity} X $ ${details.price} = $${cost}</li>`;
            total +=cost;
            count+= details.quantity;
        }
    }

    const tax = total *0.13; // 13% Tax Calculation
    const totalWithTax = total + tax;
    receipt+=`<p>Number of Items in Cart  : ${count}</p>`;
    receipt+=`<p>subtotal  : $${total}</p>`;
    receipt+= `<p> Tax (13%) : $${tax} </p>`;
    receipt+= `<p> TOTAL : $${totalWithTax} </p>`;
    
    document.getElementById('receipt').innerHTML = receipt;
}