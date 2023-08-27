const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
