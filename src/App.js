// weather app api c25f5fcfa205ca6865ff33f0af8dfe1e






// import React from "react"

// class Prabhu extends React.Component{
//   constructor(){
//     super()
//     this.state={}
//   }
//   dis=()=>{
//     this.setState({
//       v:document.getElementById("t1").value})
//   }
// }


import React from "react"

class Tamil extends React.Component{
  constructor(){
    super()
    this.state={
      v:100
    }
  }
  show =()=>{
    this.setState({v:document.getElementById("t1").value})
  }
  getSnapshotBeforeUpdate(prevprops,prevstate){
    document.getElementById("p1").innerHTML=prevstate.v;
  }
  render()
  {
    return(
      <>
      <h1>welcome to class component</h1>
      <input type="text" id="t1" placeholder="enter current value"></input>
      <br></br>
      <input type="button" value="click me" onClick={()=>this.show()}></input>
      <br></br>
      previous value:<div id="p1"></div>
      </>
    )
  }
}
export default Tamil

/*import React from 'react'

class Child extends React.Component {
  componentWillUnmount(){
    document.getElementById("res").innerHTML="component deleted"
  }
  render(){
  return (
    <div>
      <h1>this is a child componennt</h1>

      <h1>this is a child componennt</h1>

      <h1>this is a child componennt</h1>
    </div>
  )
}
}
class App extends Child{
  constructor(){
    super()
    this.state={view:true}
  }
  dis=()=>{
    this.setState({view:false})
  }
  render(){
    var comp =null;
    if(this.state.view===true)
      comp=<Child></Child>
    return(<>
    {comp}
    <button onClick={this.dis}>remove components</button>
    <div id='res'></div>
    </>)
  }
}

export default App


/*import React from 'react'

class Tamil extends React.Component {
  constructor(props){
    super()
    this.state=props.stud
  }
  componentDidMount()
  {
    setTimeout(()=> this.setState({rno:1,sname:"vignesh",mark:100}),5000)
  }
  componentDidUpdate(){
    document.getElementById("res").innerHTML="update success"
  }
  shouldComponentUpdate()
  {
    return true
  }
  getSnapshotBeforeUpdate(prevprops,prevstate){
    document.getElementById("res1").innerHTML="prev value:"+prevstate.rno+" "+prevstate.sname+" "+prevstate.mark
    return null
  }
  render(){
    return (
      <div>
        <h1>this is class components - life cycle 1.mount</h1>
        <h1>Rno:{this.state.rno}</h1>
        <h1>sname:{this.state.sname}</h1>
        <h1>mark:{this.state.mark}</h1>
        
        <div id='res'></div>
        <div id='res1'></div>
      </div>
    )
  }
 
}

export default Tamil

/*
import React from 'react'
import { useForm } from 'react-hook-form'

function Tamil  () {
  const {handleSubmit,register,formState:{errors}} = useForm()
  const dis=(data)=>{
    console.log(data)
  }
  
  return (
    
    <form onSubmit={handleSubmit(dis)}>
      <input type="text" placeholder='Enter roll number' {...register("rno",{required:true})}></input>
      {errors.rno && errors.rno.type==="required" && <font color='red' >"must important fill"</font>}
      <br></br>

      <input type="text" placeholder='Enter name' {...register("sname",{required:true,minLength:5})}></input>
      {errors.sname && errors.sname.type==="required" && "mustfill" }
      {errors.sname && errors.sname.type==="minLength" && "atlest 5 character"}
      <br></br>

      <input type="text" placeholder='Enter mark' {...register("mark",{min:0,max:100})}></input>
      {errors.mark && errors.mark.type==="min" && "mark only 0 to 100"}
      {errors.mark && errors.mark.type==="max" && "mark only 0 to 100"}
      <br></br>

      <input type="text" placeholder='Enter mark' {...register("city",{pattern:/[A-Z]+$/})}></input>
      {errors.city && errors.city.type==="pattern" && "only allowed capitals"}
      <br></br>

      <input type="text" placeholder='Enter mark' {...register("state",{pattern:/[A-Z]+g/})}></input>
      {errors.state && errors.state.type==="pattern" && "it allowed atlest one capitals"}

      <input type="text" placeholder='Enter mark' {...register("pin",{pattern:(/[A-Z]/g,/[a-z]/g,/[0-9]/g,/[^0-9a-zA-Z]/g),minLength:8})}></input>
      {errors.pin && errors.pin.type==="pattern" && "it allowed atlest one capitals"}
      {errors.pin && errors.pin.type==="minLength" && "atlest 8 character"}

      <input type="submit" value="clickme"></input>  
      <br></br>
    </form>
    
  )
}

export default Tamil


/*import React from 'react'

import { useForm } from 'react-hook-form'

function App  () {
  const {handleSubmit,register} = useForm()
  const dis=(data)=>{
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(dis)}>
      <input type="text" placeholder='Enter roll number' {...register("rno")}></input>
      <input type="text" placeholder='Enter name' {...register("sname")}></input>
      <input type="text" placeholder='Enter mark' {...register("mark")}></input>
      <input type="submit" value="clickme"></input>
    </form>
  )
}

export default App



/*import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'

import React from 'react'

const App = () => {

var arrimg = [img1,img2,img3]
var i= 0

function myfunction(){
  document.getElementById("imgid").src=arrimg[i]
  i=i+1
  if(i>=3){
    i=0
}
    setTimeout(myfunction,1000)
  
}
myfunction()

  return (
    <div>
      <h1>image slide show</h1>
      <img src={img1} alt="" id="imgid"></img>
    </div>
  )
}

export default App


/*import { useEffect } from "react";
import Failure from './Components/Failure'

const App = () => {
  
  useEffect(()=>{
    document.title="tamil"
    //if we change the input after given first time its not change in dom 
    // second time change autumatically call first change each and every time input change 
    // you can see in settimeout function
    setTimeout(() => {
      document.title="maths"
    }, 4000);
    
  })
  return (
    <div>
      <h1>useEffect hook</h1>
      <Failure></Failure>
      {document.title}
    </div>
  )
}

export default App


/*import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName] = useState("vicky")
  // events are only used in input type 
  // const dis=(event)=>{
  //   setName(event.target.value)
  //   console.log(event.target.value)
  // }
  const dis=()=>
                   {
                    setName("tamil")
                   }
    return (
    <div>
      <>
       <h1>welcome to react hook</h1>
       <h2>{name}</h2>
       <button onClick={dis}>clickme</button>
       //{/* <input type='text' value={name} onChange={(e)=>dis(e)}></input> */
  /*    </>
    </div>
  )
}

export default App



/*import React from 'react'
import { useState } from 'react'

const App = () => {
  const [gender,setGender]=useState("")

  const dis=(e)=>{
    if(e.target.value==="male"){
      e.target.checked=true
      setGender("male")
    }

    if(e.target.value==="Female"){
      e.target.checked=true
      setGender("Female")
    }

    if(e.target.value==="others"){
      e.target.checked=true
      setGender("others")
    }

  }

  return (
    <div>
      <>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="male"/>male<br></br>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="Female"/>Female<br></br>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="others"/>others<br></br>
      selected gender :{gender}
      </>
    </div>
  )
}

export default App


/*import React from 'react'
import { useState } from 'react'
const App = () => {
  const [rno,setrno]=useState(0)
  const [sname,setsname]=useState("")
  const [mark,setmark]=useState(0)
  const dis=(e)=>{
    if(e.target.id==="t1")
      setrno(e.target.value)
    if(e.target.id==="t2")
      setsname(e.target.value)
    if(e.target.id==="t3")
      setmark(e.target.value)
  }

  return (
    <div>
      <>
      <input type='text' id='t1' onChange={(e)=>dis(e)} value={rno}></input>
      <input type='text' id='t2' onChange={(e)=>dis(e)} value={sname}></input>
      <input type='text' id='t3' onChange={(e)=>dis(e)} value={mark}></input>
      </>
    </div>
  )
}

export default App


/*import React from 'react'
import { useState } from 'react'

const App = () => {
  const [age,setAge]=useState(0)
  // var v=200
  const show=(ev)=>{
    //v=v+1
    //ev.target.value=v
    setAge(ev.target.value)
    console.log("---------",ev.target.value)
  }
  return (
    <div>
      <h1>use hooks to change onchanhe in xml front page without hoook we can't change we can change only in console</h1>
      <input type="text" onChange={(e)=>show(e)} value={age}></input>
    </div>
  )
}

export default App


/*import React from 'react'

const App = () => {
  return (
    <div>
      <>
      <h1>Value attribute issue in textbox</h1>
      <input type='text' value="100"></input>
      <p>it is 24 bar 7 running app input value is given it cant be change but in normal html we can change</p>
      <p>then we use very important hooks it is main topic to control the components in react js</p>
      </>
    </div>
  )
}
export default App


/*function Tamil(){
const dis = (event)=>{
  //use to find the tage name currenlty working tag by your self
  document.getElementById("res").innerHTML=event.target.tagName+" currenlty working tag by your self"
  
  // use to find the tage name currenlty working tag by your self and also we need 
  // to find same tag with different type use Type in same tag like input so use this method to find input in which type like text,passetc...,
  document.getElementById("res1").innerHTML=event.target.tagName+" currenlty working tag by your self"+
  "Type in same tag like input so use this method "+event.target.type
}
return(
  <>
  <h1> Event .target.tagName </h1>
  <h1> this is used to find which tag we use crrently "password:Livewirre$3210" </h1>
  <input type="text" onChange={(e)=>dis(e)}></input><br></br>
  <textarea onChange={(e)=>dis(e)}></textarea><br></br>
  <select  onChange={(e)=>dis(e)}>
    <option>sunday</option>
    <option>monday</option>
    <option>tuesday</option>
    <option>thusday</option>
    <option>friday</option>
  </select>
  <div id="res"></div>
  <div id="res1"></div>
  </>
)
}
export default Tamil


/*function Tamil(){
const show=(event)=>{
  event.preventDefault()//prevent automatic refresh page 
  console.log("submit button pressed")
}
var unc=0,pwc=0
const dis=(event)=>{
if(event.target.name==="un")
unc+=1
if(event.target.name==="pw")
pwc+=1

document.getElementById("r1").innerHTML=unc
document.getElementById("r2").innerHTML=pwc
}
return(
  <>
  <form onSubmit={show}>
  <h1>button types and properties in input</h1>
  <h1>diff b/w button in input and button </h1>
  <h1>in submit button automatically does </h1>
  <input type="text" onChange={(e)=>dis(e)} name="un" placeholder="Enter user name"></input><br></br>
  <input type="password" onChange={(e)=>dis(e)} name="pw" placeholder="enter password"></input><br></br>
  <input type="submit"></input>
  <input type="button" value="clickme"></input>
  <input type="reset"></input>
  <button><b>click me</b></button>
  <div id="r1"></div>
  <div id="r2"></div>
  </form>
  </>
)
}
export default Tamil
/*function Tamil(){
  var c=0;
const dis1=(e)=>{
  e.target.style.backgroundColor="red";
  e.target.value=parseInt(e.target.value)+1;
}
const dis2=(e)=>{
  e.target.style.backgroundColor="green";
}
return(
  <>
  <h1>onBlur Event</h1>
  <h1>parseInt Event, declear default value 0 for c in dis1 to change value in inpue and value in return</h1>
  <input type="text" value={c} onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
  <input type="text" value={c} onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
  <input type="text" value={c} onBlur={(e)=>dis1(e)} onFocus={(e)=>dis2(e)}></input>
  </>
)
}
export default Tamil

/*function Tamil(){
const dis1 = (event)=>{

  document.getElementById("t1").style.backgroundColor="white"
  document.getElementById("t2").style.backgroundColor="white"
  document.getElementById("t3").style.backgroundColor="white"

  if(event.target.id==="t1")
  document.getElementById("t1").style.backgroundColor="lightgreen"
  
  if(event.target.id==="t2")
  document.getElementById("t2").style.backgroundColor="lightgreen"
  
  if(event.target.id==="t3")
  document.getElementById("t3").style.backgroundColor="lightgreen"
  
}
  return(
    <>
    <h1>onfocus Event</h1>
    
    <input type="text" onFocus={(e)=>dis1(e)} id="t1"></input>
    <input type="text" onFocus={(e)=>dis1(e)} id="t2"></input>
    <input type="text" onFocus={(e)=>dis1(e)} id="t3"></input>
    </>
  )
}
export default Tamil


/*function Tamil(){
  const show=()=>{
    if(document.getElementById("hid").type=="hidden")
    document.getElementById("hid").type="text";
    else
    document.getElementById("hid").type="hidden";
  }
  const copyph=()=>{
    document.getElementById("hid").value=document.getElementById("ph").value
  }
  return(
    
    <>
    <h1>button submit hide and show Event</h1>
    <input type="number" onChange={copyph} id="ph" placeholder="enter name"></input>
    <input type="hidden" value="" id="hid" ></input>
    <input type="button" onClick={show} value="show/hide" ></input>
    </>
  )
}
export default Tamil


/*
function Tamil()
{
 return(
   <form>
     <input type="text" placeholder="enter user name:" value="tamil"></input>
     <br></br>
     <input type="number" placeholder="enter no" min="100" max="200"></input>
     <br></br>
     <lable>Enter password:
       <input type="password" placeholder="enter password"></input>
     </lable>
     <br></br>
     <input type="radio" name="gen" checked></input>Male
     <input type="radio" name="gen" checked></input>Female
     <input type="radio" name="gen" checked></input>Others
     <br></br>
     select course:
     <input type="checkbox"></input>c
     <input type="checkbox"></input>c++
     <input type="checkbox"></input>java
     <br></br>
     Enter Address:
     <textarea col="20" row="7"></textarea>
     <br></br>
     <select>
       <option>january</option>
       <option>febrarury</option>
       <option>march</option>
     </select>
     <br></br>
     Enter Email:<input type="email"></input>

     select DOB:
     <input type="date"></input>
     <br></br>
     select time:
     <input type="time"></input>
     <br></br>
     <input type="week"></input>
     <br></br>
     <input type="file"></input>
     <br></br>
     <input type="range" min="0" max="7"></input>
     <br></br>
     <input type="hidden" value="100" name="hid"></input>
     <br></br>
     <input type="reset" name="clr"></input>
     <br></br>
     <input type="submit"></input>
     <br></br>
     <input type="button" value="clickme"></input>
     <br></br>
     <input type="reset" value="clear"></input>
   </form>
 )
}
export default Tamil

/*import React from 'react'

class App extends React.Component
{
  //state + props
  constructor(props)
  {
    super()
    this.state = props.jsonobject
    // this.state={//this state is default keyword , it posses json file data to the return in app.js not from index.js
    //   rno:1001,
    //   sname:"prbhu",
    //   mark:100
    // }
  }
  change = () =>{ //button used below the return
    this.setState({mark:150,sname:"viky"})
  }
  render(){ 
    return(
      <>
          <h1>props using class Components</h1>
          {this.state.rno}<br></br>
          {this.state.sname}<br></br>
          {this.state.mark}
          <button onClick={this.change}>change mark and name use change function in this keyword</button>
    
      </>
    )
  }
}
export default App


/*class App extends React.Component
{
  constructor(props)
  {
    super()

  }
  render(){ 
    return(
      <>
          <h1>props using class Components</h1>
          {this.props.arrlist.map((v)=><><br></br> {v.sno} {v.sname} {v.mark} </>)}
    
      </>
    )
  }
}
export default App



// function Tamil(props){

//   return(
//     <>
//     <ol>
//       {props.sub.map((v)=><>{v.sno} {v.sname} {v.mark}</>)}
//     </ol>
//     </>
//   )
// }
// export default Tamil



/*function Tamil(props){
  var tot = 0
  var subjsautomatic = []
  for(var v in props.sub.nest){
    tot = tot+props.sub.nest[v]
    subjsautomatic.push(v)
    console.log(v)
  }
return(
    <>
    <h1> Roll num:{props.sub.rno}</h1>
    <h1> name:{props.sub.sname}</h1>
    {/* <h1> mark:{props.sub.nest.english}</h1>
    <h1>  mark 1:{props.sub.nest["mark"]}</h1>
  //   <h1> mark 2:{props.sub.nest["tamil"]}</h1> *}
  //  <ol>{subjsautomatic.map((s)=><li>{s} marks : {props.sub.nest[s]}</li>)} </ol>
  //   <h1> total :{tot}</h1>
  //   <h1>my hobbies...</h1>
  //   <ol>{props.sub.hobbies.map((v)=><li>{v}</li>)} </ol>
  //   {/* 1.{props.sub.hobbies[0]}
    <br></br>
    2.{props.sub.hobbies[1]}
    <br></br>
    3.{props.sub.hobbies[2]}
    <br></br> */ /*}
    </>
)
}
export default Tamil*/


