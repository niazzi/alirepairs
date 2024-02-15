import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ali. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Islammabad Pakistan, Ali. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Ali. Repairs<br />
                    Islammabad<br /> 
                    Sector I-14<br />
                    <a href="tel:+15555555555">(+92) 345-8500908</a>
                </address>
                <br />
                <p>Owner: Muhammad Ali Khan</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public