document.querySelector(".boutton-plats1").addEventListener("click" ,() =>fonction("all"))
document.querySelector(".boutton-plats2").addEventListener("click" ,() =>fonction("pizza"))
document.querySelector(".boutton-plats3").addEventListener("click" ,() =>fonction("autre"))
function fonction(type){
    const element_parent = document.querySelectorAll(".contenaire-div")
    for(element of element_parent){
        if(type === "all" || element.getAttribute("data-type") === type){
                 element.style.display="block"
        }
        else{
            element.style.display="none"
        }
    }   
}

// la partie du code pour l'envois du message 

const nom_input = document.querySelector("#nom")
const numero_input= document.querySelector("#numero")
const boutton_formulaire = document.querySelector("envoie-formulaire")
document.querySelector("form").addEventListener("submit" ,(e)=>{
       if(nom_input.value == "" && numero_input.value == ""){
          //console.log("vide")
          e.preventDefault();
       }
       else{
          let url = `https://wa.me/${numero_input}?text=Bonjour,je m'appele ${nom_input}`
          window.open(url, '_blank');
       }
})




/* la methode numero pour filtre les nourritures 
const boutton = document.querySelectorAll(".boutton-plats")
const element_parent = document.querySelector(".contenaire-globale-div")
console.log(boutton)

function tous(){
    document.querySelector("#conternaire-div1").style.display="block"
    document.querySelector("#conternaire-div2").style.display="block"
    document.querySelector("#conternaire-div3").style.display="block"
}
function pizza(){
    document.querySelector("#conternaire-div1").style.display="block"
    document.querySelector("#conternaire-div2").style.display="block"
    document.querySelector("#conternaire-div3").style.display="none"
}
function autre(){
    document.querySelector("#conternaire-div1").style.display="block"
    document.querySelector("#conternaire-div2").style.display="none"
    document.querySelector("#conternaire-div3").style.display="none"
}
document.querySelector(".boutton-plats1").addEventListener("click" ,tous)
document.querySelector(".boutton-plats2").addEventListener("click" ,pizza)
document.querySelector(".boutton-plats3").addEventListener("click" ,autre)

*/



/*let element = document.querySelector(".contenaire-text-h1")

const observer  = new IntersectionObserver((entris) =>{
    console.log(entris)
    for(let entre of entris){
        if(entre.isIntersecting){
           element.classList.add('visible')
         }
    }
   
})
observer.observe(document.querySelector(".contenaire-text-h1"))
*/