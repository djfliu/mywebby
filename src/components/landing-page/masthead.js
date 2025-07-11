import React from "react";
import MastHeadTitle from "../MastHeadTitle";

const MastHead = () => {
    return (
        <header className="masthead d-flex">
            <MastHeadTitle/>
            <div className="overlay" />
        </header>
    );
};

export default React.memo(MastHead);

