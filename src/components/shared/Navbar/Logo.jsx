import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex">
        <img
          className="hidden md:block animate-spin"
          src={logo}
          alt="logo"
          width="30"
        />
        <p className="text-xl p-0 italic pl-2 text-orange-600 font-extrabold">
          WanderNest
        </p>
      </div>
    </Link>
  );
};

export default Logo;
