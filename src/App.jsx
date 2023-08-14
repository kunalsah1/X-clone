import { useSelector } from 'react-redux'
import './App.css'
import Twitter from './Twitter'
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {

  const { isOpen } = useSelector((store) => store.modal)
  const { loginModalOpen } = useSelector((store) => store.login)


  return (
    <>
      <main>
        <Twitter />
        {isOpen && <SignUp />}
        {loginModalOpen && <Login />}

      </main>
    </>
  )
}

export default App
