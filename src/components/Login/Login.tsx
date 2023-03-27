import React from 'react'
import userLogo from '../../assets/img/user.svg'

const Login = () => {
  return (
     <div className="flex flex-col h-full w-full justify-center items-center" >
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  			<path fill="#000b76" fillOpacity="1" d="M0,64L26.7,85.3C53.3,107,107,149,160,138.7C213.3,128,267,64,320,37.3C373.3,11,427,21,480,21.3C533.3,21,587,11,640,42.7C693.3,75,747,149,800,186.7C853.3,224,907,224,960,213.3C1013.3,203,1067,181,1120,160C1173.3,139,1227,117,1280,128C1333.3,139,1387,181,1413,202.7L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
		</svg>
		<h1 className='font-extrabold text-3xl mb-20 text-blue-800 drop-shadow-lg'>Hello Please Login !!</h1>
		<img src={userLogo} alt="" className='h-32 mb-10'/>
		<label className="font-semibold mt-6">Username or Email</label>
		<input className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2" type="text" />
		<label className="font-semibold mt-63 mt-3" >Password</label>
		<input className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2" type="password" />
		<button className="flex items-center justify-center h-12 px-6 w-64 shadow-md shadow-slate-700 bg-blue-800 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
		<p className='mt-24 font-bold'>Suport by <a href="https://www.themoviedb.org/">Mobie DB</a></p>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fillOpacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,144C213.3,149,267,107,320,122.7C373.3,139,427,213,480,229.3C533.3,245,587,203,640,165.3C693.3,128,747,96,800,90.7C853.3,85,907,107,960,117.3C1013.3,128,1067,128,1120,149.3C1173.3,171,1227,213,1280,213.3C1333.3,213,1387,171,1413,149.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
</svg>
	</div>

 
  )
}

export default Login