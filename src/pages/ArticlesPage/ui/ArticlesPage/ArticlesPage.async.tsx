import { FC, lazy } from 'react';
import { ArticlesPageProps } from './ArticlesPageProps';

export const ArticlesPageAsync = lazy<FC<ArticlesPageProps>>(() => import('./ArticlesPageProps'));
