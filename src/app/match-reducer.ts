import { Action } from '@ngrx/store';

const initialState = {
    loading: false,
    error: false,
    group_matches: [],
    knockout_matches: []
};

interface LoadMatchesAction {
    type: string;
    payload: {
        items: object[]
    };
}

export const LOAD_GROUP_MATCHES = 'LOAD_GROUP_MATCHES';
export const LOAD_GROUP_MATCHES_SUCCESS = 'LOAD_GROUP_MATCHES_SUCCESS';
export const LOAD_GROUP_MATCHES_ERROR = 'LOAD_GROUP_MATCHES_ERROR';
export const LOAD_KNOCKOUT_MATCHES = 'LOAD_KNOCKOUT_MATCHES';
export const LOAD_KNOCKOUT_MATCHES_SUCCESS = 'LOAD_KNOCKOUT_MATCHES_SUCCESS';
export const LOAD_KNOCKOUT_MATCHES_ERROR = 'LOAD_KNOCKOUT_MATCHES_ERROR';

export function matchReducer(state = initialState, action: LoadMatchesAction) {
    switch (action.type) {
        case LOAD_GROUP_MATCHES:
            // console.log('action: LOAD MATCHES');
            return { ...state, loading: true };
        case LOAD_GROUP_MATCHES_SUCCESS:
            // console.log('action: LOAD MATCHES SUCESS');
            return { ...state, loading: false, group_matches: action.payload.items };
        case LOAD_GROUP_MATCHES_ERROR:
            // console.log('action: LOAD MATCHES ERROR');
            return { ...state, loading: false, error: true };
        case LOAD_KNOCKOUT_MATCHES:
            // console.log('action: LOAD MATCHES');
            return { ...state, loading: true };
        case LOAD_KNOCKOUT_MATCHES_SUCCESS:
            // console.log('action: LOAD MATCHES SUCESS');
            return { ...state, loading: false, knockout_matches: action.payload.items };
        case LOAD_KNOCKOUT_MATCHES_ERROR:
            // console.log('action: LOAD MATCHES ERROR');
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
