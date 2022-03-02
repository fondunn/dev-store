const INITIAL_STATE = {
    sections: [
        {
            title: 'Notebooks',
            id: 1,
            linkUrl: 'shop/notebooks'
        },
        {
            title: 'Smartphones',
            id: 2,
            linkUrl: 'shop/smartphones'
        },
        {
            title: 'Military',
            id: 3,
            linkUrl: 'shop/military'
        },
        {
            title: 'Gamers',
            id: 4,
            linkUrl: 'shop/gamers'
        },
        {
            title: 'Gifts',
            id: 5,
            linkUrl: 'shop/gifts'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer