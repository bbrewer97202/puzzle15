export default function movesReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_MOVE_COUNT':
            return state + 1;
        case 'SET_MOVE_COUNT':
            return action.count;
        default:
            return state;
    }
}
