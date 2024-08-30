
import './App.css'


function App() {
const list =  [{matricula: "123456", nome: "Augusto dos Anjos"},
               {matricula: "25363", nome: "André Rodrigues"},
               {matricula: "123456", nome: "Carla Araújo"}
              ];

  return (
    <>
      <div>
        
        <Button list={list}/>
      
      </div>
    </>
  )
}

export default App
