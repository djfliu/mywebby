import React, { useState, useCallback } from 'react'

const SingleImage = ({ src, alt = 'Portfolio item' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
    }, []);
    
    const handleImageError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
    }, []);
    
    return (
        <div className="col-lg-4 col-md-4 col-12 work-img">
            <div className="d-block mb-4 h-100 position-relative">
                {isLoading && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {hasError ? (
                    <div className="text-center p-4 bg-light">
                        <i className="fas fa-image fa-3x text-muted mb-3"></i>
                        <p>Image could not be loaded</p>
                    </div>
                ) : (
                    <img 
                        className="img-fluid img-thumbnail" 
                        src={src} 
                        alt={alt} 
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
                    />
                )}
            </div>
        </div>
    );
};

export default React.memo(SingleImage);