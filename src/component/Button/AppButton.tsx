
import './AppButton.css'; 
interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; 
    loading?: boolean;  
    type?: "button" | "submit" | "reset"; 
}


export const AppButton: React.FC<AppButtonProps> = ({
    className = '',
    loading = false,
    type = 'button',
    children,
    ...rest
}) => {
    return (
        <button
            className={`app-button ${className}`} 
            type={type} 
            disabled={loading} 
            {...rest} 
        >
            {loading ? 'Loading...' : children} {}
        </button>
    );
};