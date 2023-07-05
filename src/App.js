import './App.css'
import { dataPhotos } from './data/dataPhotos'

function App() {
  return (
    <div>
      {
        dataPhotos.map( obj => {
          return (
            <div key={obj.id}>
              <img alt={obj.name} src={obj.path} />
            </div>
          )
        })
      }
    </div>
  )
}

export default App
