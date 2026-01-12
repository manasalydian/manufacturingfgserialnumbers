sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"serial/test/integration/pages/ZICDS_EWM_9001_P01_V1List",
	"serial/test/integration/pages/ZICDS_EWM_9001_P01_V1ObjectPage",
	"serial/test/integration/pages/ZICDS_EWM_9001_P02_V1ObjectPage"
], function (JourneyRunner, ZICDS_EWM_9001_P01_V1List, ZICDS_EWM_9001_P01_V1ObjectPage, ZICDS_EWM_9001_P02_V1ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('serial') + '/test/flp.html#app-preview',
        pages: {
			onTheZICDS_EWM_9001_P01_V1List: ZICDS_EWM_9001_P01_V1List,
			onTheZICDS_EWM_9001_P01_V1ObjectPage: ZICDS_EWM_9001_P01_V1ObjectPage,
			onTheZICDS_EWM_9001_P02_V1ObjectPage: ZICDS_EWM_9001_P02_V1ObjectPage
        },
        async: true
    });

    return runner;
});

