sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZICDS_EWM_9001_P01_V1List.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZICDS_EWM_9001_P01_V1List.onFilterBar().iExecuteSearch();
            
            Then.onTheZICDS_EWM_9001_P01_V1List.onTable().iCheckRows();

            When.onTheZICDS_EWM_9001_P01_V1List.onTable().iPressRow(0);
            Then.onTheZICDS_EWM_9001_P01_V1ObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});