// const StateType = {
//     title : String,
//     status : Boolean
// }

const initialState = {
    title : '',
    status : false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        default : {
            return state;
        }
    }
}