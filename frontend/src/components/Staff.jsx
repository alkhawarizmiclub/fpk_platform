const Staff = ({ first_name, last_name, occupation, img_src }) => {

    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-5 max-w-48 w-full aspect-square rounded-full overflow-hidden bg-slate-300">
                <img src={img_src} alt={`${first_name} ${last_name}'s portrait image`} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-slate-800 text-lg font-semibold">{first_name} {last_name}</h1>
            <h2 className="text-slate-500">{occupation}</h2>
        </div>
    );
}

export default Staff;