const SectionTitle = ({ title }) => {
    return (
        <div className="relative flex justify-center">
            <h1 className="pb-1 capitalize text-2xl font-semibold border-b-2 border-orange-400">{title}</h1>
        </div>
    );
}

export default SectionTitle;