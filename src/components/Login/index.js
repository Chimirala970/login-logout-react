// Write your code here
const Login = props => {
  const {changeStatus} = props

  return (
    <button type="button" className="btn-login" onClick={changeStatus}>
      Logout
    </button>
  )
}
export default Login
