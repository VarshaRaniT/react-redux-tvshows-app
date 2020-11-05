import * as React from 'react';
export interface PageNotFoundProps {
}

const PageNotFound: React.FC<PageNotFoundProps> = () => {
    return (<div className="page__not__found">
        Page Not Found
    </div>);
}

export default PageNotFound;