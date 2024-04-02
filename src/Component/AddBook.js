import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const AddBook=()=>{
    const navigate=useNavigate()
    const [items,setItems]=useState({
        name:"",
        author:"",
        title:""
    })
    const handleBookInput=(e)=>{
        const {name,value}=e.target;
        setItems({...items,[name]:value})
    }
   
    const handleSubmitBook=(e)=>{
        e.preventDefault()
        axios.post("/api/firstap1/addbook",items
   
        ).then(()=>{

            setItems({
                name:"",
                author:"",
                title:""
            })
            navigate("/")
            console.log("post book succesful")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
       <div className="container-fluid my-4">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12 border formDiv">
               <form onSubmit={handleSubmitBook}>
                 <div className="row py-4 gap-2">
                    <label htmlFor="bookname">Book Name</label>
                  <div  className="col-12">
                   <input id="bookname" type="text"  required name="name" value={items.name} onChange={handleBookInput}/>
                  </div>
                  <label htmlFor="author">Author name</label>
                  <div  className="col-12">
                   <input id="author" type="text"  required name="author" value={items.author} onChange={handleBookInput}/>
                  </div>
                  <label htmlFor="title">Title</label>
                  <div  className="col-12">
                   <input id="title" type="text"  required name="title" value={items.title} onChange={handleBookInput}/>
                  </div>
                 </div>
                 <button className="edtBtn"  type="submit">Add book</button>
               </form>

            </div>

        </div>

       </div>
    )
}
export default AddBook