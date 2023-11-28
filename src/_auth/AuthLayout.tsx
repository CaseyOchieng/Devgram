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
      <section>
        <Outlet/>
      </section>
      </>
    )
    }
    </>
  )
}

export default AuthLayout