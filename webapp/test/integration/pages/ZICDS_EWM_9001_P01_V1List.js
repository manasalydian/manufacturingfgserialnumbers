sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'serial',
            componentId: 'ZICDS_EWM_9001_P01_V1List',
            contextPath: '/ZICDS_EWM_9001_P01_V1'
        },
        CustomPageDefinitions
    );
});