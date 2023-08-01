import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    let user = 'user'
  return (
    <div>
        {
            user === 'admin' ? <Outlet /> : <Navigate to={'/'}/>
        }
    </div>
  )
}

export default ProtectedRoutes