import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, } from "react-router-dom";
const DisplayBook = () => {
    const onlineBackUrl="https://bookmanagementsystem-jizn.onrender.com"

    const [list, setList] = useState([])
    const getData=()=>{
        axios.get(`${onlineBackUrl}/api/firstap1/getAllBook`)
            .then((val) => {
                setList(val.data.getBookLists)
                // console.log(val.data.getBookLists)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData()

    }, [])
    console.log(list)
    const handleDeleteBook=(ids)=>{
        axios.delete(`${onlineBackUrl}/api/firstap1/deleteBooklist/${ids}`)
        .then(()=>{
            getData()

        }).catch((err)=>{
            console.log(err)
        })
        console.log(ids)
    }


  
    return (
        <div className="table_container">

        <div className="table-responsive table_innerCont">
            <table className="table border table-hover">
                <thead className="tableHead">
                    <tr>
                        <th scope="col">Book name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Title</th>
                        <th  scope="col">Delete</th>
                        <th  scope="col">Edit</th>


                    </tr>
                </thead>
                <tbody>
                    {list.map((ele, id) => {
                        return (
                            <React.Fragment key={id}>
                                <tr>
                                    <th scope="row">{ele.name}</th>
                                    <td>{ele.author}</td>
                                    <td>{ele.title}</td>
                                    <td><button className="edtBtn" onClick={()=>handleDeleteBook(ele._id)}>Delete</button></td>
                                    <td>
                                        <Link to={{ pathname: `/editBook/${ele._id}`}}>Edit</Link>
                                    </td>
                                     
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>

        </div>
        </div>


    )
}
export default DisplayBook