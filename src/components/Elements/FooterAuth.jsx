import React from 'react'
import { Link } from 'react-router-dom';

const FooterAuth = ({isLogin}) => {
  return (
    <div className="flex items-center justify-center text-sm font-bold  flex-col">
      <p className="text-white">{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
      <Link to={isLogin ? "/register" : "/login"} className="text-blue-300 hover:underline">
       {isLogin ? " Sign Up" : "Sign In"}
      </Link>
    </div>
  );
}

export default FooterAuth