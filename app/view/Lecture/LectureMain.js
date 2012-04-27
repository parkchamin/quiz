Ext.define('App.view.Lecture.LectureMain', {
    extend: 'Ext.navigation.View',
    requires: ['App.view.Lecture.LectureList'],
    xtype: 'lecture',
    layout: 'fit',
    config: {
        items: [
            {
                xtype: 'lectureList'
            }
        ]
    }
});