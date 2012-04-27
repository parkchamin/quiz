Ext.define('App.store.LectureList', {
    extend: 'Ext.data.Store',

    config: {
        model: 'App.model.LectureList',
        autoLoad: true,
        sorters: 'field1',
        data: [
            {field1: 'fajewhfw', field2: 'zzzzzzsdfsa'},
            {field1: 'kidj1309f1--', field2: '120930dj120'}
        ]
    }
});