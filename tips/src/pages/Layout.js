import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'

const Layout = (children) => {
    return (
        <section>
            <Header />
            {children}
            <Footer />
        </section>
    )
}

export default Layout;