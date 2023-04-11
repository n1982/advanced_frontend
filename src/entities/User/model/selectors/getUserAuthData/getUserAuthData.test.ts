import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';

describe(`getUserAuthData.test`, () => {
    test('should return user Auth data', () => {
        const data  = {
            id:'1',
            username: 'nick',
            avatar: 'www.ava.ru'
        };
        const state: DeepPartial<StateSchema>={
            user:{
                authData: data
            }
        }
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
});
