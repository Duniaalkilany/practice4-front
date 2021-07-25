import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
         
                    <div style={{marginLeft:' 5px'}}>
                <Card style={{ width: '18rem',margin:'20px 20px'}}>
  <Card.Img variant="top" src={this.props.img} style={{width:'18rem',height:'400px'}} />
  <Card.Body>
    <Card.Title>name:{this.props.name}</Card.Title>
    <Card.Text>
    gender:{this.props.gender}
    </Card.Text>

    <Card.Text>
    psiPower:

   {
       this.props.psiPowers.map((value,idx)=>{
        
        return(
            <div style={{backgroundColor:'#617dfb'}}>
                
            <p>name:{value.name}</p>
            <img src={value.img}/>
            <p>
description:{value.description}
            </p>
            </div>
        )


       })
   }
    </Card.Text>

  </Card.Body>
  <Card.Footer className="text-muted">
  <Button variant="primary" onClick={()=>this.props.deleteFavs(this.props)} >Delete</Button>
  <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props)}  >Update</Button>
  </Card.Footer>
</Card>
         
            </div>
        )
    }
}

export default FavouriteCard
