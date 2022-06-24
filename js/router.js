export class Router{

routes = {}

add(routeName,page){
this.routes[routeName] = page
}

route(event){
event = event || window.event

event.preventDefault()

window.history.pushState({},"",event.target.href)

this.handle()
}

handle(){
const{ pathname } = window.location
const route = this.routes[ pathname] || this.routes[404]

this.pageStyle(pathname)


fetch(route)
.then(data => data.text())
.then(html =>{document.getElementById('app').innerHTML = html })
}


pageStyle(pathname){
  let body = document.querySelector('body')
  function resetColor(){
    buttonNav.exploration.style.color = "var(--color-unset-nav)"
    buttonNav.home.style.color = "var(--color-unset-nav)"
    buttonNav.universe.style.color = "var(--color-unset-nav)"
  }
  
  
  
  let buttonNav = {
    universe: document.getElementById('universe'),
    exploration:document.getElementById('exploration'),
    home:document.getElementById('home')
  }


switch(pathname){

case '/universe':{
  body.style.background = 'var(--img-universe)'
  body.style.backgroundSize = '100vw 100vh'
  resetColor()
  buttonNav.universe.style.color = 'white'

  break
}
case '/exploration':{
  body.style.background = 'var(--img-exploration)'
  body.style.backgroundSize = '100vw 100vh'

  resetColor()
  buttonNav.exploration.style.color = 'white'

  break
}
default:
  {
    body.style.background = 'var(--img-home)'
    body.style.backgroundSize = '100vw 100vh'
    resetColor()
  buttonNav.home.style.color = 'white'
  body.style.backgroundRepeat = 'no-repeat'
  body.style.backgroundSize = '100vw 100vh'

} 
  

}






}



}
