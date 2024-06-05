const EntPageContainer = ({ title, children }) => {
    return (
        <div className="m-5 p-5 rounded-lg bg-white">
            <h1 className="px-5 pb-5 mb-5 capitalize text-center text-xl text-slate-800 font-semibold border-b border-slate-3   00">{title}</h1>
            <div>{children}</div>
        </div>
    );
}

export default EntPageContainer;