/*
createElement()
JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

appendChild()
The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.
*/


const articleMessages = document.querySelector(".messages") 
const frag = document.createDocumentFragment()



// section 1
const sect1 = document.createElement("section")
sect1.classList.add("message")
const msg = "Hi, Tay"
sect1.textContent = msg
frag.appendChild(section)

// section 2
const sect2 = document.createElement("section")
sect2.classList.add("message")
const msg = "What's going on tonight?"
sect2.textContent = msg
articleMessages.appendChild(section)

// section 3 
const sect3 = document.createElement("section")
sect3.classList.add("message")
const msg = "We're all rewatching Game of Thrones at my place."
sect3.textContent = msg
frag.appendChild(section)

// section 4
const sect4 = document.createElement("section")
sect4.classList.add("message")
const msg = "Sweet! I'll bring some drinks. Ya'll need anything else?"
sect4.textContent = msg
frag.appendChild(section)

// section 5
const sect5 = document.createElement("section")
sect5.classList.add("message")
const msg = "Nah, we're pretty straight on the food game. THNX."
sect5.textContent = msg
frag.appendChild(section)


articleMessages.appendChild(frag)

// console.log(sectComp1())
// console.log(sectComp2())
// console.log(sectComp3())
// console.log(sectComp4())
// console.log(sectComp5())