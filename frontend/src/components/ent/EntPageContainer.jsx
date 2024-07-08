const EntPageContainer = ({ title, children }) => {
    return (
        <div className="m-5 p-5 rounded-lg bg-white">
            {title && <h1 className="px-5 pb-5 mb-5 capitalize text-center text-xl text-slate-800 font-semibold border-b border-slate-300">{title}</h1>}
            {children}
        </div>
    );
}

export default EntPageContainer;