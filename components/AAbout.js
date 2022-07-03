import React,{useState} from 'react'

export default function AAbout(props) {
    // const [mystyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
        
    // })
    let mystyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
      border:'2px solid',
      borderColor:props.mode==='dark'?'white':'#042743'

    }
    const[tntext,setbtnstate]=useState("Enable Light mode")
    // const toggelstyle=() =>{
    //     if(mystyle.color ==='white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'

    //         }

    //         )
    //         setbtnstate("Enable dark Mode")
    //     }
    //     else{
    //       setmyStyle({
    //         color:'white',
    //         backgroundColor:'black',
    //         border :'2px solid white'

    //     }

    //     )
    //     setbtnstate("Enable light Mode")

    //     }
    // }   
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Accordion Item #1</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Accordion Item #2</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Accordion Item #3</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
{/* <button onClick={toggelstyle} type="button" className="btn btn-primary">{tntext}</button> */}
</div>
    </div>
  )
}
