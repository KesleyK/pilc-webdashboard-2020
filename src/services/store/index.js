import {createStore} from  'redux';

const clearState = {user:{token: null, conta: null, matricula: null, email: null, img: null, diretorio: null}}
const InitialState = JSON.parse(localStorage.getItem("InitialState")) || clearState

function usuario(state = InitialState, action) {
    switch (action.type){
        case 'Login':
            let payload = JSON.parse(atob(action.token.split('.')[1]));
            localStorage.setItem("InitialState", JSON.stringify({...state, user:{...payload, token: action.token}}))
            return {...state, user:{...payload, token: action.token}};
        case 'Logout':
            localStorage.clear();
            return clearState;

        default:
            return state;
    }
}

const store = createStore(usuario);

export default store;