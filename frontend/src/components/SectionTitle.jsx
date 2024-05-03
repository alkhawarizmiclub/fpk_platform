const SectionTitle = ({ title }) => {
    return (
        <div className="pb-10 relative flex justify-center">
            <h1 className="pb-1 capitalize text-2xl font-semibold border-b-2 border-orange-400">{title}</h1>
        </div>
    );
}

export default SectionTitle;