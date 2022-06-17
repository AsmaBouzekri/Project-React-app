import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    newCategorie: ['payload'],
    fetch: ['payload'],
    fetchSuccess: ['response'],
    fetchFailure: ['errorMessage'],


});

export const CategorieTypes = Types;
export default Creators;
