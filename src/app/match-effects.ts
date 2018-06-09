// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    LOAD_GROUP_MATCHES,
    LOAD_GROUP_MATCHES_SUCCESS,
    LOAD_GROUP_MATCHES_ERROR,
    LOAD_KNOCKOUT_MATCHES,
    LOAD_KNOCKOUT_MATCHES_ERROR,
    LOAD_KNOCKOUT_MATCHES_SUCCESS
} from './match-reducer';

@Injectable()
export class MatchesEffects {

    @Effect()
    loadGroupMatches$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_GROUP_MATCHES),
        mergeMap(action =>
            this.http.get('//localhost:3301/group-matches').pipe(
                map(data => ({ type: LOAD_GROUP_MATCHES_SUCCESS, payload: sortMatchesByDate(data) })),
                catchError(() => of({ type: LOAD_GROUP_MATCHES_ERROR }))
            )
        )
    );

    @Effect()
    loadKnockoutMatches$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_KNOCKOUT_MATCHES),
        mergeMap(action =>
            this.http.get('//localhost:3301/knockout-matches').pipe(
                map(data => ({ type: LOAD_KNOCKOUT_MATCHES_SUCCESS, payload: sortMatchesByRoundAndDate(data) })),
                catchError((e) => of({ type: LOAD_KNOCKOUT_MATCHES_ERROR }))
            )
        )
    );

    constructor(private http: HttpClient, private actions$: Actions) { }
}

function sortMatchesByDate(matches) {
    matches.items.sort((a, b) => {
        return (new Date(a.date) as any) - (new Date(b.date) as any);
    });
    return matches;
}

function sortMatchesByRoundAndDate(matches) {
    matches.items.sort((a, b) => {
        return (getWeight(roundVars(a.round))) - getWeight(roundVars(b.round));
    });
    return matches;
}

function roundVars(round): string[] {
    const reg = /(\w\w?)(\d)?/g;
    return reg.exec(round).slice(-2);
}

function getWeight([round, number = '1']: string[]): number {
    return Number(weight[round] * 10 + number);
}
const weight = {
    EF: 1,
    QF: 2,
    SF: 3,
    F: 5,
    PO: 6
};
