const NavigationLink = ({ href, text }) => {
    return (
        <li>
            <a className="text-decoration-none text-black" href={href}>
                {text}
            </a>
        </li>
    )
}

export default NavigationLink