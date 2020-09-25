import React from 'react';
const UpdateStory = (props) =>{
    let  docs=(true)?(<span>Choose a file...</span>):(<span>File Selected </span>);
    let picdis =(true)?(<span>Choose a file...</span>):(<span>File Selected</span>);	
  return (
      <>
    <div className="row">
        <div className="col col-lg-12">
            <input className="form-control fldadd" name="story" id="story" placeholder="Write your story" value="" type="text" onChange={()=>{}} />
        </div>
        
    </div>
    <div className="row">
        <div className="col col-lg-4">
            <div className="uploadfld" onClick={(e) => {} } style={{ cursor: 'pointer' }}>
                Add Photo/Video
            </div>
            {picdis}												
            <input type="file" name="myfile"  id="myfile" ref={(ref) => {}} style={{ display: 'none' }} onChange={(e) => {} } />
        </div>

        <div className="col col-lg-4">
            <div className="uploadfld" onClick={(e)=>this.docfile.click()} style={{cursor:'pointer'}}>
                Add Documents												
            <input type="file" name="docfile"  id="docfile" ref={(ref) => {}} style={{ display: 'none' }} onChange={(e) => {} } />
            </div>
            {docs}
        </div>
        </div>	
        <input type="button" className="submitbtn updatebtn" value="Update" onClick={(e)=>{}} />
            <div className="text-divider mb-3 mb-lg-0">Share with</div>
            <div className="socialbdy">
                <button className="btn btn-facebook gtm-fb-login-btn">Facebook</button>
                <button className="btn btn-google gtm-google-login-btn">Google</button>
            </div>
    </>
    );
}
export default UpdateStory;

