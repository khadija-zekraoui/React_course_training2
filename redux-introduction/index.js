const { createStore } = 'redux';

//the initial state
const initState = {
    todos: [],
    posts: []
}

//create the reducer: receive the state with the action to perform
// it runs ones before any action is dispatched
//set the initial state: 
/* the first time the reducer fires, it uses the initState as a 
default value.
//when we dispatch an action it does some work, and persists the state in the store.*/
function myReducer(state = initState, action){
    //changes the sate based in the action
    console.log(state, action);
    //execute the action and update the store
    if(action.type == 'ADD_TODO') {
        return {
            ...state, //retrieve all state's properties
            todos: [...state.todos, action.todo] // override todos
        }
    }

    if(action.type == 'ADD_POST') {
        return {
            ...state, //retrieve all state's properties
            posts: [...state.posts, action.post] // override todos
        }
    }
}

//create a store
//A reducer is passed
store = createStore(myReducer);

//this function fires when the state is updated
store.subscribe(() => {
    console.log('state update');
    console.log(store.getState());
})

//create an action: the action we want to do and the data we want to persist in the store
const todoAction = {type: 'ADD_TODO', todo: 'buy milk'};
const postAction = {type: 'ADD_POST', post: 'Have a nice day'};

//send the action to de reducer
//we want to add a todo with 'buy milk' as a data
//Actions are dispatched from components
store.dispatch(todoAction);
store.dispatch(postAction);