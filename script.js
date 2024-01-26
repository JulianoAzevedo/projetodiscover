function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
   /* if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/


  // tem que pegar a tag img
  const img = document.querySelector("#profile img")
 
  //substituir a imagem
  if (html.classList.contains('light')) {
     // se tiver light mode colocar a imagem light
    img.setAttribute('src', './assets/avatar-light.png') 
  } else {
    // se não tiver light manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')}
}
  



 

  

  
  
