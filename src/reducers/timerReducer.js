//https://github.com/reactjs/redux/issues/1194
const initialState = {
    enabled: false,
    active: false,
    time: 0
}

export default function timerReducer(state = initialState, action) {
    switch (action.type) {
        case 'ENABLE_TIMER':
        console.log('ENABLE_TIMER reducer');
            return {
                ...state,
                enabled: true
            };
        case 'DISABLE_TIMER':
        console.log('DISABLE_TIMER reducer');
            return {
                ...state,
                enabled: false
            };
        case 'START_TIMER':
            return {
                ...state,
                active: true,
                enabled: true,
                offset: action.offset
            };
        case 'STOP_TIMER':
            return {
                ...state,
                active: false,
                time: state.time
            };
        case 'RESET_TIMER':
            return {
                ...state,
                active: false,
                time: 0
            };
        case 'TICK':
            return {
                ...state,
                time: state.time + (action.time - state.offset),
                offset: action.time
            };
        default:
            return state;
    }
}
