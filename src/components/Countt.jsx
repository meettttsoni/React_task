import React,{useState} from 'react'

export const Countt = () => {
    const[test,setState] = useState('')

    function handleSubmit(e) {
    setState(e.target.value) 
    }
    function mul() {
        setState(test*5)
    }
  return (
    <div>
      
                <input type="text" name="name" onChange={handleSubmit} />
                <input type="submit" onClick={mul} />
                <p>{test}</p>
           
    </div>
  )
}
export default Countt