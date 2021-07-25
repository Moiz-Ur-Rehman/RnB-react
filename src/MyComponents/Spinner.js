import React from 'react'
import Loader from 'react-loader-spinner';

export const Spinner = () => {
    return (
        <div style={{marginTop: '200px'}}>
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100"/>
        </div>
    )
}
