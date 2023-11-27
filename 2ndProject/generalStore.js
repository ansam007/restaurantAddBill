var btn = document.querySelector('#addItem');

btn.addEventListener('click', function () {
    var obj = {
        item: document.querySelector('#itemName').value,
        itemDescription: document.querySelector('#description').value,
        cost: document.querySelector('#price').value,
        quantity: document.querySelector('#quantity').value
    }

    axios.post("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data", obj)
    .then((res) => {
        showOutput(res.data);
    })
    .catch((err) => {
        console.error(err);
    })

    function showOutput(param) {
        var ul = document.querySelector('#print');
        var li = document.createElement('li');
        var text = "Item: " + param.item + ", Description: " + param.itemDescription + ", Cost: " + param.cost + ", Quantity: " + param.quantity;
        li.textContent = text;
        
        var buyBtn = document.createElement('button');
        buyBtn.id = 'buy_' + param._id; 
        buyBtn.textContent = 'Buy_1';
        
        li.appendChild(buyBtn);
        ul.appendChild(li);
        
        buyBtn.addEventListener('click', function () {
            axios.put("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data/" + param._id, {
                item: param.item,
                itemDescription: param.itemDescription,
                cost: param.cost,
                quantity: param.quantity - 1
            })
            .then(() => {
                return axios.get("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data/" + param._id);
            })
            .then((res) => {
                const updatedItem = res.data;
                buyBtn.parentElement.remove();
                li.textContent = "Item: " + updatedItem.item + ", Description: " + updatedItem.itemDescription + ", Cost: " + updatedItem.cost + ", Quantity: " + updatedItem.quantity;
                li.appendChild(buyBtn);
                ul.appendChild(li);
                param.quantity = updatedItem.quantity;
            })
            .catch((err) => {
                console.error(err);
            })
        });
    }
});

window.addEventListener("DOMContentLoaded", function(){
    axios.get("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data")
    .then((res)=>{
        res.data.forEach((param)=>{
            showOutput2(param)
        })
    })
    .catch((err)=>{
        console.error(err)
    })

    function showOutput2(param) {
        var ul = document.querySelector('#print');
        var li = document.createElement('li');
        var text = "Item: " + param.item + ", Description: " + param.itemDescription + ", Cost: " + param.cost + ", Quantity: " + param.quantity;
        li.textContent = text;
        
        var buyBtn = document.createElement('button');
        buyBtn.id = 'buy_' + param._id; 
        buyBtn.textContent = 'Buy_1';
        
        li.appendChild(buyBtn);
        ul.appendChild(li);
        
        buyBtn.addEventListener('click', function () {
            axios.put("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data/" + param._id, {
                item: param.item,
                itemDescription: param.itemDescription,
                cost: param.cost,
                quantity: param.quantity - 1
            })
            .then(() => {
                return axios.get("https://crudcrud.com/api/baf3aad6c8764cbcba1dde8e3c1f4745/data/" + param._id);
            })
            .then((res) => {
                const updatedItem = res.data;
                buyBtn.parentElement.remove();
                li.textContent = "Item: " + updatedItem.item + ", Description: " + updatedItem.itemDescription + ", Cost: " + updatedItem.cost + ", Quantity: " + updatedItem.quantity;
                li.appendChild(buyBtn);
                ul.appendChild(li);
                param.quantity = updatedItem.quantity;
            })
            .catch((err) => {
                console.error(err);
            })
        });
    }
})



