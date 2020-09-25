import React,{useEffect} from 'react';
import download from '../../images/download.png';
import envolep from '../../images/envolep.png';
import { connect } from 'react-redux'
import { manageFundRaiseActions } from '../../action/index';
const DonorListing = (props) =>{
    const {getDonorUser} = props;
    useEffect(() => {
        props.get_fundraise_donor_details(1)
    },[]);
    console.log(getDonorUser,"getDonorUsergetDonorUsergetDonorUser");
  return (
    <div className="donorslist">
        <h3>{getDonorUser && getDonorUser.count} Donors <span><img className="downloadicon" src={download} alt="" /> List</span></h3>
        {getDonorUser && getDonorUser.rows.map((val)=>{
            return(
                <div className="row donorslisttab">
                    <div className="col col-lg-5">
                        {val.name}
                    </div>
                    <div className="col col-lg-5">
                        {val.amount}
                    </div>
                    <div className="col col-lg-2">
                        <img src={envolep} alt="" />
                    </div>
                </div>

            )
        })}
    
    <div className="row donorslisttab">
      
        <div className="col col-lg-12 donorslistmess">
            <p>Get well soon!!</p>
        </div>
    </div>
    <div className="row donorslisttab">
        <div className="col col-lg-5">
            Test
        </div>
        <div className="col col-lg-5">
            Rs.5000
        </div>
        <div className="col col-lg-2">
            <img src={envolep} alt="" />
        </div>
    </div>
    <div className="row donorslisttab">
        <div className="col col-lg-5">
            Test
        </div>
        <div className="col col-lg-5">
            Rs.5000
        </div>
        <div className="col col-lg-2">
            <img src={envolep} alt="" />
        </div>
    </div>
    
</div>
    );
}
function mapState(state){
	return{
        getDonorUser:state.fundRaisedDonor.gotData
	}
  }
  const actionCreators = {
	get_fundraise_donor_details: manageFundRaiseActions.get_fundraise_donor_details,
  }
  export default connect(mapState,actionCreators)(DonorListing);


