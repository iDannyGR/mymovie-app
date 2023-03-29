import { ReactElement } from 'react';
import { Login as Loginform } from '@/components/Login';

const Login = (): ReactElement => {
  return (
    <div className="relative w-full">
      <svg className="absolute -z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000b76"
          fillOpacity="1"
          d="M0,64L26.7,85.3C53.3,107,107,149,160,138.7C213.3,128,267,64,320,37.3C373.3,11,427,21,480,21.3C533.3,21,587,11,640,42.7C693.3,75,747,149,800,186.7C853.3,224,907,224,960,213.3C1013.3,203,1067,181,1120,160C1173.3,139,1227,117,1280,128C1333.3,139,1387,181,1413,202.7L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <Loginform />
    </div>
  );
};

export default Login;
