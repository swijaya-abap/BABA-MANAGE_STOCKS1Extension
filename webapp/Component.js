jQuery.sap.declare("ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "ui.s2p.mm.manage.stock",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/MANAGE_STOCKS1"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.ui.s2p.mm.manage.stock.Component.extend("ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.Component", {
	metadata: {
		manifest: "json"
	}
});