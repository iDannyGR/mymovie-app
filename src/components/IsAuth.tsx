import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    isAllowed:boolean
    children:ReactNode
}


const IsAuth = ({children, isAllowed }:Props) => { 

  return !isAllowed ? <Navigate to={"/"} /> : <>{children}</>

}   


export default IsAuth