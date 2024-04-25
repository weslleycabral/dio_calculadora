import styles from './App.module.css';
import Container from './components/Container/Container';

function App() {
  const {div}  = styles;
  return (
      <>
          <div className={div}>
              <Container/>
          </div>
      </>
  )
}

export default App;
