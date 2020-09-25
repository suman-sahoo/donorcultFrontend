
import axios from 'axios';
export const userService = {
        user_login,
        user_signup,
        user_info_update,
        user_info_fatchdata,
        put_image
      
};


function user_login(data) {

    return axios.post('http://localhost:3001/api/frontend/login',JSON.stringify(data),
      {
          headers: {
          "Content-Type": "application/json"
          }
      }
      )
    .then(res => {  
        if(res.data && res.data.status === 1){
            let userInfo = res.data.data;
            userInfo.access_token  = res.data.access_token;
            localStorage.setItem('donorData',JSON.stringify(userInfo));

        }
           
       return res;
   }); 
}

function user_signup(data) {
    return axios.post("http://localhost:3001/api/frontend/register",data,{ headers: { "Content-Type": "application/json"} })
    .then(res => {  
        if(res.data && res.data.status === 1){
            let userInfo = res.data.data;
            userInfo.access_token  = res.data.access_token;
            localStorage.setItem('donorData',JSON.stringify(userInfo));

        }

       return res;
   }); 
   
}

function user_info_update(data) {

    return axios.put(process.env.REACT_APP_API+'/api/frontend/update-user-profile/',data,
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

function user_info_fatchdata(data) {
    const donorData = JSON.parse(localStorage.getItem('donorData'));
    let Id = "";
    if(donorData.id)
        Id = donorData.id;
    return axios.get(process.env.REACT_APP_API+'/api/frontend/fetch-user-info/?id='+Id,
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

function put_image(data) {

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
