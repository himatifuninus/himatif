import { Fragment } from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Fragment>
      {props.to ? (
        <Link to={`${to}`}>
          <button className="">{props.text}</button>
        </Link>
      ) : (
        <button className="">{props.text}</button>
      )}
    </Fragment>
  );
};

export default Button;
