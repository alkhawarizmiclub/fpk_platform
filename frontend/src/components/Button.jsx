const Button = ({ plain_bg, children }) => {
    return (
        <button className={`relative group rounded-lg overflow-hidden ${plain_bg ? "text-white hover:text-orange-400" : "text-orange-400 hover:text-white"} shadow bg-white border border-orange-400`}>
            <div className={`absolute z-0 left-0 w-full h-full transition-all duration-300 ${plain_bg ? "bottom-0 group-hover:bottom-full" : "top-full group-hover:top-0"} bg-orange-400`}></div>
            <div className="relative z-[1] top-0 left-0 transition-all duration-300" >
                {children}
            </div>
        </button>
    );
}

export default Button;