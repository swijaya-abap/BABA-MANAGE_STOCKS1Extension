sap.ui.controller("ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.controller.S1Custom", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.controller.S1Custom
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.controller.S1Custom
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.controller.S1Custom
	 */
	onAfterRendering: function () {
		this.byId("idBaseUnit").setTitle("Unit of Measure");
	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf ui.s2p.mm.manage.stock.MANAGE_STOCKS1Extension.controller.S1Custom
	 */
	//	onExit: function() {
	//
	//	},

	//	onMessagesButtonPress: function(e) {
	//
	//	}
	//	_onMessageChange: function(C) {
	//
	//	}
	//	onNavBack: function() {
	//
	//	}
	//	onShareInJamPress: function() {
	//
	//	}
	//	_getInitFrontend: function() {
	//
	//	}
	//	_initData: function(a) {
	//
	//	}
	//	_setBookmark: function(p, m, b) {
	//
	//	}
	//	_getNavButtonFooter: function() {
	//
	//	}
	//	_setBtnEnablement: function(e) {
	//
	//	}
	//	_clearTableSettings: function() {
	//
	//	}
	//	_getModels: function() {
	//
	//	}
	//	_getFrontendJson: function() {
	//
	//	}
	//	_setFrontendJson: function(j) {
	//
	//	}
	//	_toggleBusy: function(i) {
	//
	//	}
	//	_getPlantKPI: function(m, p) {
	//
	//	}
	//	_successKPILoad: function(d, r) {
	//
	//	}
	//	_getPlantAuthorisation: function(p) {
	//
	//	}
	//	_successPlantAuthorisatonLoad: function(d, r) {
	//
	//	}
	//	_firstClick: function(o, e) {
	//
	//	}
	//	_firstClickManage: function(o) {
	//
	//	}
	//	_getIntermediateClick: function(o) {
	//
	//	}
	//	_getSpecial2StandardClick: function(o) {
	//
	//	}
	//	_getSecondClick: function(o) {
	//
	//	}
	//	_PopUpHandler: function(p, e) {
	//
	//	}
	//	_PopUpHandlerManage: function(p, e) {
	//
	//	}
	//	_createPost: function(j) {
	//
	//	}
	//	_handlePostSuccess: function(d, r) {
	//
	//	}
	//	_reloadData: function() {
	//
	//	}
	//	_showToast: function(m) {
	//
	//	}
	//	_showPostSuccessDialog: function(m, M, s) {
	//
	//	}
	//	_changeCell: function(I, s, S, b, o) {
	//
	//	}
	//	_changeCellExcept: function(I, s, S, a, b, o) {
	//
	//	}
	//	_initializeButtonIconsTranfer: function(I, b) {
	//
	//	}
	//	_initializeButtonIconsManage: function(I, b) {
	//
	//	}
	//	_checkFirstClickIsAllowed: function(I, C, b) {
	//
	//	}
	//	_checkSecondClickIsAllowed: function(I, s, C, S, a, b) {
	//
	//	}
	//	_getForbiddenFirstClicks: function(i, C) {
	//
	//	}
	//	_createSpecialStockDialog: function(o, e, s) {
	//
	//	}
	//	_createPostDialog: function(o, s, t) {
	//
	//	}
	//	_createPostDialogManage: function(o) {
	//
	//	}
	//	_displayPostDialog: function(m, v, a, s, S) {
	//
	//	}
	//	_displayPostDialogManage: function(m) {
	//
	//	}
	//	_getPostModel: function() {
	//
	//	}
	//	_setMaterial2InputField: function(m, b) {
	//
	//	}
	//	_setPostEnabledAfterCheck: function() {
	//
	//	}
	//	_getQuantityField: function() {
	//
	//	}
	//	_checkPostQuantityBelowSource: function(p, s) {
	//
	//	}
	//	_evaluateFieldControl: function(s, o, i) {
	//
	//	}
	//	_getFieldControlReasonCode: function(s, t, m) {
	//
	//	}
	//	_updateReasonCodeFilter: function(m) {
	//
	//	}
	//	handleNavButtonPress: function(e) {
	//
	//	}
	
	//	handleDisplayMaterialLinkPress: function(e) {
	//
	//	}
	//	handleInputChangeEvent: function(e) {
	//
	// //	}
	// 	handleSuggestionMaterialSelected: function(e) {
    // 
	// 	}
	//	handleMaterialHelp: function(e) {
	//
	//	}
	//	_handleValueHelpCallback: function(r) {
	//
	//	}
	//	handlePlantSelectionChange: function(e) {
	//
	//	}
	//	handleMaterialSuggest: function(e) {
	//
	//	}
	//	_successManageStockTypesLoad: function(d, r) {
	//
	//	}
	//	_successCostCenterLoad: function(d, r) {
	//
	//	}
	//	_successHeaderLoad: function(j, m, b, d, r) {
	//
	//	}
	//	_loadError: function(e) {
	//
	//	}
	//	_loadMaterial: function(m, b, C) {
	//
	//	}
	//	handleAttachButton: function() {
	//
	//	}
	//	getUniqueKey: function() {
	//
	//	}
	//	handleSelectButtonPressed: function(e) {
	//
	//	}
	//	handleConfirmPosting: function(e) {
	//
	//	}
	//	handleCancelPosting: function(e) {
	//
	//	}
	//	handleSpecialStockTypeFromSourceChange: function(e) {
	//
	//	}
	//	handleSpecialStockTypeFromTargetChange: function(e) {
	//
	//	}
	//	handleExchangeLocations: function(e) {
	//
	//	}
	//	handleReduceQuantity: function(e) {
	//
	//	}
	//	handleIncreaseQuantity: function(e) {
	//
	//	}
	//	handleViewSettingsDialogButtonPressed: function(e) {
	//
	//	}
	//	handleConfirm: function(e) {
	//
	//	}
	//	transferQuantityChange: function(e) {
	//
	//	}
	//	handleTableSearch: function(e) {
	//
	//	}
	//	concatenateNameIdFormatter: function(v, i) {
	//
	//	}
	//	SalesOrderFormatter: function(s, S) {
	//
	//	}
	//	numberUnit: function(v, u, i) {
	//
	//	}
	//	managedStockTypeChanged: function(e) {
	//
	//	}
	//	handleDateChange: function(e) {
	//
	//	}
	//	handleNav2MaterialDocuments: function(e) {
	//
	//	}
	//	handleNav2MaterialSingleStock: function(e) {
	//
	//	}
	//	handleNav2ManageInspectionLot: function(e) {
	//
	//	}
	//	handleMaterialDocumentLinkPress: function(e) {
	//
	//	}
	//	handleSuccessPostCloseButton: function(e) {
	//
	//	}
	//	_handleOdataError: function(e, t) {
	//
	//	}
	//	_setLocalHash: function() {
	//
	//	}

});