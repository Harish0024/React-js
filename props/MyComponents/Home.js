import Growplants from "./Growplant"

function Home(){
const plantdetail={
    name:'rose',
    icon:'❤️',
    size:50,
    about:[
        "rose is red",
        "it is beautiful",
        "it is symbol of love"
    ],

  }
  return(
    <div>
    <h1>Welcome to Home</h1>
    <Growplants plantdetail={plantdetail}/>
    <Growplants/>
    </div>
  )
}
export default Home;