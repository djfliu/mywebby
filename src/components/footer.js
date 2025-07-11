import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

const Footer = () => {
    const { showScrollButton, scrollToTop } = useScrollToTop();
    return (
        <div>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.instagram.com/dannyjfliu/">
                            <i className="icon ion-social-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/danny-liu-b6y4u56u56/">
                            <i className="icon ion-social-linkedin"></i>
                        </a>
                        <a href="https://github.com/djfliu">
                            <i className="icon ion-social-github"></i>
                        </a>
                    </div>
                    <p className="copyright">Website designed and built by me! dannyjfliu © 2025</p>
                </footer>
            </div>
            {/* Scroll to Top Button*/}
            {showScrollButton && (
                <button 
                    className="scroll-to-top rounded btn btn-primary position-fixed" 
                    onClick={scrollToTop}
                    style={{
                        bottom: '20px',
                        right: '20px',
                        zIndex: 1000,
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%'
                    }}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-angle-up" />
                </button>
            )}
        </div>
    );
};

export default React.memo(Footer);