import "./Button.css";

type Props = {
  className?: string; // Explicitly set type
  text: string;
  linkTo: string;
};

const Button: React.FC<Props> = ({ className, text, linkTo }) => {
  return (
    <a className={`btn-div ${className} `} href={linkTo}>
      <span className={`uppercase text-center ${className}`} data-hover={text}>
        {text}
      </span>
    </a>
  );
};

export default Button;
