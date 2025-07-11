import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    };

    return (
        <Sidebar
            sidebar={
                <>
                    <div id="wrapper" className="vertical-center">
                        <img src="https://public.adobecc.com/files/1UPGSOOS3RO3O2XLRELBML4SK0SEFF" alt="logo" style={{width: "5em", height: "5em", margin: "0 0 0 2.7em"}}/>
                        <nav id="sidebar">
                            <ul className="list-unstyled components text-center" id="sideBarText">
                                <li>
                                    <Link to="/"><i className="fas fa-user"/> HOME</Link>
                                </li>
                                <li>
                                    <i className="fas fa-camera"/><Link to="/works"> MY WORK</Link>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/danny-liu-b6y4u56u56/" ><i className="far fa-address-card"/> GET IN TOUCH</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="fixed-bottom">
                        <ul className="list-inline align-bottom text-center">
                            <li className="list-inline-item">
                                <a className="text-white-50 mr-3" href="https://www.instagram.com/dannyjfliu/">
                                    <i className="icon-social-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-white-50 mr-3" href="https://www.linkedin.com/in/danny-liu-b6y4u56u56/">
                                    <i className="icon-social-linkedin" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-white-50" href="https://github.com/djfliu">
                                    <i className="icon-social-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            }
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            pullRight={true}
            styles={{
                sidebar: { background: "black", position: "fixed", width: "15em", zIndex: 4},
                content: {}
            }}
        >
            <div>
                <button className="menu-toggle rounded btn" onClick={() => onSetSidebarOpen(true)} aria-label="Open Menu">
                    <i className="fas fa-bars text-white" />
                </button>
            </div>
        </Sidebar>
    );
};

export default React.memo(SidebarComponent);