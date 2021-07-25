
import React, { Component } from 'react'
import axios from 'axios'
import { CardGroup,Spinner } from 'react-bootstrap'
import MainCard from './MainCard'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Main extends Component {

constructor(props){
    super(props)
    this.state={
        psychonautsData:[]   
    }
}
/*=================================================================================*/
componentDidMount=()=>{
axios.get(`${serverUrl}/apidata`).then(response=>{
    this.setState({
        psychonautsData:response.data  
    })
}).catch(error=>alert(error.message))
}
/*=====================================================================================*/
handleAddToFav=(item)=>{
    const reqBody={
        gender:item.gender,
        img:item.img,
        name:item.name,
        id:item.id,
        psiPowers:item.psiPowers
    }


    axios.post(`${serverUrl}/favourite`,reqBody).then(response=>{
      if (response.data==='already exist'){
          alert('already in your Favourite List')
      }else{
          alert('added successfully')
      } 
    }).catch(error=>alert(error.message))
}
//===================================================================================================

    render() {
        return (
            <div>
                {
                    this.state.psychonautsData.length>0?
                    <CardGroup>
{
    this.state.psychonautsData.map((value,idx)=>{
        return(
           <MainCard
           key={idx}
           gender={value.gender}
           img={value.img}
           name={value.name}
           id={value._id}
           psiPowers={value.psiPowers}
           handleAddToFav={this.handleAddToFav}
           /> 
        )
    })
    
}



                    </CardGroup>:
                    <>
                    <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  </>
                }
            </div>
        )
    }
}

export default Main
