import {useState} from 'react';
function AboutUs(props){
    //props.CompanyName="Gavs ltd"; state can be modify but prompt cannot be modified
    const[CompanyName,setCompanyName]=useState(props.CompanyName);
    const[Address,setAddress]=useState(props.Address);

    return(
        <center>
        <div>
            <b>Contact us @{CompanyName}</b><br/>
            <b>Our Address</b>{Address};
        </div>
        </center>
    )

}
export default AboutUs;