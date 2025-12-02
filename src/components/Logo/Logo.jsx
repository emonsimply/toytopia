import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <p className="text-primary">
          T<span className="text-secondary/50">o</span>yT
          <span className="">o</span>pia
        </p>
      </Link>
    </div>
  );
};

export default Logo;
