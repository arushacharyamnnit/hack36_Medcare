import React, { useState, useEffect } from 'react'
import Nav_patient from './Nav_patient'
import Axios from 'axios'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup';
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import Appointment from './Appointment'
import './Card.css'
import { Link } from 'react-router-dom'
function Book() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [array1,setArray1] = useState([])
    const [array2,setArray2] = useState([])
    const [array3,setArray3] = useState([])
    const [array4,setArray4] = useState([])
    const [array5,setArray5] = useState([])
    const [array6,setArray6] = useState([])
    const [array7,setArray7] = useState([])
    const [array8,setArray8] = useState([])
    const [id1,setId1] = useState([])
    const [id2,setId2] = useState([])
    const [id3,setId3] = useState([])
    const [id4,setId4] = useState([])
    const [id5,setId5] = useState([])
    const [id6,setId6] = useState([])
    const [id7,setId7] = useState([])
    const [id8,setId8] = useState([])
    
    function Handle1(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
           
            setArray1(resp.data)
        })
        return 0;
    }
    function Handle2(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            console.log(resp.data);
        
            setArray2(resp.data);
    })
        return 0;
    }
    function Handle3(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            console.log(resp.data);
            setArray3(resp.data);
        })
        return 0;
    }
    function Handle4(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            setArray4(resp.data);
        })
        return 0;
    }
    function Handle5(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            setArray5(resp.data);
        })
        return 0;
    }
    function Handle6(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            console.log(resp.data);
            setArray6(resp.data);
        })
        return 0;
    }
    function Handle7(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            console.log(resp.data);
          
            setArray7(resp.data);
           
        })
        return 0;
    }
    function Handle8(msg){
        const data={category:msg};
        // console.log(data);
        Axios.post('http://localhost:3001/show/doctor/category',data).then((resp)=>{
            setArray8(resp.data);
        })
        return 0;
    }
    return (

        <div>
            <h1>hello</h1>
            <div className="auth-wrapper">  <div className="auth-inner" id="abc"><h3>Book your appointment</h3></div></div>
            <Nav_patient />
            <CardColumns>
                <Card>
                    <Card.Body>
                        <Card.Title ><h3 id="a">Cardiologist</h3></Card.Title>
                        <Card.Text><h6 id="btna"><Button onClick={() => {setOpen1(!open1); Handle1('Cardiologist');}}
                            aria-controls="example-collapse-text1"
                            aria-expanded={open1}> Show</Button></h6>
                            <Collapse in={open1}>
        <div id="example-collapse-text1">
            
            {
            array1.map((item,i)=>( 
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>

                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="b">Dermatologist</h3></Card.Title>
                        <Card.Text><h6 id="btnb"><Button onClick={() => {setOpen2(!open2); Handle2('Dermatologist');}}
                            aria-controls="example-collapse-text2"
                            aria-expanded={open2}> Show</Button></h6>
                            <Collapse in={open2}>
        <div id="example-collapse-text2">
            {
            array2.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="c">Gynecologist</h3></Card.Title>
                        <Card.Text><h6 id="btnc"><Button onClick={() => {setOpen3(!open3); Handle3('Gynecologist');}}
                            aria-controls="example-collapse-text3"
                            aria-expanded={open3}> Show</Button></h6>
                            <Collapse in={open3}>
        <div id="example-collapse-text3">
            {
            array3.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="d">Neurologist</h3></Card.Title>
                        <Card.Text><h6 id="btnd"><Button onClick={() => {setOpen4(!open4); Handle4('Neurologist');}}
                            aria-controls="example-collapse-text4"
                            aria-expanded={open4}> Show</Button></h6>
                            <Collapse in={open4}>
        <div id="example-collapse-text4">
            {
            array4.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="e">Ophthalmologist</h3></Card.Title>
                        <Card.Text><h6 id="btne"><Button onClick={() => {setOpen5(!open5); Handle5('Ophthalmologist');}}
                            aria-controls="example-collapse-text5"
                            aria-expanded={open5}> Show</Button></h6>
                            <Collapse in={open5}>
        <div id="example-collapse-text5">
            {
            array5.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="f">Pediatrician</h3></Card.Title>
                        <Card.Text><h6 id="btnf"><Button onClick={() => {setOpen6(!open6); Handle6('Pediatrician');}}
                            aria-controls="example-collapse-text6"
                            aria-expanded={open6}> Show</Button></h6>
                            <Collapse in={open6}>
        <div id="example-collapse-text6">
            {
            array6.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="g">Physician</h3></Card.Title>
                        <Card.Text><h6 id="btng"><Button onClick={() => {setOpen7(!open7); Handle7('Physician');}}
                            aria-controls="example-collapse-text7"
                            aria-expanded={open7}> Show</Button></h6>
                            <Collapse in={open7}>
        <div id="example-collapse-text7">
            {
            array7.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title><h3 id="h">Psychiatrist</h3></Card.Title>
                        <Card.Text><h6 id="btnh"><Button onClick={() => {setOpen8(!open8); Handle8('Psychiatrist');}}
                            aria-controls="example-collapse-text8"
                            aria-expanded={open8}> Show</Button></h6>

                    
                            <Collapse in={open8}>
        <div id="example-collapse-text8">
            {
            array8.map((item,i)=>(
                <h6 key={i}><Button><Appointment doctor={item.name} id={item.id} /></Button></h6>
                )
            )
            }
            </div></Collapse>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    )


}
export default Book;