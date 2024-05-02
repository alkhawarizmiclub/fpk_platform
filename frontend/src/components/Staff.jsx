const Staff = ({ first_name, last_name, occupation, img_src }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-5 max-w-48 w-full aspect-square overflow-hidden rounded-full flex items-center justify-center bg-slate-300">
                <img src={img_src} class="object-cover w-full h-full" alt={`${first_name} ${last_name}'s portrait image`}/>
            </div>
            <h1 className="text-slate-800 text-lg font-semibold">{first_name} {last_name}</h1>
            <h2 className="text-slate-500">{occupation}</h2>
        </div>
    );
}

export default Staff;