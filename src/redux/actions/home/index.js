const TestAction = (data) => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: data
    })
}


const homeActions = {
    TestAction
}

export {
    homeActions
}