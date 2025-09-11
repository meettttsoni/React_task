const arr=[]
export const myreducer=(state=arr,action)=>{
    if(action.type=='ADD'){
        return[...state,action.data]
    }if(action.type=='DELETE'){
        const neww=[...state]
        neww.splice(action.data,1)
        return neww
    }else if(action.type=='EDIT'){
        const{i,gg}=action.data
        return state.map((el,index)=>(index===i ? gg:el))
    }
    return state;
}