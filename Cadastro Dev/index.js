let textH1 =  document.getElementById (`message-start`).innerText
let receiveFullMessage = document.getElementById (`message-start`)

let fullTextBroken = []
for (let i = 0; i < textH1.length ; i++) {
 fullTextBroken.push (`${textH1[i]}`)
}
 const spaceInsert = "" 
textH1 =  document.getElementById (`message-start`).innerText = ""
fullTextBroken.forEach (function (elemento, i) {
  setTimeout (function () {
    receiveFullMessage.innerHTML += `${fullTextBroken[i]}`}, 45 * i)
    })
 
     // codigo que faz a escrita do message-start


const devNameForm = document.getElementById (`name-form`)

 devNameForm.addEventListener (`submit`, function removedInput (ev) {
  ev.preventDefault()
  receiveFullMessage.innerHTML = `Bem-Vindo <span id="user-name"></span>, Insira uma linguagem <span id="cadastro-dev">Front-End</span> abaixo`
  const inputNameValue = document.querySelector (`#name`).value

  const spanSelect = document.getElementById (`user-name`)
  spanSelect.innerText = `${inputNameValue}`
  spanSelect.style = "color: rgb(124, 94, 247); font-weight:900;"

  const removeInput = document.querySelector (`#name`)
  removeInput.parentElement.remove (`#name-form`)

  const styleTech = document.getElementById (`add-tech`)

  styleTech.classList.add (`add-tech`)
})//  o codigo acima pega o nome do usuario e insere na welcome-message


  const jsChoosed = document.getElementById (`javaScript-selected`)
  const htmlChoosed = document.getElementById (`html-selected`)
  const cssChoosed = document.getElementById (`css3-selected`)
  const reactChoosed = document.getElementById (`react-selected`)
  const angularChoosed = document.getElementById (`angular-selected`)
  const vueChoosed = document.getElementById (`vue-selected`)

  const techClimb = document.getElementById (`tech-climb`)
  const showSection = document.getElementById (`hidden-tech`)
  const addTech = document.getElementById (`add-tech`)
  const removeTech = document.getElementById (`tech-remove`)

  addTech.addEventListener (`click`, function (ev) {
    showSection.classList.add (`show`)
  
    techClimb.addEventListener (`click`, function() {
      const selectLanguage = document.getElementById (`tech-name`).value
      const radioSelect = document.querySelector (`input[name="tech-radio"]:checked`).value
      if (selectLanguage === `JavaScript`) {jsChoosed.classList.add (`selected`)
        jsChoosed.innerHTML = `<img src="./img/logo-javascript.svg">`
        jsChoosed.innerHTML += `<p>${radioSelect}</p>` }

      else if (selectLanguage === `Html5`) {htmlChoosed.classList.add (`selected`)
        htmlChoosed.innerHTML = `<img src="./img/html-1.svg">`   
        htmlChoosed.innerHTML += `<p>${radioSelect}</p>`}

      else if (selectLanguage === `Css3`) {cssChoosed.classList.add (`selected`)
        cssChoosed.innerHTML = `<img src="./img/css-3.svg">`
        cssChoosed.innerHTML += `<p>${radioSelect}</p>`}

      else if (selectLanguage === `React`) {reactChoosed.classList.add (`selected`)
        reactChoosed.innerHTML = `<img src="./img/react-2.svg">`
        reactChoosed.innerHTML += `<p> ${radioSelect}</p>`}

      else if (selectLanguage === `Angular`) {angularChoosed.classList.add (`selected`)
        angularChoosed.innerHTML = `<img src="./img/angular-icon-1.svg">`
        angularChoosed.innerHTML += `<p> ${radioSelect}</p>`}

      else if (selectLanguage === `Vue`) {vueChoosed.classList.add (`selected`)
      vueChoosed.innerHTML = `<img src="./img/vue-9.svg">`
      vueChoosed.innerHTML += `<p> ${radioSelect}</p>`}

      showSection.classList.remove (`show`) 
  })
})
      removeTech.addEventListener (`click`, function() {
        showSection.classList.remove (`show`)
      })

     


     const devTechForm = document.getElementById (`form`)

     devTechForm.addEventListener (`submit`, function (ev) {
       ev.preventDefault ()
     
     })
    

