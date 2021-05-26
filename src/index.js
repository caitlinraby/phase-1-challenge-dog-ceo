console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

document.addEventListener("DOMContentLoaded", fetchContent)

function fetchContent(e){
    
    fetch (imgUrl)
    .then (res => res.json()) //parses the response as json
    .then (data => addDogPics(data.message))//the data you're fetching

    
}

function addDogPics(data){

const imageContainer = document.querySelector('div#dog-image-container')
data.forEach( (url) => {
    const newImg = document.createElement('img')
    newImg.src = url
    imageContainer.append(newImg)
})

}