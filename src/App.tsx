import styles from './App.module.css';
import Container from './components/Container/Container.js';

function App() {
  const {container, titulo} = styles;
  return (
    <div className={container}>
      <h1 className={titulo}>APP CONTAINER</h1>
    <Container/>
    </div>
  )
}

export default App;
