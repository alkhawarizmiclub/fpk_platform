import NavbarDropMenu from "./NavbarDropMenu";

const Navbar = () => {

    let navLinks = [
        {
            label: "ETABLISSEMENT",
            children: [
                {label: "link 1", url: "url 1"},
                {label: "link 2", url: "url 2"},
                {label: "link 3", url: "url 3"}
            ]
        },
        {
            label: "FORMATION",
            children: [
                {label: "Licence Fondamentale", url: "/lf"},
                {label: "Licence Professionnelle", url: "/lp"},
                {label: "Master", url: "/master"},
                {label: "Doctorat", url: "/doctorat"}
            ]
        },
        {
            label: "ESPACE ETUDIANTS",
            children: [
                {label: "Another sub menu link 1", url: "url 1"},
                {label: "Another sub menu link 2", url: "url 1"},
                {label: "Another sub menu link 3", url: "url 1"},
                {label: "Another sub menu link 4", url: "url 1"},
                {label: "Another sub menu link 5", url: "url 1"}
            ]
        },
        {
            label: "RECHERCHE & COOPÉRATION",
            children: [
                {label: "link 1", url: "url 1"},
                {label: "link 2", url: "url 2"},
                {label: "link 3", url: "url 3"}
            ]
        },
        {
            label: "CONTACT"
        }
    ]

    return (
        <nav className="z-[1] py-5 px-10 h-24 flex justify-between items-center shadow bg-white">

            <img src="/fpk_logo.svg" className="h-full" />

            <ul className="flex gap-5 font-semibold">
                {navLinks.map(({ label, children }) => (
                    <li key={label} ><NavbarDropMenu label={label} subElementsList={children} /></li>
                ))}
            </ul>

            <div className="flex gap-4">
                <button type="button" className="py-3 px-6 rounded-lg text-white font-semibold bg-orange-400">Login</button>
                <button type="button" className="py-3 px-6 rounded-lg text-orange-400 font-semibold border border-orange-400">Apply</button>
            </div>

        </nav>
    );
}

export default Navbar;