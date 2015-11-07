Ext.define('DevJS.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'login', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'age', type: 'int'}
    ]
});
