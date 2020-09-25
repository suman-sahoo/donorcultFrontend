import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const MiddleHeader = (props) =>{
  return (
		<div className="mid_header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div className="logo"><img src={logo} alt="" /></div>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
					<Link className="submitbtn fright" to="/Login">Start a Fundraiser</Link>
						<label className="search_bar" htmlFor="search-input">
							<input
								type="text"
								value=""
								id="search-input"
								placeholder="Search..."
								onChange={()=>{}}
								className="search_input"
							/>
							<div className="btn-sm"><svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></div>
						</label>
						
					</div>
				</div>
			</div>
		</div>
    );
}
export  {MiddleHeader};