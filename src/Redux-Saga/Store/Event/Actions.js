import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    newEvent: ['payload'],
    evSuccess: ['response'],
    getEvent: ['payload'],
    removeEvent: ['payload'],
    eventSuccess: ['response'],
    eventFailure: ['errorMessage'],


});

export const EventTypes = Types;
export default Creators;