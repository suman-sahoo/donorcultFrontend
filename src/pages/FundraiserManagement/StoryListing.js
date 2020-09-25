import React,{useState} from 'react';
import Story from './Story';

const StoryListing = (props) =>{
    const[storyList,setStoryList] = useState([{0:"hello",1:"hi"}]);
  return (
    <div className="AccountAuthenTab">
        <h3>Story</h3>
        {storyList.map((data,index)=>{
            return(
                    <div className="pfpstory" id={index}>
                        <input className="pfpscheck" type="checkbox" />
                        <Story></Story>
                    </div>
                    )
            })
        }
        
    </div>
    );
}
export default StoryListing;