import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbar from './Navbarz'
import { useState, useEffect } from 'react'
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
// import AddFolder from './AddFolder'
// import AddFile from './AddFile'
// import { useFolder } from '../../hook/useFolder'
// import Folder from './Folder'
// import Upload from './Upload'
// import { useFolder } from '../../hk/uFolder'

export default function Home() {
  // const { folder, childFolders }  = useFolder("eHux7yJ18s32XVaGFGKV")
  // console.log(childFolders)

  const [fileUpload, setFileUpload] = useState(null)
  const [fileList, setFileList] = useState([])
  const fileListRef = ref(storage, "files/")

  const uploadFile = () => {
    if(fileUpload == null) return
    const fileRef = ref(storage, `files/${fileUpload.name + v4() }`)
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, ])
        alert("File successfully uploaded")
      })
      
    })
  }

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url])
        })
      })
    })
  }, [])
  

  return(
    <>
      <Navbar />
      <Container fluid>
      <div className="text-center fs-4 mt-3">
        Hi! Welcome to Submit It, where you can upload files in a secure storage space. Images files will be displayed in the website.
      </div>
      <div className="text-center mt-3">
        <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}></input>
        <Button className ="btn btn-primary" onClick={uploadFile}>
          <FontAwesomeIcon icon={faFileUpload} />
        </Button>
        <div width="300px" height = "auto" display="flex" align-items="center">
        {fileList.map((url) => {
            return <img src = {url} />
          })}
        </div>
      </div>




        {/* <AddFolder currentFolder = {folder} />
        <AddFile currentFolder = {folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div 
                key = {childFolder.id} 
                style ={{maxWidth: '300px'}} 
                className = "p-2"
              
              >
                <Folder folder={childFolder} />
    
              </div>
            ))}
          </div>
        )} */}
      </Container>
    </>
  )
}









  // const { folder, cFolders } = useFolder("5xHO94FJ1Ym91SDjNRXv")
  // console.log(cFolders)

  // return (
  //   <>
  //       <Navbar />
  //       <Container fluid>
  //         <Upload currentFolder = {folder} />
  //         {cFolders.length > 0 && (
  //           <div className="d-flex flex-wrap">
  //             {cFolders.map(childFolder => (
  //               <div key ={childFolder.id} style={{ maxWidth: '3000px'}} className = "p-2 mt-2"
  //               >
  //                 <Folder folder = {childFolder} />
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </Container>
  //   </>

