import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    var person1={
        name: "Shahid Afridi",
        job:"Web Developer"
    }
    var person2={
        name: "Ayman Afridi",
        job: "Photographer"
    }
    var style1={
        color: "goldenrod",
        backgroundColor: "aqua"
    }
    var style2={
        backgroundColor: "goldenrod",
        color: "aqua"
    }
    var styleBGColor={
        backgroundColor:"gray"
    }
    var products=[
        {name:'Mobile',price:'$100'},
        {name:'Laptop',price:'$500'},
        {name:'Camera',price:'$300'}
    ]
    var friends=[
        {name:'Ruma',home:'amnura',phone:'01704805887'},
        {name:'Galib',home:'Rajshahi',phone:'01770787881'},
        {name:'Kalin',home:'Rangamati',phone:'01812345678'},
        {name:'Habib',home:'amnura',phone:'01795012101'},
        {name:'Roni',home:'amnura',phone:'01787654321'}
    ]
    return ( 
        <div className = "App" >
            <div>
                <Counter></Counter>
            </div>
           <div style={{backgroundColor:'gray', border:'5px dotted goldenrod', margin:'10px'}}>
           <h1 style={style1}>{person1.name}</h1>
            <h2 style={style2}>Occupation: {person1.job}</h2>
            <Contact phone="01704805886" email="shahidafridi.cse@gmail.com" hobby="Travelling"></Contact>
           </div>
            <div style={{backgroundColor:'gray', border:'5px dotted goldenrod', margin:'10px'}}>
            <h1 style={style1}>{person2.name}</h1>
            <h2 style={style2}>Occupation: {person2.job}</h2>
            <Contact phone="01704805887" email="aymanafridi.photo@gmail.com"  hobby="Travelling"></Contact>
            </div>
            <div>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
            </div>
            <div>
               { friends.map(f=><Friend friend={f}></Friend>)}
            </div>
       </div>
    );
}
function Contact(props){
     return (
        <div style={{border:'2px solid red', margin:'10px'}}>
            <h3>Phone: {props.phone} </h3>
            <h3>Email: {props.email}</h3>
            <h3>Hobby: {props.hobby}</h3>
        </div>
     );
}
function Product(props){
    var productStyle={
        backgroundColor:'goldenrod',
        border: '2px solid black',
        borderRadius: '20px',
        margin:'10px',
        padding: '20px'
    }
    return (
        <div style={productStyle}>
            <h3>Product: {props.product.name}</h3>
            <h4>Price: {props.product.price}</h4>
            <button>BUY NOW</button>
        </div>
    )
}
function Friend(props){
    var friendStyle={
        backgroundColor:'tomato',
        border: '3px solid aqua',
        margin:'10px',
        padding:'20px',
        borderRadius:'20px'
    }
    const {name,home,phone}=props.friend;
    return(
        <div style={friendStyle}>
            <h2>name: {name}</h2>
            <h4>home: {home}</h4>
            <h4>phone: {phone}</h4>
        </div>
    )
}
function Counter(){
    const [count,setCount]=useState(10);
    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}
export default App;