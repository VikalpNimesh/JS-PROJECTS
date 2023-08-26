

const input = document.querySelector('input[name="quantity"]')
const btn = document.querySelector('.btn')
const selected = document.querySelector('select[name="currency"]')
const tbody = document.querySelector('tbody')
// console.log(input);
// console.log(selected);


const populate =async(value,currency)=>{
      const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_OwN4WBUhjUPmxZPC1EzjHZR8fock0GVLQfBosdDI&base_currency=${currency}`
     const response = await fetch(url)
     const rjson = await response.json()
    //  console.log(rjson);
     document.querySelector('.output').style.display= "block"
     let mystr = ''
    for (let key of Object.keys(rjson["data"])) {
        mystr +=`
        <tr>
        <td>${key}</td>
        <td>${rjson["data"][key]["code"]}</td>
        <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
        </tr> 
        
        `
       
        tbody.innerHTML=mystr
    }

    

 }
btn.addEventListener('click',function(e){
    e.preventDefault()

    const value = +input.value
    const currency = selected.value
   
    populate(value,currency)
    
 })


