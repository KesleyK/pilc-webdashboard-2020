import {createStore} from  'redux';

const InitialState = {user:{token: null, conta: null, matricula: null, email: null, img: null, diretorio: null}}

function usuario(state = InitialState, action) {
    switch (action.type){
        case 'Login':
            let payload = JSON.parse(atob(action.token.split('.')[1]));
            return {...state, user:{...payload, token: action.token}};
        case 'Logout':
            return InitialState;

        default:
            return state;
    }
}

const store = createStore(usuario);

export default store;