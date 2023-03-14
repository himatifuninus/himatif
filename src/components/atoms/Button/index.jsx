import { Fragment } from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Fragment>
      {props.to ? (
        <Link to={`${props.to}`}>
          <button {...props} className="bg-[#020181] p-3 h-auto px-10 rounded-lg text-white">
            {props.text}
          </button>
        </Link>
      ) : (
        <button {...props} className="bg-[#020181] p-3 h-auto px-10 rounded-lg text-white">
          {props.text}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
