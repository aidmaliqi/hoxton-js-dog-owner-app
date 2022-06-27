console.log(data);

// WRITE YOUR CODE BELOW!

/* - You'll find a variable called data in the console.log. That's your list of dogs
- Render the top list of dogs using the list item template you'll find on the HTML file
- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles for the selected dog between good dog/ bad dog

Tips
- Take advantage of scope in JS to have access to the data you need
- Remember you can add event listeners to any element on the page */

let mainSection = document.querySelector('.main__dog-section')



function createHeaderItems (dog) {

    let headerList = document.querySelector('.dogs-list')

    let headerLiIt = document.createElement('li')
    headerLiIt.className = 'dogs-list__button '
    headerLiIt.textContent = dog.name

    headerLiIt.addEventListener('click', function () {
      createDogCard (dog)
    })

    headerList.appendChild(headerLiIt)
}

   function createDogCard(dog) {
    mainSection.textContent = ''

    let dogName = document.createElement('h2')
    dogName.textContent = dog.name

    let dogImage = document.createElement('img')
    dogImage.src = dog.image
    dogImage.alt = ''

    let h3El = document.createElement('h3')
    h3El.textContent = "Bio"
    
    let loremParagraph = document.createElement("p")
    loremParagraph.textContent = dog.bio
    let emEl = document.createElement('em')
    emEl.textContent = `Is naughty?`

    let naughtyP = document.createElement("p")
    naughtyP.append( emEl , dog.isGoodDog ? ' Yes !' : ' No !')
    //naughtyP.style.textEmphasis

    let buttonEl = document.createElement('button')
    buttonEl.className = 'main__dog-section__btn'
    buttonEl.textContent = dog.isGoodDog ? ' Bad dog': ' Good dog'

    buttonEl.addEventListener('click', function() {
      if (dog.isGoodDog) {
        !dog.isGoodDog 
      } else {
        !dog.isGoodDog 
      }
      //dog.isGoodDog = !dog.isGoodDog
      
      createDogCard(dog)
    })

    let textDiv = document.createElement('div')
    textDiv.className = 'main__dog-section__desc'

    textDiv.append(h3El, loremParagraph )

    mainSection.append(dogName, dogImage , textDiv, naughtyP, buttonEl)
 
}
    

    
for (let dog of data) {
  createHeaderItems (dog)}

