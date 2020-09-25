
import axios from 'axios';
export const manageFundRaiseService = {
        get_fundraise_details,
        get_fundraise_donor_details
      
};


function get_fundraise_details(id) {

    return axios.get(process.env.REACT_APP_API+'/api/frontend/fetch-fundraiser-details?id='+id,{headers: {"Content-Type": "application/json"}})
    .then(res => {  
      
       return res;
   }); 
}
function get_fundraise_donor_details(id) {
    const userdetails = JSON.parse(localStorage.getItem('userdetails'));

    return axios.get(process.env.REACT_APP_API+'/api/frontend/fetch-fundraised-donor?id='+id,{headers: {"Content-Type": "application/json"}})
    .then(res => {  
      
       return res;
   }); 
}

