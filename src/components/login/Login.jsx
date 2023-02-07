import React from 'react'
import GithubButton from 'react-github-login-button'
import './login.css'

function Login() {
  return (
    <div className='login-container'>
        <section className="vh-100 mt-5" style={{backgroundColor: "#82adfc"}}>
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                    <div className="card shadow-2-strong shadow-lg" style={{borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-4">Sign in</h3>
                          
                            <GithubButton className="mx-auto"
                                   onClick={() => { console.log('Github button clicked') }}
                                       />
                           
                            <hr className="my-4" />

                            <div className="form-outline mb-4">
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                            </div>

                            {/* <!-- Checkbox --> */}
                             <div className="form-check d-flex justify-content-start mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                            <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                            </div>

                            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Login

