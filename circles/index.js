const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const randomCircleBtn = document.getElementById('addCircle')

randomCircleBtn.addEventListener('click', e => {
  console.log('clicked button')
  dispatch({ type: 'ADD_CIRCLE' })
})
