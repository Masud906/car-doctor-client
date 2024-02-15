import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {

  const{signIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
   const email = form.email.value;
    const password = form.password.value;
    

    signIn(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = { email };
      
      //get access token
      axios.post('https://car-doctor-server-one-tan.vercel.app/jwt', user, { withCredentials: true})
      .then(res =>{
        console.log(res.data)
        if(res.data.success) {
          navigate(location?.state ? location?.state  : '/')
        }
      })

    })
    .eatch(error => console.log(error));

  }
    return (
        <div className="hero min-h-screen bg-orange-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2 mr-12">
      <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl font-bold text-center mt-3"> Login</h1>
      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input className="btn btn-warning" type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'> New to Car Doctor <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;