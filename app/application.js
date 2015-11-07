Ext.define('DevJS.Application', {
    name: 'DevJS',

    extend: 'Ext.app.Application',

    requires: [
        'DevJS.lib.form.field.VTypes',
        'DevJS.lib.form.field.override.Text'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main',
        'Users'
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function(){
        Ext.create('DevJS.lib.form.field.VTypes').init();
    }
});
