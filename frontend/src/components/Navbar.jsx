import NavbarDropMenu from "./NavbarDropMenu";

const Navbar = () => {

    let navLinks = [
        {
            label: "ETABLISSEMENT",
            children: [
                ["link 1", "url 1"],
                ["link 2", "url 2"],
                ["link 3", "url 3"],
            ]
        },
        {
            label: "FORMATION",
            children: [
                ["This is a sub menu link 1", "url 1"],
                ["This is a sub menu link 2", "url 1"],
                ["This is a sub menu link 3", "url 1"],
                ["This is a sub menu link 4", "url 1"]
            ]
        },
        {
            label: "ESPACE ETUDIANTS",
            children: [
                ["Another sub menu link 1", "url 1"],
                ["Another sub menu link 2", "url 1"],
                ["Another sub menu link 3", "url 1"],
                ["Another sub menu link 4", "url 1"],
                ["Another sub menu link 5", "url 1"]
            ]
        },
        {
            label: "RECHERCHE & COOPÉRATION",
            children: [
                ["link 1", "url 1"],
                ["link 2", "url 2"],
                ["link 3", "url 3"],
            ]
        },
        {
            label: "CONTACT"
        },
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