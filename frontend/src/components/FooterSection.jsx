const FooterSection = ({ title, children }) => {
    return (
        <section className="space-y-3">
            {title && (
                <h1 className="text-xl text-orange-400 font-semibold">{title}</h1>
            )}
            {children}
        </section>
    );
}

export default FooterSection;