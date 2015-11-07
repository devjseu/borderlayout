Ext.define('DevJS.view.users.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'users-list',
    title: 'Moduł użytkowników',
    store: 'Users',

    viewConfig: {
        enableTextSelection: true,
        stripeRows: true
    },
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: 'Users',
            dock: 'bottom',
            displayInfo: true
        }
    ],

    initComponent: function () {
        var me = this,
            rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        }),
            rowMenu = Ext.create('Ext.menu.Menu', {
            height: 58,
            width: 140,
            items: [{
                text: 'Edytuj',
                icon: 'resources/icons/pencil.png'
            }, {
                text: 'Usuń',
                icon: 'resources/icons/recycleBin.png',
                handler: function(){
                    me.fireEvent('removeRow', this);
                }
            }]
        });

        this.listeners = {
            itemcontextmenu: function(view, record, item, index, e){
                e.stopEvent();
                rowMenu.showAt(e.getXY());
            }
        };

        this.plugins = [rowEditing];
        this.selType = 'rowmodel';

        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'usersAdd',
                        text: 'Add user'
                    },
                    {
                        xtype: 'container',
                        flex: 1
                    },
                    {
                        xtype: 'fieldcontainer',
                        items:[
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Filter by login'
                            },
                            {
                                xtype: 'button',
                                text: 'Filter'
                            }
                        ]
                    }
                ]
            }
        ];

        this.columns = [
            { text: 'Id', dataIndex: 'id' },
            {
                text: 'Login',
                dataIndex: 'login',
                editor: {
                    allowBlank: false
                }
            },
            {
                text: 'Imię',
                dataIndex: 'firstName',
                flex: .5,
                renderer : function(value, metadata, record) {
                    metadata.style = "background: blue";
                    return value;
                },
                editor: {
                    allowBlank: false
                }
            },
            {
                text: 'Nazwisko',
                dataIndex: 'lastName',
                flex: .5,
tpl: [
    '&lt;span class="x-grid3-col x-grid3-cell x-grid3-td-{id} x-selectable {css}"',
    'style="background:blue" tabIndex="0" {cellAttr}&gt;',
    '&lt;span class="x-grid3-cell-inner x-grid3-col-{id}" {attr}&gt;{notes}',
    '&lt;/span&gt;&lt;/span&gt;' ],
                editor: {
                    allowBlank: false
                }
            },
            {
                text: 'Wiek',
                dataIndex: 'age',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0, //no negative numbers
                    maxValue: 150
                }
            },
            {
                xtype: 'actioncolumn',
                width: 50,
                items: [
                    {
                        icon: 'resources/icons/pencil.png',
                        tooltip: 'Edycja',
                        handler: function (grid, rowIndex, colIndex) {
                            this.up('grid').fireEvent('editRow', grid, rowIndex, colIndex);
                        }
                    },
                    {
                        icon: 'resources/icons/recycleBin.png',
                        tooltip: 'Usuń'
                    }
                ]
            }
        ]

        //parent
        this.callParent(arguments);
    }
});




































