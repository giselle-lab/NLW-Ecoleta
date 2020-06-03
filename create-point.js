/*no f12 na pag web no console eu posso rodar js
aqui no arquivo posso executar coisas lá por console.log("Oi")
o objeto document.querySelectorAll("Form input") mostra todas as caixas que precisam de entrada*/

/*codigo para popular as cidades e os estados*/
/*site do ibge
plugin json formatter para ver bonitinho raw permite ver normal 
usando no console do navegador a função fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") ele retorna uma promessa, talvez volte com resultado
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){console.log(res.json)})
quando fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){ return res.json }).then(function(data){console.log(data)})*/

/*document.querySelector("select[name=uf]")
.addEventListener("change",()=>{
   console.log("mudei") /**|essa funça se chama arrow function ()=>{} */
//} )/**essa funçao detecta varios eventos quando por a pag carrega */

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{return res.json()})//ou res => res.json()
    .then(states =>{
        for(const state of states){
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()//executando

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    //console.log(event.target.value)
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json())//ou  (res)=>{return res.json()}
    .then(cities =>{
        for(const city of cities){
            citySelect.innerHTML += `<option value = "${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]")
.addEventListener("change",getCities)
//console.log("mudei") /**|essa funça se chama arrow function ()=>{} */
/**essa funçao detecta varios eventos quando por a pag carrega */
