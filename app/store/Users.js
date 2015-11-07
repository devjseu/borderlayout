Ext.define('DevJS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'DevJS.model.User',
    storeId: 'users',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'Users.php',
        autoSync: true,
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        },
        writer: {
            url: 'Users.php',
            type: 'json',
            writeAllFields: false
        }
    }
});