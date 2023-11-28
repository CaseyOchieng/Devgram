import { Route, Routes } from 'react-router-dom';
import './css/globals.css';
import SignInForm from './_auth/forms/SignInForm';
function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignInForm/>} />


        {/*End Public Routes*/}



        {/*Private Routes*/}
        <Route index element={<Home/>} />



        {/*End Private Routes*/}
      </Routes>
    </main>
  );
}

export default App;
