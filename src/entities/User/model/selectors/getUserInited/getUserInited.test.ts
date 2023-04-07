import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from 'entities/User';

describe(`getUserInited.test`, () => {
    test('should return user inited state', () => {
        const data = {
            _inited: true
        };

        const state: DeepPartial<StateSchema> = {
            user: data
        };
        expect(getUserInited(state as StateSchema)).toBe(true);
    });
});