/*import './App.css'
function Tamil()
{
//1.single top level element
const v1=<h1>welcome to header</h1>
//2.multiple top level element
const v2=<>one top level element <h1>to be continued</h1> <h2>hi thanks</h2> </>
//3.expression
var a= 10;
var b =20;
const v3 = <h1>total : {a+b}</h1>
//4.elements must be closed 
var v4 =<hr></hr>
//5.using attributes classname insted of class
var v5 = <h1 id="myid" className="myclass">css style</h1>

var mystyle = {
  backgroundColor:"yellow",
  textAlign:"center",
  border:"10px dotted green",
  color:"red",
  textTransform:"uppercase"
}
return(
<>
<h1 style={{backgroundColor:'yellow',color:'red'}}>react jsx - javascript and xml -allow html code in react</h1>
single header :{v1}
multiple header:{v2}
{v3}
{v4}
{v5}
<h1 style={mystyle}>hi welcom to internal css</h1>
<h1 style={mystyle}>hi welcom to internal css</h1>
<h1 style={mystyle}>hi welcom to internal css</h1>
<h1 style={mystyle}>hi welcom to internal css</h1>
<h6>external css</h6>
</>
)
}
export default Tamil


/*import React from 'react'
import Success from './Components/Success';
import Failure from './Components/Failure';
import ph1 from './Images/img1.jpg';
import ph2 from './Images/img2.jpg';
import ph3 from './Images/img3.jpg';
import ph4 from './Images/img4.jpg';
import ph5 from './Images/img5.jpg';
import { k1, k2, k3, k4, k5, k6 } from './Components/Components';

function Tamil() {
  var user = true
  return (
    <>
    <div>
      <h1>tamil mark:{k1}</h1>
      <h1>english mark:{k2}</h1>
      <h1>maths mark:{k3}</h1>
      <h2>{k4} {k5} {k6}</h2>
      {user===false ? <Success /> : <Failure /> }
      <img src={ph1} alt="wrong path"></img>
      <img src={ph2} alt="wrong path"></img>
      <img src={ph3} alt="wrong path"></img>
      <img src={ph4} alt="wrong path"></img>
      <img src={ph5} alt="wrong path"></img>
    </div>
    </>
  )
}

export default Tamil




/*function Tamil(){
var [v1,,v3,...v2] = [11,22,33,44,55,66,77,88,99]
return(
  <>
  {typeof(v1)}
  <br></br>
  {typeof(v2)}
  <br></br>
  {typeof(v3)}
  <br></br>
  {Array.isArray(v2) && "this is array"}
  <br></br>
  {v2.map(i=><><br></br>{i} </>)}
  </>
)
}
export default Tamil

/*function Tamil(){
  var arr =[11,22,33,-44,-55,-20]
  var json ={sno:1001,name:"tamil"}
  var boolen =true;
  var sum =0;
  return(
    <>
    <h1>data type of an array:{typeof(arr)}</h1>
    <h1>data type of an json:{typeof(json)}</h1>
    <h1>data type of an booolean:{typeof(boolen)}</h1>
     <h1>data type of an s1:{typeof(sum)}</h1>
     <h1>----------------------------</h1>
     <h1>arr variable:{(Array.isArray(arr) && "this is array") || "this not an array"}</h1>
     <h1>arr variable:{(Array.isArray(json) && "this is array") || "this not an json"}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
var arr =[11,22,33,-44,-55,-20]
var sum =0;
var sum1 =0, sum2=0;
var big=[0];
return(
  <>
  <h1>sum of array</h1>
  <h1 style={{display:"none"}}>{arr.map((item) => sum = sum+item)}</h1>
  <h1>answer:{sum}</h1>

  <h1>find largest number in array</h1>
  <h1>{arr.map((item) => big<item && <>{big=item}</>)}</h1>
  <h1>answer:{big}</h1>

  <h1>{arr.map((item)=>item%2===0 && <>{sum1 = sum1+1}</>)}</h1>
  <h1>even numbers count in array:{sum1}</h1>

  <h1>{arr.map((item)=>item<0 && <>{sum2 = sum2+1}</>)}</h1>
  <h1>negative numbers count in array:{sum2}</h1>
  </>
     )
}
export default Tamil

/*function Tamil(){
var arr=[11,22,33,44,55]
return(
  <>
  <h1>loop map method print all elements</h1>
  <ol type="A">
    {arr.map((item)=><li>{item}</li>)}
  </ol>

  <h1>loop map method even and odd numbers only</h1>
  <ol type="circle">
    {arr.map((item)=>
    <li>
    {(item%2===0 && item+"even")||(item%2!==0 && item+"odd")}
    </li>
    )}
  </ol>

  <h1>loop map method even  only</h1>
  <ul type="square">
    {arr.map((item)=>
    <>
    {(item%2===0 && <li>{item}</li>)}
    </>
    )}
  </ul>
  </>
)
}
export default Tamil

 
/*function Tamil(){
  var sobj={
    rno:1994,
    sname:"tamil",
    mark:{tamil:88,english:98,maths:88}
  }
  const dis=({rno,sname,mark:{tamil,english,maths}})=>{
    return [rno,sname,tamil,english,maths]
  }
  var [v1,v2,v3,v4,v5,v6]=dis(sobj)
  return(
    <>
      <h1> Nested Object Destruction</h1>
      <h1>Roll Number:{v1}</h1>
      <h1>Student Name:{v2}</h1>
      <h1>Tamil mark:{v3}</h1>
      <h1>English mark:{v4}</h1>
      <h1>Maths mark:{v5}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var sobj={
    rno:1994,
    sname:"tamil",
    mark:43
  }
  const dis=({rno,sname,mark})=>{
    return [rno,sname,mark]
  }
  var [v1,v2,v3]=dis(sobj)
  return(
    <>
      <h1> Object Destruction</h1>
      <h1>Roll Number:{v1}</h1>
      <h1>Student Name:{v2}</h1>
      <h1>Mark:{v3}</h1>
    
    </>
  )
}
export default Tamil

/*function Tamil(){
const show=(a,b)=>
{
  var add = a+b;
  var sub = a-b;
  var mul = a*b;
  var div = a/b;
  return [add,sub,mul,div]
}
var [v1,v2,v3,v4] = show(11,22)
return(
  <>
  <h1>Function Destracting</h1>
  Addition:{v1}<br></br>
  subtraction:{v2}<br></br>
  multiplication:{v3}<br></br>
  division:{v4}<br></br>
  </>
)
}
export default Tamil


/*function Tamil(){
  var [v1,v2,...v3] = [11,22,33,44,55,66,77,88,99,100]
 return(
  <>
  <h1>Array Destracting : To get data from source</h1>
  value 1 : {v1}
  <br></br>
  value 2 : {v2}
  <br></br>
  value 3 : {v3}
  </>
 )
}
export default Tamil

/*function Tamil(){
  const show=(a,b,c)=>{
    if(true){
      var k =100;
    }
    document.getElementById("r1").innerHTML="arrow function show"+(a+b+c+k)
  }
  function dis(a,b,c){
    var m = 100;
     document.getElementById("r2").innerHTML="normal display function "+(a+b+c+m)
  }
  return(
    <>
    <h1>arrow function with parameter and var let const variables</h1>
    <h1>let and const cant out of the statement it is an error var is global variable</h1>
    <button onClick={()=>dis(11,22,33)}>click me</button>
    <button onClick={()=>show(11,22,33)}>click me</button>
    <div id="r1"></div>
    <div id="r2"></div>
    </>
  )
  }
  export default Tamil

/*function Tamil(){
  const show=(a,b,c)=>{
    document.getElementById("r1").innerHTML="arrow function show"+(a+b+c)
  }
  function dis(a,b,c){
     document.getElementById("r2").innerHTML="normal display function "+(a+b+c)
  }
  return(
    <>
    <h1>arrow function with parameter</h1>
    <h1>retun contains only arrow function if parameter is passed</h1>
    <button onClick={()=>dis(11,22,33)}>click me</button>
    <button onClick={()=>show(11,22,33)}>click me</button>
    <div id="r1"></div>
    <div id="r2"></div>
    </>
  )
  }
  export default Tamil


/*function Tamil(){
const show=()=>{
  document.getElementById("r1").innerHTML="arrow function show"
}
function dis(){
   document.getElementById("r2").innerHTML="normal display function "
}
return(
  <>
  <h1>arrow function without parameter</h1>
  <button onClick={dis}>click me</button>
  <button onClick={()=>dis()}>click me</button>

  <button onClick={show}>click me</button>
  <div id="r1"></div>
  <div id="r2"></div>
  </>
  )
}
export default Tamil

/*function Tamil(){
  var stud =[{rno:1001,sname:"tamil",mark:85},
             {rno:1002,sname:"vignesh",mark:86},
             {rno:1003,sname:"prabhu",mark:75}
            ]
  return(
    <>
    <h1> array  contains json</h1>
    <h1>rool number:{stud[0].rno}</h1>
    <h1>rool number:{stud[0].sname}</h1>
    <h1>rool number:{stud[0].mark}</h1>
    <h1>rool number:{stud[1].rno}</h1>
    <h1>rool number:{stud[1].sname}</h1>
    <h1>rool number:{stud[1].mark}</h1>
    <h1>rool number:{stud[2].rno}</h1>
    <h1>rool number:{stud[2].sname}</h1>
    <h1>rool number:{stud[2].mark}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    subjects:[77,88,75]
  }
  return(
    <>
    <h1>json with array</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.subjects[0]}</h1>
    <h1>english mark:{stud.subjects[1]}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    subjects:{
    mark1:88,
    mark2:75}
  }
  return(
    <>
    <h1>nested json</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.subjects["mark1"]}</h1>
    <h1>english mark:{stud.subjects["mark2"]}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    mark1:88,
    mark2:75
  }
  return(
    <>
    <h1>json</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.mark1}</h1>
    <h1>english mark:{stud.mark2}</h1>
    </>
  )
}
export default Tamil

/*
function Tamil(){
  return(
    <>
    <div><CurrentBill></CurrentBill></div>
    <div><Game></Game></div>
    <div><Grade></Grade></div>
    <div><Cuttofmarks></Cuttofmarks></div> 
    <div><Purchaseproducts></Purchaseproducts></div>
    <h1>hi</h1>
    </>
  )
}
export default Tamil

function CurrentBill(){
  var unit =250;
  return(
    <>
    {
      (unit<100 && unit+"Free")||(unit>101 && unit<201 && unit*2 +"rupies")||(unit>201 && unit<401 && unit*3 +" rupies")||(unit>401 && unit<500 && unit*4 +" rupies")||(unit>500 && unit*7 +" rupies")
    }
    </>
  )
}

function Game(){
  var points =1;
  return(
    <>
    {
      (points === 5 && points+"Winner")||(points === 4 && points +"Runner")||(points<=3 && points +" Loser")
    }
    </>
  )
}

function Grade(){
  var grades=45
  return(
    <>
    {
      (grades >= 85 && grades+"Outstanding")||(grades === 75 && grades === 84.9 && grades +"Excellet")||(grades === 65 && grades === 74.9 && grades +" Very good")||(grades === 55 && grades === 64.9 && grades +" Good")||(grades<55 && grades +" Fair")
    }
    </>
  )
}

function Cuttofmarks(){
  var mark =155;
  return(
    <>
    {
      (mark >= 195 && mark+"Annauniversity")||(mark >= 190 && mark +"REC")||(mark >= 185 && mark +" CIT")||(mark >= 180 && mark +" PSG")||(mark<180 && mark +" Any Collage")
    }
    </>
  )
}

function Purchaseproducts(){
  var rate =5000;
  return(
    <>
    {
      (rate >= 10000 && rate*0.1+" Discount")||(rate >= 7500 && rate <= 9999 && rate*0.07+"Discount")||(rate >= 5000 && rate <= 7499 && rate*0.03 +" Discount")||(rate <= 5000 && rate*0.01 +" Discount")
    }
    </>
  )

}
/*function Tamil(){
  // var arr = new array(65,75,85,75,35,48,65,75)
  var arr = [75,85,95,45,75,85,95,45]
  var sum =0;
  for(var i=0 ;i<arr.length;i++){
    sum = sum+arr[i]
  }
  return(
    <>
    <cu></cu>
    <h1>index:0 {arr[0]}</h1>
    <h1>index:1 {arr[1]}</h1>
    <h1>index:2 {arr[2]}</h1>
    <h1>index:3 {arr[3]}</h1>
    <h1>sum of array: {sum}</h1>
    </>
  )
}
export default Tamil


/*function Tamil(){
 var m1= 65;
 var m2= 75;
 var m3= 95;
 var m4= 85;
 var m5= 55;
 var avg = (m1+m2+m3+m4+m5)/5;
return(
  <>
  <h1>your percentage :{avg}</h1>
  <h2>
    your grade:
     {(m1>34 && m2>34 && m3>34 && m4>34 && m5>34 &&
      ((avg>=85 && "outstanding")||(avg>=75 && "excellent")||(avg>=65 && "very good")||(avg>=55 && "good")||"fair"))
      ||
      "no grade because fail"
    }
  </h2>
  </>
)
}
export default Tamil


/*function App(){
  var n= -5;
  return(
    <>
    {
      (n<0 && n+"is -ve")||(n>0 && n+"is positive")||(n===0 && n+"is zero")
    }
    </>
  )
}
export default App



// function App(){
//   return(
//     <>
//     <h1>hi welcome to react to first time</h1>
//     <h1>one group level element</h1>
//     <p>tyriar.lorem-ipsum lihflihure ejrhfkjehgkjergf .ekjrfhoi5rhfjkn  
//     </p>
//     </>
//   )
// }
// export default App


// function Tamil(){
// var age =17;
// return(
//   <>
//   <h1>problem 1</h1>
 
//   <h1>{(age>18 && age+"he/se is eligible to vote") || age+"he/se is not eligible to vote"}</h1>
//   </>
// )
// }

// function year1(){
//   var leapyear = 2024;
//   return(
//     <>
//     <h2>problem 2</h2>
//     <h1>{(leapyear/4===0 && leapyear+"it is leap year") || leapyear+"it is not leap year"}</h1>
//     </>
//   )
//   }


// function App(){
//   var n1 = 2;
//   return(
//     <>
//     <Tamil></Tamil>
//     <year1></year1>
//     <h1>problem 3</h1>
//     <h1>{(n1>0 && n1+"is +ve") || n1+"is -ve"}</h1>
//     </>
//   )
// }
// export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/