
import React, { Component } from "react";
 import "./Post.css";
 import Avatar from '@mui/material/Avatar';
 import postimage from "../../images/post.jpg";
 import love from "../../images/love.svg";
 import comment from "../../images/comment.svg";
 import share from "../../images/share.svg";
 class Post extends Component{
    constructor(props) {
          super(props);
          this.state = { }
  }
          render() {
                 return (
                    <div className="post_container"> 
                    
                        {/* Header */}
                       <div className="post_header">
                       <Avatar className="post_image" src=""/>
                       <div className="post_UserName">prak_02</div> </div>
                       {/* Image */}
                       <div>
                        <img src={postimage} width="615px" />
                       </div>
                       {/* Analytics */}
                       <div style={{"marginLeft":"10px"}} >
                        <img src={love} className="post_reactimage" />
                        <img src={comment} className="post_reactimage" />
                        <img src={share} className="post_reactimage" />
                       </div>
                       <div style={{"fontWeight":"Bold" ,"marginLeft":"20PX"}}> 777 likes</div>
                       {/* Comment Section */}
                       <div>
                          <div className="post_comment">abg : comment 1</div>
                          <div className="post_comment">sdfdfd : comment 2</div>
                          <div className="post_comment">hsdd : comment 3</div>
                          <div className="post_comment">lskksk :comment 4</div>
                          <input text="text" className="post_commentbox" placeholder="Add a Comment .." />
                       </div>
                    </div>
                 );
          }
        }

export default Post;