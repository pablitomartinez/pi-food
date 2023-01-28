import { useHistory } from "react-router-dom"


const Landing =() =>{
    const history = useHistory()
    
    // ! REVISAR
    const getIn = (e)=>{
        history.push('/home')
    }
    return(
        <>
            <h1>estas en LANDING</h1>
            <button type="submit" onChange={getIn}>GET IN</button>
        </>
    )
}

export default Landing