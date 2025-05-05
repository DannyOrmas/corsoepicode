import NavigationLink from "./partials/NavigationLink"
import { navLinks } from "./navigationLinks"

const Navigation = () => {

    return (
        <nav>
            <div className="container-fluid d-flex justify-content-between align-items-center p-4">
                <div className="navigation-brand">
                    <h2>EpicBooks</h2>
                </div>
                <div className="navigation-links">
                    <ul className="list-unstyled d-flex align-items-center gap-3" >
                        {
                            navLinks.map(link => (
                                <NavigationLink
                                    key={`navlink-${link.id}`}
                                    href={link.href}
                                    text={link.text}
                                />
                            ))

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navigation