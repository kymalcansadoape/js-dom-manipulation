let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(eventObject) {

    eventObject.preventDefault();
    // ! get input value
    let newItem = document.getElementById('item').value;

    // ! Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item'

    // ! add text node with input value;
    li.appendChild(document.createTextNode(newItem));

    //! create delete btn  element
    let deleteBtn = document.createElement('button');

    // ! add classes 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    // ! append button to li
    li.appendChild(deleteBtn);
    // ! append li to item list

    itemList.appendChild(li);
}
function removeItem(eventObject) {
    if (eventObject.target.classList.contains('delete')) {
        if (confirm('syur ka do?')) {
            let li = eventObject.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// ! filter items
function filterItems(eventObject){

    //! convert
    let text = eventObject.target.value.toLowerCase();
    //!  Get list
    let items = itemList.getElementsByTagName('li');
    console.log(items)

    //! convert to array 
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'

        }
    })


}