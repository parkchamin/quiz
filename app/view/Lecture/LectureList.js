Ext.define('App.view.Lecture.LectureList', {
    extend: 'Ext.List',
    xtype: 'lectureList',
    config: {
        store: 'LectureList',
        itemTpl:[
            '<div class="contact"><strong>{field1}</strong> {field2}</div>'
        ].join('')
    }
});