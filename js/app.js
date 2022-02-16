//for showing the date
const date = new Date()
document.getElementById('show-date').innerText = date.toLocaleDateString();

/*
submit button and buyer details: (x)
1.click button detect
2.get input field
3.get invoice id
4.connect the buyer details to invoice with button click
*/
document.getElementById('detail-submit-btn').addEventListener('click', function () {
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerHTML = buyerDetails.value;
    buyerDetails.value = '';
});

const addButton = document.getElementById('add-details-btn');
addButton.addEventListener('click', function () {
    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById(
        'item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');
    const fail = document.getElementById('not-applied-text');
    const totalPrice = parseInt(itemPrice.value) + parseInt(itemQuantity.value);
    const tr = createElement('tr');
    const th = createElement('th');
    const td1 = createElement('td');
    const td2 = createElement('td');
    const td3 = createElement('td');
    if (itemName.value == '' ||
        itemPrice.value < 0 ||
        itemPrice.value == '' ||
        itemQuantity.value < 0 ||
        itemQuantity.value == '') {
        return fail.style.display = 'block';
    }
    //create a class for total item in td3
    td3.classList.add('item-total'); 
    //get the value of table body from input value
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    totalCalculation();
})

// create element function for reuse
function createElement(param) {
    return document.createElement(param);
}
// calculate total
function totalCalculation(){
    const subTotal = calculateSubtotal();
    const subTotalDisplay = document.getElementById('sub-total');
    subTotalDisplay.innerText = subTotal;
    const tax = subTotal * 0.2;;
    document.getElementById('tax').innerText = tax.toFixed(3);
    document.getElementById('grand-total').innerText = subTotal + tax;
    document.getElementById('grand-total-2').innerText = subTotal + tax;
}
// calculate subtotal
function calculateSubtotal() {
    let subtotal = 0;
    const costs = document.getElementsByClassName('item-total');
    for (const cost of costs){
        const price = parseInt(cost.innerText);
        subtotal += price;
    }
    return subtotal;
}

// reset

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('info-table').innerText = '';
    document.getElementById('sub-total').innerText = '';
    document.getElementById('tax').innerText = '';
    document.getElementById('grand-total').innerText = '';
    document.getElementById('grand-total-2').innerText = '';
})