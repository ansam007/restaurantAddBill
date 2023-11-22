window.addEventListener("DOMContentLoaded", ()=>{
    
    function getDeleteButton(obj) {
        var deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete_' + obj._id;
        deleteBtn.appendChild(document.createTextNode('Delete'));

        deleteBtn.addEventListener('click', function (){
            axios.delete("https://crudcrud.com/api/f807c5761b84407aa184a2f26bb8b149/orders/" + obj._id)
            .then((res)=>{
                deleteBtn.parentElement.remove();
            })
            .catch((err)=>{
                console.error(err);
            })
        })

        return deleteBtn;
    }

    function getTableRow(obj) {
        var li = document.createElement('li');
        var text = "Price : " + obj.price + "," +  " Dish Ordered : " + obj.dish + "," + " Table : " + obj.table;
        li.textContent = text;
        li.id = 'row_' + obj._id;
        li.appendChild(getDeleteButton(obj));
        return li;
    }

    function display(obj){
        var x = document.querySelector("#"+obj.table);
        x.appendChild(getTableRow(obj));
    }
    
    axios.get("https://crudcrud.com/api/f807c5761b84407aa184a2f26bb8b149/orders")
    .then((res)=>{
        res.data.forEach((obj)=>{
          display(obj);  
        })
    })
    .catch((err)=>{
        console.error(err);
    })  
})



function addFunction(){

    var li = document.createElement('li');  

    var obj = {
        price: document.querySelector("#Price").value,
        dish: document.querySelector("#Dish").value,
        table: document.querySelector("#Category").value,
    }

    var deleteBtn = document.createElement('button');
    deleteBtn.id = 'deleteButton';
    deleteBtn.appendChild(document.createTextNode('Delete'));

    axios.post("https://crudcrud.com/api/f807c5761b84407aa184a2f26bb8b149/orders", obj)
    .then((res)=>{
        showOutput(res);
    })
    .catch((err)=>{
        console.error(err);
    })

    function showOutput(param){
        var text = "Price : " + param.data.price + "," +  " Dish Ordered : " + param.data.dish + "," + " Table : " + param.data.table;
        li.textContent = text;
        li.appendChild(deleteBtn);
        var x = document.querySelector("#Category").value;
        document.querySelector('#'+x).appendChild(li);

        deleteBtn.addEventListener('click', function (){
            axios.delete("https://crudcrud.com/api/f807c5761b84407aa184a2f26bb8b149/orders/" + param.data._id)
            .then((res)=>{
                deleteBtn.parentElement.remove();
            })
            .catch((err)=>{
            console.error(err);
            })
        })
    }

}



