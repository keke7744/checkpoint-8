
import React from 'react';
export default Props;
class App extends React.Component {
    state= {
      index:0
    }
  <div>
    render() {
      return (
        <div>
        {person.map((e, i) => <Button onClick={()=>this.setState({
          index: i
        
        }) } children={e.name} />)}
      
        
    } 
    
    
    </div>
    <Content 
    children={person[this.state.index].name} title={person[this.state.index].name} src={person[this.state.index].imgsrc} descri={person[this.state.index].description}
    />
     
  
  