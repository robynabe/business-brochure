function showMessage(){
    document.getElementById("thank-you").innerHTML = "Thank you for your order!"
}

var orderButton = document.getElementById("btn-order")
orderButton.addEventListener("click", showMessage)

