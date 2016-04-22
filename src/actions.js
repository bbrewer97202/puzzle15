export const selectTile = (updates) => {
    return {
        type: 'MOVE_TILE',
        updates
    }
};

export const resetTiles = () => {
    return {
        type: 'RESET_TILES'
    }
};

export const countUpdate = (countValue) => {
    if (typeof countValue !== 'undefined') {
        return {
            type: 'SET_MOVE_COUNT',
            count: countValue
        }
    } else {
        return {
            type: 'INCREMENT_MOVE_COUNT'
        }
    }
};

export const timerUpdate = (isActive, offset) => {
    if (typeof isActive !== 'undefined') {
        if (isActive) {
            return {
                type: 'START_TIMER',
                offset: Date.now()
            }
        } else {
            if (offset) {
                return {
                    type: 'RESET_TIMER'
                }
            } else {
                return {
                    type: 'STOP_TIMER'
                }
            }
        }
    } else {
        return {
            type: 'TICK',
            time: Date.now()
        }
    }
};

export const timerEnable = (isEnabled) => {
    if (isEnabled) {
        return {
            type: 'ENABLE_TIMER'
        }
    } else {
        return {
            type: 'DISABLE_TIMER'
        }
    }
};
