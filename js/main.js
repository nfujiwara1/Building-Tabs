// const tabby = document.querySelector('.tabby')
// const tabs = tabby.querySelectorAll('.tab')
// const tabContents = tabby.querySelectorAll('.tab-content')

// tabs.forEach(function(tab){
//   tab.addEventListener('click',()=>{
//     // console.log(tab)
//     const target = tab.dataset.target
//     // console.log(target)
//     const tabContent = tabby.querySelector('#'+ target)
//     // console.log(tabContent)

//     tabs.forEach(t=>t.classList.remove('is-selected'))
//     tab.classList.add('is-selected')

//     tabContents.forEach(x=>x.classList.remove('is-selected'))
//     tabContent.classList.add('is-selected')
//   })
// })

// Practice02
const tabby = document.querySelector('.tabby') // Select div eleemnt for the entire tab content
const tabs = tabby.querySelectorAll('.tab') // Select tab elements
const tabContents = tabby.querySelectorAll('.tab-content') // Select tab content elements

tabs.forEach(function(tab){ // Loop through each tab element and add event listener
  tab.addEventListener('click',()=>{
    // console.log(tab) // tab is the element gets selected
    const target = tab.dataset.target
    console.log(target) // target is the element being selected
    const tabContent = tabby.querySelector('#'+ target)
    // console.log(tabContent) // tabContent is the content element correspond to the selected tab element

    tabs.forEach(t=>t.classList.remove('is-selected')) // removing the class 'is-selected' from the tab element
    tab.classList.add('is-selected') // adding the class 'is-selected' to the tab element

    tabContents.forEach(x=>x.classList.remove('is-selected')) // removing the class 'is-selected' from the tab content element
    tabContent.classList.add('is-selected') // adding the class 'is-selected' to the tab content element
  })
})