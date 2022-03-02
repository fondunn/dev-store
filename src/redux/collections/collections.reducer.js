const INITIAL_STATE = {
    notebooks: [
        {
            id: 1,
            title: 'Apple Macbook Pro M1 Snow White',
        },
        {
            id: 2,
            title: 'Apple Macbook Pro M1 Space Gray',
        },
        {
            id: 3,
            title: 'Apple Macbook Pro M1 Golden Fish',
        },
    ],
    smartphones: [
        {
            id: 4,
            title: 'Iphone 13 Pro Max'
        },
        {
            id: 5,
            title: 'Iphone 12 Pro',
        },
        {
            id: 6,
            title: 'Iphone XR',
        },
    ]
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default collectionsReducer