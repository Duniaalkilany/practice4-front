import React, { Component } from 'react'
import axios from 'axios'
import { CardGroup,Spinner } from 'react-bootstrap'
import FavouriteCard from './FavouriteCard'
import UpdateForm from './UpdateForm'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Favourite extends Component {
constructor(props){
    super(props)
    this.state={
        favData:[],
        choosenToUpdate:{},
        showForm:false

    }
}

//=======================================================================================================================//
componentDidMount=()=>{
    axios.get(`${serverUrl}/favourite`).then(response=>{
        this.setState({
            favData:response.data
        })
    }).catch(error=>alert(error.message))
}

//========================================================================================================================//
deleteFavs=async(item)=>{
await axios.delete(`${serverUrl}/favourite/${item.id}`).then(response=>{
alert('deleted :(')
}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))

}
//****************************************************************************************************************************** */
 showUpdateForm=(item)=>{
this.setState({
    choosenToUpdate:item,
    showForm:!this.state.showForm
})
 }


 //====================================================================================================================

updateFavs=async(e)=>{
    e.preventDefault()
    const id=this.state.choosenToUpdate.id
const reqBody={
    gender:e.target.gender.value,
    name:e.target.name.value
}

await axios.put(`${serverUrl}/favourite/${id}`,reqBody).then(respone=>{
    this.setState({
        showForm:false
    })
}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))


}











render() {
        return (
            <div>

{
    this.state.showForm&&
    <UpdateForm
    updateFavs={this.updateFavs}
    item={this.state.choosenToUpdate}
    
    />
       
    }





               {
                   this.state.favData.length>0?
                   <CardGroup>
{
    this.state.favData.map((value,idx)=>{
        return(
            <FavouriteCard
            key={idx}
            gender={value.gender}
            img={value.img}
            name={value.name}
            id={value.id}
            psiPowers={value.psiPowers}
            deleteFavs={this.deleteFavs}
            showUpdateForm={this.showUpdateForm}
            />
        )
    }

)

    
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

export default Favourite
