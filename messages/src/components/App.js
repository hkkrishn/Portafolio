import React from 'react';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const date = new Date().getDay();
class App extends React.Component{
  render(){
    return(
      <div className = "ui container comments">
        <ApprovalCard>
        <Comment 
        commentText = {faker.lorem.paragraph()} 
        author = {faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")} 
        currDate = {faker.fake("{{date.future}}")}
        />
        </ApprovalCard>
        <ApprovalCard>
          <Comment 
          commentText = {faker.lorem.paragraph()} 
          author = {faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")} 
          currDate = {faker.fake("{{date.future}}")}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment 
          commentText = {faker.lorem.paragraph()} 
          author = {faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")} 
          currDate = {faker.fake("{{date.future}}")}
          />
        </ApprovalCard>
       
      </div>
    )

  }

}

//The principle here is passing one component as a prop of another thus you are able to get its information and reuse components if you wish via props.children!

export default App;