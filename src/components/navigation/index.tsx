import { HashLink } from "react-router-hash-link"
import { Logo } from "../../assets"
import { navLinks } from "../../configs/content"
import { Navbar } from "./styled"

export const Nav: React.FC<{}> = () => {
    return (
        <Navbar>
            <Logo />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li>
                            <HashLink
                                to={link.url}
                                smooth={true}
                            >
                                {link.name}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
        </Navbar>
    )
}