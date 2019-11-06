const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    console.log(initialState)
    console.log(state)
    // ACTION: Add a random circle
    if (type === 'ADD_CIRCLE') {
        return [
            ...state, {
                radius: (Math.floor(Math.random() * 100)),
                color: '#' + (Math.floor(Math.random()*16777215).toString(16))
            }
        ]
    }
    return state;
}