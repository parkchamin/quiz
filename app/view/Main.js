Ext.define('App.view.Main', {
    extend: 'Ext.TabPanel',
    requires: ['App.view.Lecture.LectureMain'],
    xtype: 'main',
    fullscreen: true,
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: '수업',
                xtype: 'lecture'
            }
        ]
    }
});