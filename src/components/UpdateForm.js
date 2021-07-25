import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
               <Form onSubmit={this.props.updateFavs}>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.name} />

  </Form.Group>

  <Form.Group className="mb-3" controlId="gender">
    <Form.Label>Gender:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.gender} />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
            </div>
        )
    }
}

export default UpdateForm
