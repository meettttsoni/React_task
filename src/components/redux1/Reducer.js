const arr=[]
export const myReducer=(state=arr,action)=>{
    if(action.type==='ADD'){
        return[...state,action.data]
    }
    if(action.type==='DELETE'){
        const newState=[...state]
        newState.splice(action.data,1)
        return newState
    }else if(action.type=='EDIT'){
        const{i,newvalue}=action.data;
        return state.map((el,index)=>(index===i ? newvalue :el))
    }
    return state
}