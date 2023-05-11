const nameField = document.getElementById('name')

let saveButton = document.getElementById('save-button')
let clearButton = document.getElementById('clear-button')

saveButton.addEventListener('click', function (e) {
    e.preventDefault() 
    const newUser = nameField.value

localStorage.setItem('newUser', newUser)
    nameField.value = ''
     renderList()
  console.log(renderList())
})

  clearButton.addEventListener('click', function () {
    localStorage.removeItem('newUser')
    nameField.value = ''
  })

 
 
