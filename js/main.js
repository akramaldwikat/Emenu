
function changeToJod() {
    let currency = document.getElementById('currency')
    let myCurrency = currency.textContent;
    let getPrice = document.getElementById('prices');
    let myPrice = getPrice.textContent;
    if (myCurrency === "USD") {
        let newPrice = myPrice;
        jQuery("div.price").replaceWith(`<div class="price">
        <span id='prices'>${newPrice}</span>
        <span id='currency'>JOD</span></div`);
    }
}

function changeToUsd() {
    let currency = document.getElementById('currency')
    let myCurrency = currency.textContent;
    let getPrice = document.getElementById('prices');
    let myPrice = getPrice.textContent;
    if (myCurrency === "JOD") {
        let newPrice = myPrice;
        jQuery("div.price").replaceWith(`<div class="price">
        <span id='prices'>${newPrice}</span>
        <span id='currency'>USD</span></div`);
    }
}
