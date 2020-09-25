
import axios from 'axios';
export const fundraiserProfileService = {
        get_authenticate_document,
        get_withdrall_request,
        post_withdrall_request,
        put_document_request,
        get_fundreaise_list_userwise
      
};


function get_authenticate_document(Ids) {
    const donorData = JSON.parse(localStorage.getItem('donorData'));
    let Id = "";
    if(donorData.id)
        Id = donorData.id;

    // return axios.get(process.env.REACT_APP_API+'/api/frontend/get-donor-user-details?id='+Id,

    return axios.get(process.env.REACT_APP_API+'/api/frontend/get-donor-user-details?id='+Id,
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        console.log(res);
        // if(res.data && res.data.status === 1){
        //     let userInfo = res.data.data;
        //         localStorage.setItem('id', userInfo.id);
        //         localStorage.setItem('uname',userInfo.username);
        //         localStorage.setItem('userData',userInfo);
        //         localStorage.setItem('access_token',res.data.access_token);
        // }
           
       return res;
   }); 
}
function get_withdrall_request(data) {

    return axios.put(process.env.REACT_APP_API+'/registration/',data,
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        console.log(res);

       return res;
   }); 
}

function post_withdrall_request(data) {

    return axios.put(process.env.REACT_APP_API+'/api/frontend/update-details/',data,
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        console.log(res);

       return res;
   }); 
}

function put_document_request(data) {

    return axios.put(process.env.REACT_APP_API+'/api/frontend/update-details/',data,
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        console.log(res);

       return res;
   }); 
}
function get_fundreaise_list_userwise(data) {

    return axios.put(process.env.REACT_APP_API+'/api/frontend/update-details/',data,
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        console.log(res);

       return res;
   }); 
}