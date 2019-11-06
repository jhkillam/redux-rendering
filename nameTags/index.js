const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const newNameForm = document.getElementById('nameForm')
const newNameInputField = document.getElementById('inputField')

newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    let newName = newNameInputField.value
    // console.log('new name submitted: ' + newName)
    dispatch({ type: 'NEW_NAME', newName })
    newNameInputField.value = ''
})