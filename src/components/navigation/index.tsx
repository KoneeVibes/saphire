import { HashLink } from "react-router-hash-link"
import { Logo } from "../../assets"
import { navLinks } from "../../configs/content"
import { Navbar } from "./styled"
import { Menu } from "../buttons/menu"
import { useContext, useEffect } from "react"
import { Context } from "../../context"

export const Nav: React.FC<{}> = () => {
    const { openMenu } = useContext(Context)
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [openMenu])
    return (
        <Navbar>
            <Logo className="logo" />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                        >
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
            <Menu />
        </Navbar>
    )
}