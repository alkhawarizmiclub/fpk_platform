const Footer = () => {
    return (
        <footer className="p-10 text-white bg-blue-600">
            <div id="footer-container" className="mx-auto max-w-screen-xl grid grid-cols-3">
                <section className="px-10 border-r border-blue-400 last:border-0">
                    Section 1
                </section>
                <section className="px-10 border-r border-blue-400 last:border-0">
                    Section 2
                </section>
                <section className="px-10 border-r border-blue-400 last:border-0">
                    Section 3
                </section>
            </div>
        </footer>
    );
}

export default Footer;