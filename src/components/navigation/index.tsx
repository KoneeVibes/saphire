import { HashLink } from "react-router-hash-link"
import { Logo } from "../../assets"
import { navLinks } from "../../configs/content"
import { Navbar } from "./styled"
import { Menu } from "../buttons/menu"
import { useContext, useEffect } from "react"
import { Context } from "../../context"
import { useNavigate } from "react-router-dom"

export const Nav: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };
    return (
        <Navbar>
            <Logo
                className="logo"
                onClick={handleLogoClick}
                style={{ cursor: "pointer" }}
            />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                        >
                            <HashLink
                                to={link.url}
                                smooth={true}
                                onClick={() => setOpenMenu(false)}
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