import { createInitialPositions } from '../util.js';

export default function positionsReducer(state = [], action) {
    switch (action.type) {
        case 'MOVE_TILE':
            let movedTiles = state.map(row => row.slice());
            action.updates.map(update => movedTiles[update.row][update.col] = update.value);
            return movedTiles;
        case 'RESET_TILES':
            return createInitialPositions(4);
        default:
            return state;
    }
}
