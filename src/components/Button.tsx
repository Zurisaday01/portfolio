import { ButtonProps } from '../Types';

const Button = ({ children, customClass }: ButtonProps) => {
	return (
		<button className={`tracking-widest uppercase ${customClass}`}>
			{children}
		</button>
	);
};
export default Button;
