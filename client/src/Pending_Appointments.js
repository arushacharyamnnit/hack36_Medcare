import React,{useState,useEffect} from 'react'
import Nav_doctor from './Nav_doctor'
import Card from 'react-bootstrap/Card'
import './pending.css'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
function Pending_Appointments(){
const did=localStorage.getItem('id');
    const [doctor_name,setDoctor_name]=useState("");
    const [arr,setArr]=useState([]);
   useEffect(()=>{
    const token = localStorage.getItem('token');
    const user=localStorage.getItem('user');
            Axios.post('http://localhost:3001/user/doctor',{email:user}).then((resp)=>{
                // console.log(resp.data[0].name);
                setDoctor_name(resp.data[0].name);
                })
                let doc_id=parseInt(did);
                Axios.post('http://localhost:3001/getBookings',{doc_id:doc_id}).then((resp)=>{
                  console.log(resp.data);
                  setArr(resp.data);
          
              })
               

    },[doctor_name])
    function CancelHandler(data)
    {
      let temp=data;
      let doc_id=parseInt(did);
      data['doctor']=doctor_name;
      data['doc_id']=doc_id;
      Axios.post('http://localhost:3001/deleteBooking',data).then((resp)=>{

      })
      Axios.post('http://localhost:3001/cancel',data).then((resp)=>{

      })
      let new_arr=arr.filter(function(obj){
        return (obj.patient!==temp['patient'] || obj.date!==temp['date'] || obj.slot!==temp['slot'])
      })
      
     setArr(new_arr);
     return 0;
      
    }
    function ConfirmHandler(data){
      let temp=data;
      let doc_id=parseInt(did);
      data['doctor']=doctor_name;
      data['doc_id']=doc_id;
      console.log(data);
      Axios.post('http://localhost:3001/deleteBooking',data).then((resp)=>{

      })
      Axios.post('http://localhost:3001/confirmedBooking',data).then((resp)=>{

    })
      Axios.post('http://localhost:3001/confirm',data).then((resp)=>{

      })
      let new_arr=arr.filter(function(obj){
        return (obj.patient!==temp['patient'] || obj.date!==temp['date'] || obj.slot!==temp['slot'])
      })
      
     setArr(new_arr);
     return 0;

    }
    return(
        <div>
          
            <Nav_doctor/>
            <h1>Hello</h1>
            {
                arr.map((item,i)=>(
                  
                  <Card>
                  <Card.Header key={i}></Card.Header>
                  <Card.Body>
                    <Card.Title>Patient: {item.patient} </Card.Title>
                    <Card.Text>
                    {item.slot} slot on {item.date}
                    </Card.Text>
                    <Card.Text>
                     Symptoms: {item.reason}
                    </Card.Text>
                    <Card.Text>
                     Contact Details: {item.mobile} 
                    </Card.Text>
                    <Button variant="success" onClick={()=>ConfirmHandler(item)}>Confirm</Button>
                    <Button variant="danger"  onClick={()=>CancelHandler(item)}>Cancel </Button>
                  </Card.Body>
                </Card>
                ))
           
}
            </div>
        
    )
}
export default Pending_Appointments;