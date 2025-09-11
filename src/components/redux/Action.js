export const myaction=(data)=>{
    return{
        type:'ADD',
        data

    }
}
export const deleteAction=(data)=>{
    return{
        type:'DELETE',
        data

    }
}
export const editAction=(i,gg)=>{
    return{
        type:'EDIT',
        data:{i,gg}

    }
}