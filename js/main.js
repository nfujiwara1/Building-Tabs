const tabby = document.querySelector('.tabby')
const tabs = tabby.querySelectorAll('.tab')
const tabContents = tabby.querySelectorAll('.tab-content')

tabs.forEach(function(tab){
  tab.addEventListener('click',()=>{
    // console.log(tab)
    const target = tab.dataset.target
    // console.log(target)
    const tabContent = tabby.querySelector('#'+ target)
    // console.log(tabContent)

    tabs.forEach(t=>t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    tabContents.forEach(x=>x.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
  })
})