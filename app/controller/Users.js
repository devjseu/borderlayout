Ext.define('DevJS.controller.Users', {
    extend: 'Ext.app.Controller',

    views:[
        'users.List',
        'users.Add'
    ],

    stores:[
        'Users'
    ],

    refs: [
        {
            ref: 'users-list',
            selector: 'app-main > tabpanel > grid'
        },
        {
            ref: 'UsersAdd',
            selector: 'usersAdd'
        }
    ],

    init: function () {
        var me = this;

        this.control({
            'app-main > tabpanel > grid': {
                editRow: me.editRow
            },
            'users-list > toolbar > button[itemId=usersAdd]': {
                click: me.onUsersAddClick
            },
            'users-list':{
                removeRow: me.removeRow
            },
            'usersAdd > form > button[itemId=save]': {
                click: me.onUsersSaveClick
            }
        });
    },
    editRow: function(grid, rowIndex, colIndex){
        var rec = grid.getStore().getAt(rowIndex);

        console.log('Użytkownik chce edytować dane..?');

        //zsynchronizuj dane

        //pobierz listę użytkowników (obiekt grid) zamiast pobierać z argumentów
        console.log(this.getUsersList())
    },
    removeRow: function(item){
        console.log(item);

        //ask user about removing
        Ext.Msg.confirm('Potwierdź', 'Czy na pewno usunąć zaznaczony rekord?', function(button) {
            if (button === 'yes') {
                //remove...
            }
        });
    },
    onUsersAddClick: function(){
        var me = this;

        Ext.widget('usersAdd').show();
    },
    onUsersSaveClick: function(){
        var me = this, form = me.getUsersAdd().down('form').getForm();

        if(form.isValid())
        {
            console.log(form.findField('pin').getValue())
        }
    }
});