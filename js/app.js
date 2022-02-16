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
    td3
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
})

// create element function for reuse
function createElement(param) {
    return document.createElement(param);
}