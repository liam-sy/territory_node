import React, { Fragment, useEffect, useState } from 'react';

const ListAdrs = (props) => {

    const usableTerr = props.propTerr

    const [adrs, setAdrs] = useState([]);

    const getAll = async () => {
        try {
            const terrQuery = ('http://192.168.0.67:5000/territories/id/' + usableTerr);

            const response = await fetch(terrQuery);
            const jsonData = await response.json();

            setAdrs(jsonData);

        } catch (err) {
            console.error(err.message); 
        }
    };

    useEffect (() => {
        getAll() // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.propUp]);
    
    return (
    <Fragment>

        <h1>List Adresses</h1>

        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th> 
                <th scope="col">Last</th>
                <th scope="col">Address</th>
                <th scope="col">City/State</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {/* example row
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                */}
            
            {adrs.map(currentAdrs => (
                <tr key={currentAdrs.id}>
                    <td>{currentAdrs.id}</td>
                    <td>{currentAdrs.first_name}</td>
                    <td>{currentAdrs.last_name}</td>
                    <td>{currentAdrs.address}</td>
                    <td>{currentAdrs.city}, {currentAdrs.state}</td>
                    <td>{currentAdrs.zip}</td>
                    <td>{currentAdrs.phone}</td>
                    <td>{currentAdrs.status}</td>
                </tr>
            ))}
            
            </tbody>
            </table>
    
    </Fragment>
        
    )
}

export default ListAdrs