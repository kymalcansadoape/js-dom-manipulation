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

let titles = document.querySelectorAll('.title')
titles[0].textContent = 'Hello'
console.log(titles)

let odd = document.querySelectorAll('li:nth-child(odd)')
let even = document.querySelectorAll('li:nth-child(even)')



for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'blue';
    even[i].style.backgroundColor = '#c5c5c5';                                                                                                                                                                                                      

}

