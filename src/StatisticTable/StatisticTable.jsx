import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import './StatisticTable.css'


function StatisticTable(props) {

    const {filteredCountries, isLoaded, showModal} = props;

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <table>
                <thead>
                <tr>
                    <th style={{height: 80, width: '5%'}}>№</th>
                    <th style={{height: 80, width: '60%'}}>Country</th>
                    <th style={{height: 80, width: "45%"}}>Total Confirmed</th>
                </tr>
                </thead>
                {filteredCountries.length && filteredCountries.map((country, index) =>
                    <tbody key={country.ID}>
                    <tr onClick={() => showModal(country)}>
                        <td>{index + 1}</td>
                        <td>{country.Country}</td>
                        <td>{country.TotalConfirmed}</td>
                    </tr>
                    </tbody>
                )}
            </table>
        )
    }
}

StatisticTable.defaultProps = {
    filteredCountries: []
}

StatisticTable.propsTypes = {
    filteredCountries: arrayOf(shape({
        Country: string,
        TotalConfirmed: string,
    })),
};

export default StatisticTable;
