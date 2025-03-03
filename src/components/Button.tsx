import "./Button.css";

type Props = {
  className?: string; // Explicitly set type
};

const Button: React.FC<Props> = ({ className }) => {
  return (
    <a className={`btn-div ${className} `} href="#">
      <span className="uppercase " data-hover="ABOUT US">
        About us
      </span>
    </a>
  );
};

export default Button;
