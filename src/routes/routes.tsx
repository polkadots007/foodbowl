export const HOMEPAGE = '/';
export const SEARCH = '/search/:type/:searchTerm';
export const RECIPE = '/recipe/:id';

export const ROUTES_SUB: any = {
    meal: 'search.php?s=',
    main_ingredient: 'filter.php?i=',
    category: 'filter.php?c=',
    area: 'filter.php?a='
};