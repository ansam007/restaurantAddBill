// window.addEventListener("DOMContentLoaded", async ()=>{
    
//     async function getDeleteButton(obj) {
//         var deleteBtn = document.createElement('button');
//         deleteBtn.id = 'delete_' + obj._id;
        
//         deleteBtn.textContent = 'Delete';

//         deleteBtn.addEventListener('click',async function (){
//             try{
//             await axios.delete("https://crudcrud.com/api/86939bca180648aab1e80bc84956e731/orders/" + obj._id)
//                 deleteBtn.parentElement.remove();
//             }
//             catch(err){
//                 console.error(err);
//             }
//         })

//         return deleteBtn;
//     }

//     async function getTableRow(obj) {
//         var li = document.createElement('li');
//         var text = "Price : " + obj.price + "," +  " Dish Ordered : " + obj.dish + "," + " Table : " + obj.table;
//         li.textContent = text;
//         li.id = 'row_' + obj._id;
//         li.appendChild(await getDeleteButton(obj));
//         return li;
//     }

//    async function display(obj){
//         var x = document.querySelector("#"+obj.table);
//         x.appendChild(await getTableRow(obj));
//     }
    
//     try{
//         const res = await axios.get("https://crudcrud.com/api/86939bca180648aab1e80bc84956e731/orders")
//         res.data.forEach(async (obj)=>{
//           await display(obj);  
//         })
//     }catch(err){
//         console.error(err);
//     } 
// })



// async function addFunction(){

//     var li = document.createElement('li');  

//     var obj = {
//         price: document.querySelector("#Price").value,
//         dish: document.querySelector("#Dish").value,
//         table: document.querySelector("#Category").value,
//     }

//     var deleteBtn = document.createElement('button');
//     deleteBtn.id = 'deleteButton';
//     deleteBtn.textContent = 'Delete';

//     try{
//         const res = await axios.post("https://crudcrud.com/api/86939bca180648aab1e80bc84956e731/orders", obj)
//         await showOutput(res);
//     } catch(err){
//         console.error(err);
//     }

//    async function showOutput(param){
//         var text = "Price : " + param.data.price + "," +  " Dish Ordered : " + param.data.dish + "," + " Table : " + param.data.table;
//         li.textContent = text;
//         li.appendChild(deleteBtn);
//         var x = document.querySelector("#Category").value;
//         document.querySelector('#'+x).appendChild(li);

//         deleteBtn.addEventListener('click', async function (){
//             try {
//                 await axios.delete("https://crudcrud.com/api/86939bca180648aab1e80bc84956e731/orders/" + param.data._id)
//                 deleteBtn.parentElement.remove();
//             } catch(err){
//             console.error(err);
//             }
//         })
//     }

// }

const button = document.querySelector('button');
let modal;
let backdrop;
button.addEventListener("click", ()=>showModalHandler());

function showModalHandler(){
    if(modal){
        return 
    }

    modal = document.createElement('div');
    const modalText = document.createElement('p');
    modalText.textContent = "Are you Sure ?";
    
    const modalCancelAction = document.createElement('button');
    modalCancelAction.textContent = "cancel";
    modalCancelAction.addEventListener('click', ()=>closeModalHandler());

    const modalConfirmAction = document.createElement("button");
    modalConfirmAction.textContent = "confirm";
    modalConfirmAction.addEventListener('click', ()=>closeModalHandler());

    modal.append(modalText);
    modal.append(modalCancelAction);
    modal.append(modalConfirmAction);

    document.body.append(modal);

    backdrop = document.createElement('div');
    backdrop.addEventListener('click', ()=>closeModalHandler());
}
function closeModalHandler(){
    modal.remove();
    modal = null;

    backdrop.remove();
    backdrop = null;
}

