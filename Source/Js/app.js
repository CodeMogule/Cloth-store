
const btn = document.querySelectorAll(".main-nav li")
const product = document.querySelectorAll('.products')



for(let x = 0 ; btn.length>x ; x++){
    btn[x].addEventListener("click",function(ele){

        ele.preventDefault()
        const filtering = ele.target.dataset.filter;
        //console.log(filtering)

        product.forEach((eProduct) => {
            if(filtering === 'all'){
                eProduct.style.display = 'block'
            } else if (eProduct.classList.contains(filtering)){
                eProduct.style.display = 'block'
            }else{
                eProduct.style.display = 'none'
            }
        })
    })
}

const textBox = document.querySelector('.search input')

textBox.addEventListener('keyup',function(ele){
const searchVal = ele.target.value.toLowerCase().trim()

product.forEach((items)=>{
if(items.textContent.includes(searchVal)){
    items.style.display = 'block'
} else if(searchVal === ''){
    items.style.display = 'block'
}
else{
    items.style.display = 'none'
}
})
})

