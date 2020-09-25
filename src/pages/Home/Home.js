import React from 'react';
import Header from './Header/Header';
import HomeBanner from './HomeBanner';
import TrendingProjectSlider from './TrendingProjectSlider';
import TrendingProjectDetails from './TrendingProjectDetails';
import MostViewed from './MostViewed';
import LatestPost from './LatestPost';
import FundCategory from './FundCategory';
import Footer from './Footer/Footer';
import { connect } from 'react-redux'
import { userActions } from '../../action/index';
const Home = (props) =>{

  return (
   <>
     <header>
     <Header />
     </header>
     <HomeBanner/>
     <section className="content-wrapper">
        <div className="container-fluid">
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="sectionpadding">
                <h2 className="common-heading">Trending Project</h2>
                <TrendingProjectSlider />
              </div>
            </div>
          
        </div>	
      </section>
      <section className="content-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<TrendingProjectDetails />
									
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<MostViewed />
								<LatestPost />
							</div>
						</div>
					</div>	
				</section>
        <section className="content-wrapper">
					<div className="container-fluid">
						
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="sectionpadding">
									<h2 className="common-heading">Causes you can raise funds for</h2>
									<FundCategory />
								</div>
							</div>
						
					</div>	
				</section>
        <Footer/>
   </>
    );
}
function mapState(state){
	return{
	}
  }
  const actionCreators = {
	user_login: userActions.user_login,
  }
  export default connect(mapState,actionCreators)(Home);