// console.dir(document)
// ! examine dom

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log('here')
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)
// let title = document.getElementById('header-title')
// let header = document.getElementById('main-header')
// console.log(title)
// title.textContent = 'Hello'
// title.innerText = 'Buang'
// console.log(title.innerText)
// title.innerHTML = '<h3>yawa</h3>'
// console.log(title)
// header.style.borderBottom = '3px solid black'
//  ! get elements by class name

// let items = document.getElementsByClassName('list-group-item')
// items[1].textContent = 'Buang'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }
// ! get element by tag name

// let li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = 'Buang'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }
// console.log(li[1])

//! query selectors 

// var header = document.querySelector('#main-header')
// header.style.borderBottom = '5px solid blue'

// var input = document.querySelector('input')
// input.value = 'hello'
// var submit = document.querySelector('input[type="submit"]')

// submit.value = 'SEND'

// let items = document.querySelector('.list-group-item')
// items.style.fontWeight = 'bold'

// let lastChild = document.querySelector('.list-group-item:last-child')

// lastChild.style.color = 'red'

// let secondChild = document.querySelector('.list-group-item:nth-child(2)')

// secondChild.style.color = 'coral'


// ! query selector all 

// let titles = document.querySelectorAll('.title')
// titles[0].textContent = 'Hello'
// console.log(titles)

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')



// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'blue';
//     even[i].style.backgroundColor = '#c5c5c5'                                                                                                                                                                                                  
// }

// ! traversing the dom
let itemList = document.querySelector('#items')
// ? parent node
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#c6c6c6'
// console.log(itemList.parentNode.parentNode)
// ? parent element
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#c6c6c6'
// console.log(itemList.parentElement.parentElement)

// ? child node
// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// ? first child
// console.log(itemList.firstChild)

// ? first element child
// console.log(itemList.firstElementChild + 'hello')
// itemList.firstElementChild.textContent = 'hello 1'

// ? last child
// console.log(itemList.firstChild + 'hey')

// ? last element child
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild + 'hello')
// itemList.lastElementChild.textContent = 'hello 4'
// itemList.lastElementChild.style.backgroundColor = 'red'

//? next sibling
// console.log(itemList.nextElementSibling)
//? previous sibling 
// console.log(itemList.previousSibling)
//? previous element
// console.log(itemList.previousElementSibling)

//? create element

// ** create div

let newDiv = document.createElement('div')
// * add class
newDiv.className = 'hello'
// * add id
newDiv.id = 'hello1'

// * SET ATTRIBUTE
newDiv.setAttribute('title', 'new div')

// * CREATE TEXT NODE
let newDivText = document.createTextNode('hello world')
//* ADD TEXT TO DIV
newDiv.appendChild(newDivText)


let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')

console.log(newDiv)

newDiv.style.fontSize = '30px'
newDiv.style.textTransform = 'uppercase'
container.insertBefore(newDiv , h1)





