import {requestGet} from '../utils/requestApi';

export const app = {
    state: {
        name: '',
        cities: [],
        informations: {},
    },
    reducers: {
        setName(state, {name}) {
            return {...state, name};
        },
        setCities(state, {cities}) {
            return {...state, cities};
        },
        setInformations(state, {informations}) {
            return {...state, informations};
        },
    },
    effects: {
        addCity(payload, rootState) {
            const newCity = rootState.app.cities.slice();
            newCity.push(payload.city);
            this.setCities({cities: newCity});
        },
        async getMeteoInformations() {
            const response = await requestGet('weather', 'q=valence');
            console.log (response);
            if (response) {
                this.setInformations({informations: response});
            }
        }
    },
};
