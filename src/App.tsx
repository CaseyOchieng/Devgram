import { Route, Routes } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignupForm';
import Home from './_root/Pages/Home';
import RootLayout from './_root/RootLayout';
import './css/globals.css';
function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm/>} />
            <Route path="/sign-up" element={<SignUpForm/>} />
        </Route>
        {/*End Public Routes*/}

        {/*Private Routes*/}
        <Route element={<RootLayout />}>
            <Route index element={<Home/>} />
            
        </Route>



        {/*End Private Routes*/}
      </Routes>
    </main>
  );
}

export default App;
