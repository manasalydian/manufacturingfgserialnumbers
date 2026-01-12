sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'serial',
            componentId: 'ZICDS_EWM_9001_P01_V1ObjectPage',
            contextPath: '/ZICDS_EWM_9001_P01_V1'
        },
        CustomPageDefinitions
    );
});