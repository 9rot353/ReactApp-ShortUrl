import {Grid} from '@material-ui/core'
import './App.css';
import Search from './components/search.js'
function App() {
  return (
    <Grid className="App background-color" 
    container 
    direction='column' 
    justify='center' 
    alignItems='center'
    >
    <Search />
    </Grid>
     
  
  );
}

export default App;
