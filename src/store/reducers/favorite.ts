import * as actionTypes from './../actions/actionTypes';
import company from "../../models/company";


interface IState {
    companies: company[]
}

const loadFromLocalStorage = () => {
    const localStorageItem = localStorage.getItem("selectedCompanies");
    if (localStorageItem) {
        const parsesCompanies = JSON.parse(localStorageItem);
        return parsesCompanies;
    } else {
        return []
    }

};

const initState = {
    companies: loadFromLocalStorage()
};
const addToFavorite = (state: IState, company: company) => {
    const companies = [...state.companies, company];
    saveToLocalStorage(companies);
    return {companies: companies};
};
const deleteFromFavorite = (state: IState, company: company) => {
    const filteredCompanies = state.companies.filter(item => {
        return item.id !== company.id
    });
    saveToLocalStorage(filteredCompanies);
    return {companies: filteredCompanies};
};
const saveToLocalStorage = (companies: company[]) => {
    localStorage.setItem("selectedCompanies", JSON.stringify(companies));
};

const reducer = (state: IState = initState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITE: {
            return addToFavorite(state, action.payload);
        }
        case actionTypes.DELETE_FROM_FAVORITE: {
            return deleteFromFavorite(state, action.payload);
        }
        default:
            return state;
    }
};

export default reducer;