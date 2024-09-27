import React, { useState } from 'react';
import Navcontent from './Navcontent';
import donate from './image/donate.png';
import {Row,Col,Form} from 'react-bootstrap'
import { MdPerson } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdTransgender } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";


function Dona() {
const [ formData,setFormData]=useState({
    name:"",
    gender:"",
    group:"",
    dob:"",
    month:"",
    year:"",
})
const handleChange=(e)=>{
    setFormData({
        ...formData,[e.target.name]:e.target.value
    })
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
}

  return (
    
      <div style={{ marginLeft: "20px", color: "crimson", backgroundColor: "rgba(141,166,203,0.25)"}} className="gradient-background">
         <Navcontent/>
        <img src={donate} style={{ marginLeft: "950px", marginTop: "100px" }} alt="Donate" />
        <div style={{ position: "relative", bottom: "50px" }} className='ms-3'>
          <h2 className='text-center'>Blood Donor Registration Form</h2>
          <MdPerson /><h4>Donor Personal Details</h4>
          <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label type="text">Name</Form.Label>
        <Form.Control type="email" placeholder="fullname" />
      </Form.Group>
            
            <Row>
             <Form.Label> Gender</Form.Label> 
            <Form.Select aria-label="Default select example" value={formData.willing} onChange={handleChange}> 
      
      <option value="yes">Yes</option>
      <option value="no">No</option></Form.Select>

        <Form.Group as={Col} controlId="formGridgroup">
        <MdBloodtype />   <Form.Label>bloodgroup</Form.Label>
           <Form.Control type="number" placeholder=" " />
        </Form.Group></Row>
        <Row>
            
        <Form.Group as={Col} controlId="formGridgroup">
        <GiWeightLiftingUp />  <Form.Label>Weight</Form.Label>
           <Form.Control type="number" placeholder=" " />
        </Form.Group></Row>  

        <Row>
              <Col>
               Willing to Donate
              <Form.Select aria-label="Default select example" value={formData.willing} onChange={handleChange}> 
      
      <option value="yes">Yes</option>
      <option value="no">No</option>
      
    </Form.Select>
</Col>
</Row>
  
  
            
              
  
            <h5><IoIosContacts /> Donor Communication Details</h5>
            <Row>
              <Col>
               select district
              <Form.Select aria-label="Default select example" value={formData.location} onChange={handleChange}> 
      <option>Open this select menu</option>
      <option value="tvm">TVM</option>
      <option value="kOllam">Kollam</option>
      <option value="pathanamthitta">Pathanamthitta</option>
      <option  value="alapuzha"> Alapuzha</option>
      <option value="kottayam"> Kottayam</option>
    </Form.Select>

                
              </Col>
              <Col>
             select Taluk <Form.Select aria-label="Default select example" value={formData.taluk} onChange={handleChange}> 
      <option>Open this select menu</option>
      <option value="">TVM</option>
      <option value="">Kollam</option>
      <option value="">Pathanamthitta</option>
      <option  value=""> Alapuzha</option>
      <option value=""> Kottayam</option>
    </Form.Select>


               
              </Col>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <FaPhone /> <Form.Label>Mobile number</Form.Label>
         <Form.Control type="number" placeholder=" " />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <FaPhone />  <Form.Label>Whatsap</Form.Label>
           <Form.Control type="number" placeholder=" " />
        </Form.Group></Row>
          
            <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
        <MdAlternateEmail /> <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group></Row>
            
  <h6><TiTick /> I agree to your privacy policy& terms of service(Read)</h6>
  <button type="button" class="btn btn-danger"><IoMdPerson /> Register to Donate</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Dona;


  
