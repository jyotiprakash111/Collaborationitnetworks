import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Header5 from './Header5';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100);
        };

        document.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five" && <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {children}
                <Footer />
            </div>    
            <BackToTop/>
        </>
    );
};

// Exporting the Layout component using dynamic import with ssr set to false
export default dynamic(() => Promise.resolve(Layout), { ssr: false });