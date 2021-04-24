import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Apollo, ApolloBase, gql } from 'apollo-angular';

import { Login } from '@models/login.model';
import { ApolloQueryResult } from '@apollo/client';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {

    private apollo: ApolloBase;

    constructor(private apolloProvider: Apollo) {
        this.apollo = this.apolloProvider.use('security');
    }

    login(username: string, password: string): Observable<ApolloQueryResult<Login>> {
        return this.apollo.query({
            variables: {
                username: username,
                password: password
            },
            query: gql`{
                login(data: { username: username, password: password }) {
                    user {
                        user_id
                        email
                    }
                    token
                }
            }`,
        });
    }
}
