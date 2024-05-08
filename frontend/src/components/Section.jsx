import SectionTitle from './SectionTitle';


const Section = ( {title, className, children } ) => {
    return (
        <section className={`px-10 py-20 flex flex-col gap-10 ${className}`}>
            {title && (
                <SectionTitle title={title} />
            )}
            {children}
        </section>
    );
}

export default Section;