import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
    var defaultTitle = 'OctoKitten';
    return (
        <Helmet>
            <title>{title ? title + ' | '+ defaultTitle : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };