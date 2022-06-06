import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './Navbarz'
import AddFolder from './AddFolder'
import AddFile from './AddFile'
import { useFolder } from '../../hook/useFolder'
import Folder from './Folder'
// import Upload from './Upload'
// import { useFolder } from '../../hk/uFolder'

export default function Home() {
  const { folder, childFolders }  = useFolder("eHux7yJ18s32XVaGFGKV")
  console.log(childFolders)
  

  return(
    <>
      <Navbar />
      <Container fluid>
        <AddFolder currentFolder={folder} />
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
        )}
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

