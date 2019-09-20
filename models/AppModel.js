import {requestGet} from '../utils/RequestApi';

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
    effects: (dispatch) => ({
        addCity(payload, rootState) {
            const newCity = rootState.app.cities.slice();
            newCity.push(payload.city);
            this.setCities({cities: newCity});
        },
        async getMeteoInformations(location) {
            console.log(location);
            if (location){
                const {coords: { latitude, longitude} } = location;
                console.log(location);
                const response = await requestGet('weather', `lat=${latitude}&lon=${longitude}`);
                if(response){
                    this.setInformations({informations: response});
                }
            }
        },
        deleteCity(payload, rootState){
        const removeCity = rootState.app.cities.slice();
        removeCity.splice(payload.index,1);
        this.setCities({cities:removeCity});
        }
    })
  };
