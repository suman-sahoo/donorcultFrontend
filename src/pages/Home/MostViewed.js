import React from 'react';
import bltbannerright from '../../images/bltbannerright.jpg';

const MostViewed = (props) =>{
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="MostViewed">
					<div className="hrd-title"><h3 className="hrd-name">Most Viewed</h3></div>
					<div className="fs_news_right">
						<div className="single_fs_news_img"> <img src={bltbannerright} alt="" /> </div>
						<div className="single_fs_news_right_text">
							<h4>Thoughts on remaining</h4>
							<p>Thoughts on remaining casually chic</p>
						</div>
					</div>
					<div className="fs_news_right">
						<div className="single_fs_news_img"> <img src={bltbannerright} alt="" /> </div>
						<div className="single_fs_news_right_text">
							<h4>Thoughts on remaining</h4>
							<p>Thoughts on remaining casually chic</p>
						</div>
					</div>
					<div className="fs_news_right">
						<div className="single_fs_news_img"> <img src={bltbannerright} alt="" /> </div>
						<div className="single_fs_news_right_text">
							<h4>Thoughts on remaining</h4>
							<p>Thoughts on remaining casually chic</p>
						</div>
					</div>
					<div className="fs_news_right">
						<div className="single_fs_news_img"> <img src={bltbannerright} alt="" /> </div>
						<div className="single_fs_news_right_text">
							<h4>Thoughts on remaining</h4>
							<p>Thoughts on remaining casually chic</p>
						</div>
					</div>
					
				</div>
				
			</div>
    );
}
export default MostViewed;