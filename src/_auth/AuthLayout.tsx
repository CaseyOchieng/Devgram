import { Navigate, Outlet } from 'react-router-dom';


const AuthLayout = () => {
const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ?
    //If authenticated the user will be redirected to homepage.
    (
      <Navigate to="/"/>
    ):
    //If not authenticated the user will be redirected to login page.
    (
      <>
      <section className='flex flex-1 justify-center items-center flex-col'>
        <Outlet/>
      </section>

      <img
        className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat '
        src='/assets/images/side-img.svg'
        alt='The image'/>
      </>
    )
    }
    </>
  )
}

export default AuthLayout