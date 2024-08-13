import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <a href={props.href} className={`${props.className} py-2 px-3 rounded-md`}>{props.children}</a>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
};


export default Button;
