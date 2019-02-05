import React from 'react';
import faker from 'faker';

class Comment extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className ="comment">
          <a href ="/" className = "avatar"><img alt = "avatar" src={faker.image.avatar()}/></a>
          <div className = "content">
            <a href ="/" className = "author">
            {this.props.author}
            </a>
            <div className = "metadata">
              <span className ="date">{this.props.currDate}</span>
            </div>
            <div className = "text">{this.props.commentText}</div>
          </div>
        </div>
    )

  }
}

export default Comment;