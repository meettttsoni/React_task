import React from 'react'

export default function Withloading(WrappedComp) {
  return function Enhanced({isLoading,...rest}){
    if(isLoading){
        return <p>...loading</p>
    }
    return <WrappedComp {...rest}/>
  }
  
  
}
