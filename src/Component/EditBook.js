import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EdtBook = () => {
  const onlineBackUrl="https://bookmanagementsystem-jizn.onrender.com"

  const [name, setName] = useState()
  const [author, setAuthor] = useState()
  const navigate = useNavigate()

  const [title, setTitle] = useState()

  const { id } = useParams()
  const handleBookInput = () => {

  }
  useEffect(() => {
    axios.get(`${onlineBackUrl}/api/firstap1/getBookAcToId/${id}`)
      .then((ele) => {
        const { author, title, name, _id } = ele.data.data
        setName(name)
        setTitle(title)
        setAuthor(author)
        console.log(author, title, name, _id)
        console.log(ele)
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  const handleEditBook = (e) => {
    e.preventDefault();
    axios.put(`${onlineBackUrl}/api/firstap1/editBooks/${id}`, { name, author, title }
    ).then((res) => {
      console.log("Updated books successfully", res)
      navigate("/")

    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12 border formDiv">
            <form onSubmit={handleEditBook}>
              <div className="row py-4 gap-2">
                <label htmlFor="bookname">Book Name</label>
                <div className="col-12">
                  <input id="bookname" type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                </div>
                <label htmlFor="author">Author name</label>
                <div className="col-12">
                  <input id="author" type="text" value={author} required onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <label htmlFor="title">Title</label>
                <div className="col-12">
                  <input id="title" type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
                </div>
              </div>
              <button type="submit" className="edtBtn">Edit book</button>
            </form>

          </div>

        </div>

      </div>
    </>
  )
}
export default EdtBook