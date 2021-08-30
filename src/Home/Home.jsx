import React from 'react';
import Banner from "../Banner/Banner";
import classes from './Home.module.css';
import StatisticTable from "../StatisticTable/StatisticTable";
import axios from "axios";
import Modal from "../Modal/Modal";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            show: false,
            isLoaded: false,
            searchField: '',
            currentCountry: null,
        }
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary')
            .then(response => {
                console.log(response, 'response')
                const dataCountries = response.data.Countries
                console.log(dataCountries, 'dataCountries')
                this.setState({countries: dataCountries, isLoaded: true})
            })
            .catch(error => {

                console.log(error)
            })
    }

    showModal = (country) => {
        console.log('count from show modal', country);
        this.setState({
            show: !this.state.show,
            currentCountry: country,
        });
    };

    updateSearch(event) {
        console.log(event,'event')
        this.setState({ searchField: event.target.value.substr(0,20)})
    }

    render() {

        const filteredCountries = this.state.countries.filter(
            (country) => {
                return country.Country.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !== -1;
            }
    )
            // get filter word length
            // get country name and take first { amount of letters in search field }

        //     country.Country.toLowerCase().includes(this.state.searchField)
        // ))

        return (
            <div className={classes.home}>
                <Banner
                        placeholder={'Search...'}
                        value = {this.state.searchField}
                        onChange = {this.updateSearch.bind(this)}
                        // handleChange={(e) => this.setState({searchField: e.target.value})}
                />
                <StatisticTable
                    isLoaded={this.state.isLoaded}
                    filteredCountries={filteredCountries}
                    show ={this.state.show}
                    showModal = {this.showModal}
                />
                <Modal onClose={this.showModal} show={this.state.show} country={this.state.currentCountry}/>
            </div>
        )
    }
}

export default Home;