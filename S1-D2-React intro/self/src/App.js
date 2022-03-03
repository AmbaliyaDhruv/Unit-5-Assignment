
import './App.css';



function App(){
  const elem=[
    {spic:"Operating System",bread:["Android","Blackberry","iPhone","Windows Phone"]},
    {spic:"Manufacture",bread:["Samsung","HTC","Micromax","Apple"]}
  ]
  return(
    <div>{elem.map((el)=><Card spic={el.spic} bread={el.bread}/>)}</div>
  )
}

function Card({spic,bread}){
   return(
     <div>
         <h1>Mobile {spic}</h1>
         <ul>{bread.map((el)=><li>{el}</li>)}</ul>
     </div>
 
   )
     

}

export default App;
