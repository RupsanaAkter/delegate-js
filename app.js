/*const items=document.getElementsByClassName('item');
for(let item of items){
item.addEventListener('click',function(event){
   
   
   //system-1----------without event-------
    // document.getElementById("list-container").removeChild(item);


 event.target.parentNode.removeChild(event.target);
})
}*/


////add item------------
document.getElementById('add-item').addEventListener('click',function(){
    const li=document.createElement('li');
    li.innerText='lorem2';
    li.classList.add('item');//add for next step it means button click add and delegate-----
    const ul=document.getElementById('list-container');
    ul.appendChild(li);

})



///add ----and delegate--------

document.getElementById('list-container').addEventListener('click',function(event){
event.target.parentNode.removeChild(event.target);
})