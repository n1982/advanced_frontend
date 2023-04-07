import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList isLoading view={ArticleView.BIG}
                articles={[]}/>
        </div>
    );
};

export default memo(ArticlesPage);
