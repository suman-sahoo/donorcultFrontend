import React from 'react';
const TopHeader = (props) =>{
  return (
	<div className="top_header">
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				<ul>
					<li><a href="http://google.com/" className="slow">Workplace Giving</a></li>
					<li><a href="http://google.com/" className="slow">Fundraisers</a></li>
					<li><a href="http://google.com/" className="slow">How it Works</a></li>
				</ul>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull_right">
				<ul>
					{localStorage.getItem('donorData') ?
						(<li><a href="#/fund-raiser-profile" className="slow">My Profile</a></li>)
						:(<>
							<li><a href="#/Login" className="slow">Login</a></li>
							<li><a href="#/signup" className="slow">Sign up</a></li>
						</>)
					}
				    

				</ul>
			</div>
		</div>
	</div>
</div>  );
}
export  {TopHeader};

