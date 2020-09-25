import React, {useEffect,useState} from 'react';
import MetaTags from 'react-meta-tags';
import template1 from '../../images/template1.jpg';
import { connect } from 'react-redux'
import { manageFundRaiseActions } from '../../action/index';
var converter = require('number-to-words');
const LeftBar = (props) =>{

    const [fundRaiserInfo, setFundRaiserInfo] = useState("");
    const [raiserPersent, setRaiserPersent] = useState(0);

    useEffect(() => {
       props.get_fundraise_details(1);
   
        },[]);
    useEffect(() => {
        if(props.getData) {
            setFundRaiserInfo(props.getData);
            const data = props.getData;
            console.log(data.allowed_goal_amount,"data.allowed_goal_amountdata.allowed_goal_amountdata.allowed_goal_amount",data.raised_amount);

           const  persent = Math.round(((data.raised_amount*100)/data.allowed_goal_amount))
            setRaiserPersent(persent);
        }
    },[props.getData]);
        console.log(props.getData,"profileData",);
  return (
    <div className="phbdytab camverti">
        <MetaTags>
            <title>{fundRaiserInfo.title}</title>
            <meta name="description" content="{this.state.title} "/>
            <meta property="og:title" content="{this.state.title}" />
            <meta property="og:image" content="{profimg}" />
        </MetaTags>
            <div className="camimg">
                <img src={template1}alt="phimg" className="" />    
            </div>
            <div className="phdetails campdetails">
                <h3>{fundRaiserInfo.title}</h3>
                <h5>Raised Amount Rs.{fundRaiserInfo.raised_amount}</h5>
                <div className="gbdtbdy">
                    <div className="gbdtbdyleft">
                        <b>80</b><br/>Views
                    </div>
                    <div className="gbdtbdyright">
                        <b>days</b><br/>to go
                    </div>
                    <div className="ProgressBarbdy">
                        <div class="progress-con">
                            <div class="progressbdy">
                                <div class="bar" style={{width:raiserPersent}}></div>
                            </div>
                            <span class="price-b fleft">Total Raised</span>
                            <div className="pbcenter">
                                <span className="pbround">{raiserPersent}%</span>
                                <span class="per-b ">{converter.toWords(fundRaiserInfo.raised_amount?fundRaiserInfo.raised_amount:0)}</span>
                            </div>
                            <span class="per-b float-right">{fundRaiserInfo.raised_amount}</span>
                        </div>
                    </div>
                </div>
                
            </div>
         
    </div>

    );
}
function mapState(state){
	return{
        getData:state.fundRaiseDetails.gotData
	}
  }
  const actionCreators = {
	get_fundraise_details: manageFundRaiseActions.get_fundraise_details,
  }
  export default connect(mapState,actionCreators)(LeftBar);
