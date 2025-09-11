export const myAction=(payload)=>{
    return{
        type:'ADD',
        payload
    }
}
export const increment = (index) => {
    return {
        type: "INCREMENT",
        payload: index
    };
};

export const decrement = (index) => {
    return {
        type: "DECREMENT",
        payload: index
    };
};