Ext.Loader.setConfig({enabled: true});

Ext.application({
	name: 'App',
	models: ['LectureList'],
	stores: ['LectureList'],
	views: ['Main'],
	controllers: [],
	launch: function() {
		Ext.Viewport.add({
			xclass: 'App.view.Main'
		});
	}
});