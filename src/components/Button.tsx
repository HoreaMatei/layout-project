import "./Button.css";

type Props = {
  className?: string; // Explicitly set type
  text: string;
};

const Button: React.FC<Props> = ({ className, text }) => {
  return (
    <a className={`btn-div ${className} `} href="#">
      <span className="uppercase " data-hover={text}>
        {text}
      </span>
    </a>
  );
};

export default Button;
