import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
