Структура проекта:
    /src/assets -- папка с иконками
    /src/components -- папка с компонентами
        &/companyLogo -- Логотип компании (продукта)
        &/companyTableView -- обертка в виде tbody для таблицы команий
        &/loading -- прелоадер
        &/menuItem -- элемент заголовка таблицы
        &/numberInCircle -- отображение количества избранных в sidebar
        &/companyItem -- объект компании (продукта)
    /src/constants -- папка с константами
    /src/containers -- папка с контейнерами
        &/instrumentsBox -- контейнер, отвечающий за формирование таблицы команий
        &/menu -- заголовки таблицы
        &/pages -- страницы
            &/companyPage -- станица отдельной компании
            &/favoritesPage -- избраное
            &/instrumentsPage -- станица "все инструменты"
         &/sidebar -- боковое меню (работают только две ссылки)
    /src/hoc -- обертки
        &/content -- контент сайта (со сдвигом на сайдбар и шириной страницы 100vh - ширина сайдбара)
        &/layout -- обертка сайдбара
    /src/models -- модели для typescript
    /src/store -- redux store
        &/actions -- actions
            &/actionTypes -- типы действий
            &/actions -- единый файл всех действий
            &/favorite -- действия добавления/удаления избранных
            &/serverRequest -- действия для изменения статуса выполнения запроса
        &/reducers -- reducers
            &/favorite -- store для избранного
            &/serverRequest -- store для статуса выполнения серверного запроса