import {React,useState,useEffect} from 'react'
import { useParams ,useNavigate} from "react-router-dom"

const Booking = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [movie, setMovie] = useState()
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const getData = () => {
        fetch(`https://api.tvmaze.com/shows/${id}`) 
        .then(res => res.json())
        .then(data => {setMovie(data)
        console.log(movie);
        })
    }
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])
    const handleSubmit = async (e)=>{
        e.preventDefault()
        localStorage.setItem("Name",name);
        localStorage.setItem("Email",email);
        navigate("/")
        // console.log(localStorage.getItem("Name"));
        // console.log(localStorage.getItem("Email"));
       }

  return (
    <>
    <div className="loginPage">
    <div className="form-box">
      <h1>Book Show</h1>
      <ul className='movieD'>
            <li>MovieName:{movie ? movie.name : ""}</li>
            <li>Genre:{movie ? movie.genres : ""}</li>
         </ul>
      <form onSubmit={handleSubmit}>
       <div >
       <div>
          <input className="input-field" type="text" placeholder="Name"  name="name" onChange={(e)=>setName(e.target.value)} value={name}  />
         </div>
         <div>
          <input className="input-field" type="email" placeholder="Email"  name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
         </div>
         <div className="btn-field">
         <button type="submit"> Submit</button>
       
       </div>

       </div>
      </form>
    </div>
  </div>
    
    </>
  )
}

export default Booking
