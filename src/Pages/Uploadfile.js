//import area
import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
//rfc
export default function UploadFile() {
    //1.State/Hook variable
    const [file ,setFile] = useState('');

    //2.Function

    let hendleData = (e)=>{
        console.log('change value',e[0]);
        setFile(e[0])
    }

    let FileUpload = async (e) =>{
        e.preventDefault();
        console.log('okokokokokok')


        let data = new FormData();
        data.append('files',file);


        let response = await axios({
            method: 'POST',
            url:'http://localhost:1337/api/upload',
            data
        })
        console.log(response.request.status);
        if(response.request.status){
            if(response.request.status === 200){
            console.log('hello');
            swal("Good job!", "You clicked the button!", "success");
            }
        }
        
        
    }

    //3.return statement

  return (
      <div className="row mt-5">
          <div className="col-6 offset-3">
            <form className="mb-5" onSubmit={ (e)=>{ FileUpload(e) } }>
                <h1 className="text-center">File Upload ReactJs with axios</h1>
                <div className="mb-3 mt-5">
                    <label htmlFor="file" className="visually-hidden">Upload File</label>
                    <input type="file" name="file" accept="image/*" className="form-control" id="file" onChange={(e)=>{hendleData(e.target.files)}} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">File upload</button>
                </div>
            </form>
          </div>
      </div>
  );
}
