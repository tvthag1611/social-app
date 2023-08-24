const Input = ({ className, ...props }) => {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-black bg-background px-3 py-2 text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder-black file:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
};

export default Input;
