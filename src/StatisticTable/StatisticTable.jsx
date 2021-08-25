import React from 'react';
import './StatisticTable.css';
import axios from "axios";
import {shape,string,arrayOf} from 'prop-types';


class StatisticTable extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            number : [
            ]
            }
        }

    componentDidMount() {
        // axios.get('https://api.covid19api.com/countries')
        //     .then(response => {
        //         console.log(response,'response')
        //         const res = response.data;
        //         this.setState({ countries : res })
        //     })
        //     .catch(error=> {
        //         console.log(error)
        //     })

        axios.get('https://api.covid19api.com/summary')
            .then(response => {
                console.log(response,'response')
                const data = response.data;
                const dataCountries =  response.data.Countries
                console.log(dataCountries ,'dataCountries')
                console.log(data,'data')

                this.setState({ countries: dataCountries})
            })
            .catch(error=> {
                console.log(error)
            })
    }



    render() {

        const { countries  } = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <th style={{height: 80, width: '5%'}}>№</th>
                    <th style={{height: 80, width: '60%'}}>Country</th>
                    <th style={{height: 80, width: "45%"}}>Total Confirmed</th>
                </tr>
                </thead>
                {   countries.length &&  countries.map( ({Country,TotalConfirmed},index)  =>
                    <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{Country}</td>
                                    <td>{TotalConfirmed}</td>
                                </tr>
                    </tbody>
                    )
                }
            </table>
        )
    }
}

StatisticTable.defaultProps = {
    countries: []
}

StatisticTable.propsTypes = {
    countries: arrayOf(shape({
        Country: string,
        TotalConfirmed: string,
    })),
};

export default StatisticTable;
