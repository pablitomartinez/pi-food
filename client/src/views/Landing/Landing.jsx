import { Link } from 'react-router-dom'


const Landing =() =>{

    

    return(
        <>
            <h1>estas en LANDING</h1>
            <Link to={'/home'} >
                <button type="submit">GET IN</button>
            </Link>
        </>
    )
}

export default Landing