// Version id is generated during build process. This should be at the second line of this file.
var versionId = '#{default}#';

/**
 * Application configuration parameters. This object contains runtime values, no matter where
 * the info come from (parameter / config entry / custom property / hardcoded default / etc.)
 */
var appConfiguration;

/**
 * Holds URL query parameters - can be modified by the server during "Loading" action.
 */
var appURLQueryParameters = {};

/**
 * Holds form's data - initially equal to the URL query parameters, but can be modified by the server during "Loading" action.
 */
var appFormDataObj = {};

/**
 * Default form object if specified form is not found.
 */
var defaultFormObj = {"type":"form","tags":[],"access":[{"roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"],"type":"read_all"}],"submissionAccess":[],"owner":"594fd15f7684cc005c2280ae","components":[{"hideLabel":false,"clearOnHide":false,"components":[{"hideLabel":false,"clearOnHide":false,"columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"formhelp":"This example shows how to add two numbers","fieldhelp":"The first number to add","elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"a","label":"Number 1","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","fieldhelp":"The second number to add","formhelp":"This example shows how to add two numbers","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"b","label":"Number 2","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"columns","key":"columns","tableView":false,"input":false},{"hideLabel":false,"custom":"function addtwonumbers(url,formdata){\n   executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata);\n}\n\nfunction addtwonumbersnoadal(token,url,formdata) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      document.getElementById('mymessage').innerHTML='Calculation successfully performed!';\n      //console.log('data='+JSON.stringify(data));\n      //console.log('formdata='+JSON.stringify(formdata));\n      var datamerged = $.extend(formdata.data,data.data);\n      var datamergedstring = JSON.stringify(datamerged);\n      //console.log('datamerged='+datamergedstring);\n      var initjson = JSON.parse('{\"data\":'+datamergedstring+'}');\n      \n      form.submission = initjson;      \n   }).fail(function (err, textStatus, errorThrown) {\n      document.getElementById('mymessage').innerHTML='Failed to calculate two numbers!';\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\naddtwonumbers(form.submission.data['API_add_url'],{\"data\":form.submission.data});","input":true,"label":"Add two numbers","tableView":false,"key":"addtwonumbers","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"custom","disableOnInvalid":false,"theme":"primary","type":"button","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"event":"add2numbers","lockKey":true},{"hideLabel":false,"input":true,"tableView":true,"inputType":"number","label":"Result","key":"c","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"type":"number","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"lockKey":true,"disabled":true,"labelPosition":"top"},{"hideLabel":false,"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"button","theme":"success","disableOnInvalid":false,"action":"submit","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"submit","tableView":false,"label":"Do all the crazy things in green","input":true}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Complete Test","input":false,"key":"panel"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Encryption","input":false,"key":"panel27"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel24","input":false,"title":"All form.io Controls","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Current User","input":false,"key":"panel21"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Branding","input":false,"key":"panel20"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Language","input":false,"key":"panel19"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Header Features","input":false,"key":"panel18"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel25","input":false,"title":"CDN Content","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CDN Token","input":false,"key":"panel2"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Event Grid","input":false,"key":"panel3"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Service Bus","input":false,"key":"panel23"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Mail","input":false,"key":"panel4"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"PDF","input":false,"key":"panel5"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SMS","input":false,"key":"panel6"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WhatsApp","input":false,"key":"panel7"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Slack","input":false,"key":"panel9"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Teams","input":false,"key":"panel10"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Excel Calculation","input":false,"key":"panel8"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WebBase Cache","input":false,"key":"panel11"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SQL Server","input":false,"key":"panel12"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Preview","input":false,"key":"panel15"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"DokStore","input":false,"key":"panel14"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CosmosDB","input":false,"key":"panel13"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Polizze erzeugen","input":false,"key":"panel16"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Schaden erzeugen","input":false,"key":"panel17"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel26","input":false,"title":"Dokument ablegen","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"In context translation","input":false,"key":"panel22"}],"created":"2017-11-12T12:49:28.153Z","revisions":"","_vid":0,"_id":"5a08435835677f0001af052d","machineName":"nezcjzowfnfwzny:end2end","modified":"2018-02-02T02:51:31.574Z","title":"Formviewer for MS Azure and Office 365","display":"form","name":"end2end","path":"end2end","project":"5a05516e35677f0001aeef6e","properties":{"formtitle":"Tog Formviewer"}};

/**
 * Indicates if form is destroyed (or initially non-existing)
 */
var formDestroyed = true;

/**
 * The response from the server when doing Loading or Event actions. It has the same structure as TogFormViewer.getAppInfo() object.
 */
var appInfoObjFromServer = null;

/**
 * Flag which indicates if user settings (for example language, time zone, theme) have been retreived (for example from Microsoft Graph API)
 */
var userSettingsLoaded = false;

/**
 * Parameter which indicates if response from additional API function has been received
 */
var additionalApiResponseReceived = false;

function resetFormData()
{
    appFormDataObj = {};
}

function resetAppConfiguration()
{
    appConfiguration =
    {
        appDefPath: "../defs/app.json.js",
        formDefPath: "../defs/form.json.js",
        brandDefPath: "",
        customizationDefPath: "",
        headerConfPath: "",
        themes: "",
        userlangs: "",
        timezones: "",
        customScript: "",
        customCss: "",
        onlinemode: false,
        display: "form",
        title: "Formviewer for MS Azure and Office 365",
        formtitle: "Tog Formviewer",
        formhelp: "",
        formname: "",
        processimagelink: "",
        processlink: "",
        processtext: "Click the gear icon below to see the business process...",
        elearningimagelink: "",
        elearninglink: "",
        elearningtext: "Click the learning icon below to visit the e-learning module...",
        mainlogopath: "./ress/icons/mainlogo.png",
        sidelogopath: "./ress/icons/sidelogo.png",
        faviconpath: "./ress/png/favicon.png",
        bootswatchtheme: "cosmo",
        customizationlogopath: "",
        appLauncher: true,
        mailboxPhoto: false,
        maximizeBrowserWindow: false,
        formWidthPercent: 100,
		mapGridSize: 45,
		displayBackgroundImage: false,
        environment: true,
        notifications: true,
        settings: true,
        help: true,
        account: true,
        themeSettings: false,
        languageSettings: true,
        timeZoneSettings: true,
        phraseApp: "false",
        phraseAppProjectId: "",
        phraseAppPrefix: "[[__",
        phraseAppSuffix: "__]]",
        feedback: false,
        feedbackurl: "",
        feedbackmethod: "POST",
        feedbackUrlAbsolutePath: "",
        home: "",
        useGraphProxyApi: false,
        useOutlookSettings: false,
        useUserPropertyExtensions: false,
        autocalc: "",
        updatecalcresult: true,
        calcJsPathLocal: "",
        calcJsPath: "",
        calcJsSetting: "",
        calcConfPath: "",
        calcConfSetting: "",
        calcApiPath: "",
        action: "",
        actionBeforeScript: "",
        actionSuccessScript: "",
        actionFailureScript: "",
        actionWaitCalculation: false,
        actionLocalScript: "",
        actionGraphProxy: "",
        actionLoading: "",
        actionLoaded: "",
        actionFocus: "",
        actionFocusLocalScript: "",
        actionBlur: "",
        actionBlurLocalScript: "",
        actionChange: "",
        actionChangeLocalScript: "",
        actionSearch: "",
        actionSearchLocalScript: "",
        actionShowDropdown: "",
        actionShowDropdownLocalScript: "",
        actionClick: "",
        actionClickLocalScript: "",
        actionDblClick: "",
        actionDblClickLocalScript: "",
        actionContextMenu: "",
        actionContextMenuLocalScript: "",
        actionWheel: "",
        actionWheelLocalScript: "",
        actionMouseOver: "",
        actionMouseOverLocalScript: "",
        actionMouseDown: "",
        actionMouseDownLocalScript: "",
        actionMouseOut: "",
        actionMouseOutLocalScript: "",
        actionMouseUp: "",
        actionMouseUpLocalScript: "",
        actionMouseMove: "",
        actionMouseMoveLocalScript: "",
        actionMouseEnter: "",
        actionMouseEnterLocalScript: "",
        actionMouseLeave: "",
        actionMouseLeaveLocalScript: "",
        actionKeyPress: "",
        actionKeyPressLocalScript: "",
        actionKeyUp: "",
        actionKeyUpLocalScript: "",
        actionKeyDown: "",
        actionKeyDownLocalScript: "",
        actionInput: "",
        actionInputLocalScript: "",
        actionPrevPage: "",
        actionPrevPageLocalScript: "",
        actionNextPage: "",
        actionNextPageLocalScript: "",
        actionComponentError: "",
        actionComponentErrorLocalScript: "",
        actionBeforePrint: "",
        actionBeforePrintLocalScript: "",
        actionAfterPrint: "",
        actionAfterPrintLocalScript: "",
        actionResize: "",
        actionResizeLocalScript: "",
        actionSelect: "",
        actionSelectLocalScript: "",
        actionCut: "",
        actionCutLocalScript: "",
        actionCopy: "",
        actionCopyLocalScript: "",
        actionPaste: "",
        actionPasteLocalScript: "",
        actionScroll: "",
        actionScrollLocalScript: "",
        actionDirtyChanged: "",
        actionDirtyChangedLocalScript: "",
        bingMapsKey: "",
		mapClusterPins: false,
        mapWrapperId: "",
        mapRouteInfoWrapperId: "",
        mapCountryName: "",
        mapZoom: "",
        mapCenterPushpin: true,
        mapCenterPushpinTitle: "",
        mapCenterPushpinSubTitle: "",
        mapCenterPushpinDescription: "",
        mapCenterLatitude: "",
        mapCenterLongitude: "",
        mapShowInfoBox: true,
        mapShowTraffic: "",
        toggleMenu: false,
        triggerResizeChange: false,
        defaultLanguage: "",
        defaultTimeZone: "",
        disableActionSpinner: false,
        menuPosition: "top",
        menuPositionThreshold: "",
        menusPath: "",
        langMenusTopPath: "",
        langMenusLeftPath: "",
        langMenusBottomPath: "",
        test: "false",
        debug: "false",
        choicesOptions: "",
        sendForm: false,
        formTranslation: "",
        additionalApiFunctionResource: "",
        additionalApiFunctionUrl: "",
        additionalApiFunctionMethod: "",
        additionalApiFunctionPayload: ""
    };
    appConfiguration.onlinemode = typeof ADAL!== 'undefined' && ADAL!=null || typeof MSAL!== 'undefined' && MSAL!=null;
    userSettingsLoaded = false;
    additionalApiResponseReceived = false;
    additionalApiCallPerformed = false;
}

function initAfterADALSetup()
{
    // do not execute this if the context is an iFrame - this is used for ADAL only logic
    if (isIframe()) {
        return;
    }
    // set query strings into appURLQueryParameters
    appURLQueryParameters = parse_query_string(window.location.search.substring(1));
    // set query strings into appFormDataObj
    appFormDataObj = parse_query_string(window.location.search.substring(1));
    
    TogFormViewer.correlationId = TogFormViewer.uuidv4();

    if (ADAL!=null || MSAL!=null) {
        var signeduser = ADAL!=null ? ADAL.getCachedUser() : MSAL.getUser();
        if (signeduser) {
            if (isAAD()) {                
                if (ADAL!=null) {
                    if (signeduser.profile.upn) {
                        // For work or school accounts (tenant members)
                        currentUser.member = true;
                        currentUser.personal = false;
                        currentUser.uid = signeduser.profile.upn;
                    } else if (signeduser.profile.idp === "live.com") {
                        // For personal accounts
                        currentUser.member = false;
                        currentUser.personal = true;
                        currentUser.uid = signeduser.profile.email;
                    } else {
                        // For work or school accounts which are guests
                        currentUser.member = false;
                        currentUser.personal = false;
                        currentUser.uid = signeduser.profile.email;
                    }
                    currentUser.oid = signeduser.profile.oid;
                } else {
                    if (signeduser.idToken.idp==='https://sts.windows.net/9188040d-6c67-4c5b-b112-36a304b66dad/') { // this identity provider is live.com
                        // For personal accounts
                        currentUser.member = false;
                        currentUser.personal = true;
                    } else if (!signeduser.idToken.idp || signeduser.idToken.idp.indexOf(signeduser.idToken.tid)!=-1) {
                        // For work or school accounts (tenant members)
                        currentUser.member = true;
                        currentUser.personal = false;
                    } else {
                        // For work or school accounts which are guests
                        currentUser.member = false;
                        currentUser.personal = false;
                    }
                    currentUser.uid = signeduser.idToken.preferred_username ? signeduser.idToken.preferred_username : currentUser.uid;
                    currentUser.oid = signeduser.idToken.oid;
                }
            } else {
                currentUser.member = !signeduser.idToken.idp;
                currentUser.uid = signeduser.idToken.emails ? signeduser.idToken.emails[0] : (signeduser.idToken.email ? signeduser.idToken.email : currentUser.uid);
                currentUser.oid = signeduser.idToken.oid;
            }
            currentUser.name = ADAL!=null ? signeduser.profile.name : signeduser.name;
            if (MSAL!=null) {
                try {
                    currentUser.name = decodeURIComponent(escape(currentUser.name));
                } catch (e) {
                    console.log("Problem with decoding name from Id token!");
                }
            }
            if (MSAL!=null) {
                MSAL._logger = new Msal.Logger(function (logLevel, message, piiEnabled) {console.log(message);}, { level: Msal.LogLevel.Verbose, correlationId: TogFormViewer.correlationId });
            }
        }        
        _getopenidconfig();
    } else {
        beginConfigurationProcess();
    }
}


function _getopenidconfig() {
    if (ADAL!=null || MSAL!=null) {
        console.log('getting openid-configuration...');
        var idt = ADAL!=null ? ADAL._getItem(ADAL.CONSTANTS.STORAGE.IDTOKEN) : MSAL._cacheStorage.getItem("msal.idtoken");
        var pt = TogFormViewer.Utils._extractIdToken(idt);        
        var settings = {
            "crossDomain": true,
            "url": pt.iss+"/.well-known/openid-configuration"+(isAAD() ? "" : "?p="+(pt.tfp ? pt.tfp : pt.acr)),
            "timeout":30000,
            "method": "GET",        
        };
        
        $.ajax(settings).done(function (data,textStatus,request) {
            console.log('getopenidconfig call successfully executed, data successfully retrieved! payload: ' + (data!=null ? JSON.stringify(data) : null));
            TogFormViewer.openidConfiguration = data;
            beginConfigurationProcess();
        }).fail(function (err, textStatus, errorThrown) {
            console.log('getopenidconfig call failed, AJAX REQUEST FAILED:'+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown);
            TogFormViewer.openidConfiguration = null;
            beginConfigurationProcess();
        });
    } else {
        beginConfigurationProcess();
    }
}

function beginConfigurationProcess() {
    resetAppConfiguration();
    var appDefFromServer = checkForResolvedPropertyFromTheServer("appDefPath");
    if (appDefFromServer!=null)
    {
       appConfiguration.appDefPath = appDefFromServer;
    }
    
    if (typeof appObj === "undefined" || appObj==null)
    {
        var appDef = appConfiguration.appDefPath;    
        if (appDefFromServer==null)
        {
            // Check if we have an URI paramater which specifies
            // a path to the app configuration. If so we'll use it.
            var appRegex = new RegExp("[?&]app(=([^&#]*)|&|#|$)");
            var appDefParam = appRegex.exec(window.location.href);
            if (appDefParam && appDefParam[2])
            {
                var appUriParam = decodeURIComponent(appDefParam[2].replace(/\+/g, " "));
                if (appUriParam === "/")
                {
                    appDef = appConfiguration.appDefPath = "../appcnfs/app.json.js";
                }
                else
                {
                    appDef = appConfiguration.appDefPath = "../appcnfs/" + appUriParam + "/app.json.js";
                }
            }
            
            appConfiguration.appDefPath = appDef;    
        }
        
        loadScript(appDef, checkAppConfig);
    }
    else
    {
        checkAppConfig();
    }    
}

/**
 * Loads script from specified URL by creating a new script element and appending it to the head part of the html.
 * Runs a callback function when the script gets loaded. Runs the errorHandler function if the script fails to load.
 */
function loadScript(url, callback, errorHandler)
{
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = url + "?vid=" + versionId;
    
    // Bind the event to the callback function.
    // There are several events for cross browser compatibility.
    scriptElement.onreadystatechange = callback;
    scriptElement.onload = callback;
    if (typeof errorHandler === 'undefined')
    {
        scriptElement.onerror = callback;
    }
    else
    {
        scriptElement.onerror = errorHandler;
    }
    
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

/**
 * Checks if there is a given URL parameter
 * @param {string} parameterName URL parameter name whose existence should be checked
 */
function checkForUrlParameter(parameterName)
{
    return appURLQueryParameters[parameterName];
}

/**
 * Checks if there is a resolved property from the server
 * @param {string} parameterName  parameter name whose existence should be checked
 */
function checkForResolvedPropertyFromTheServer(parameterName)
{
    var resolvedPropertiesObjFromServer = appInfoObjFromServer!=null ? appInfoObjFromServer.resolvedProperties : null;
    return resolvedPropertiesObjFromServer && resolvedPropertiesObjFromServer.hasOwnProperty(parameterName) && resolvedPropertiesObjFromServer[parameterName]!==null ? resolvedPropertiesObjFromServer[parameterName] : null;
}

/**
 * Checks if app config is already defined. If so loads other definitions.
 * Otherwise looks for the app configuration on another hardcoded location.
 */
function checkAppConfig()
{
    // Check if appObj is defined. If not try with a new hardcoded value
    if (typeof appObj === "undefined")
    {
        appConfiguration.appDefPath = "./defs/app.json.js";
        loadScript(appConfiguration.appDefPath, loadFormDefinition);
    }
    else
    {
        loadFormDefinition();
    }
}

/**
 * Generalized code for handling basic configuration parameters (form, brand, customization and header).
 */
function getURIParamForConfiguration(formAndAppObjPropertyName,paramName,appConfigurationParamName,paramFolderName,paramFileName,updateConfiguration) {
    var paramDef = null;
    
    // Check if we have an URI paramater which specifies
    // a path to the brand definition. If so we'll use it.
    var paramRegex = new RegExp("[?&]"+paramName+"(=([^&#]*)|&|#|$)")
    var paramDefParam = paramRegex.exec(window.location.href);
    
    if (paramDefParam && paramDefParam[2])
    {
        var paramUriParam = decodeURIComponent(paramDefParam[2].replace(/\+/g, " "));
        if (paramUriParam === "/")
        {
            paramDef = "../"+paramFolderName+"/"+paramFileName+".json.js";
        }
        else if ((paramUriParam.startsWith && (paramUriParam.startsWith("http://") || paramUriParam.startsWith("https://")))
            || (paramUriParam.indexOf && (paramUriParam.indexOf("http://") === 0 || paramUriParam.indexOf("https://") === 0)))
        {
            paramDef = paramUriParam;
        }
        else
        {
            paramDef = "../"+paramFolderName+"/" + paramUriParam + "/"+paramFileName+".json.js";
        }
    }
    
    if (paramName != 'form' && paramDef == null && typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties"))
    {
        // We have a form defition loaded so we will use it to get paths for other definition files
        // If we have definition path already defined in query parameter we will use it.
        // Otherwise we use the value from the form definition
        if (formObj.properties[formAndAppObjPropertyName])
        {
            paramDef = formObj.properties[formAndAppObjPropertyName];
        }
    }
    
    if (paramDef == null && typeof appObj !== 'undefined')
    {
        // We have found app.json.js so we will use it to load other definitions
        // If we have definition path already defined in query parameter or in form
        // definition we will use it. Otherwise we use the value from the app.json.js
        if (appObj[formAndAppObjPropertyName])
        {
            paramDef = appObj[formAndAppObjPropertyName];
        }
    }
    
    if (updateConfiguration && paramDef != null)
    {
        appConfiguration[appConfigurationParamName] = paramDef;
    }        
    
    return paramDef;
}

/**
 * Loads form definition, then loads brand, customization and header definitions
 * and sets up the app once everything is loaded.
 */
function loadFormDefinition()
{
    if (appInfoObjFromServer != null && appInfoObjFromServer.config != null && appInfoObjFromServer.config.formObj != null)
    {
        formObj = appInfoObjFromServer.config.formObj;
    }
    
    var formDefFromServer = checkForResolvedPropertyFromTheServer("formDefPath");
    if (formDefFromServer != null)
    {
        appConfiguration.formDefPath = formDefFromServer;
    }
    
    if (typeof formObj === "undefined" || formObj == null)
    {
        if (formDefFromServer == null)
        {
            // Resolve form parameter, check if we have an URI paramater which specifies
            // a path to the form definition. If so we'll use it. Otherwise, check appObj.
            getURIParamForConfiguration("formdefinition","form","formDefPath","forms","form",true);
        }
        
        loadScript(appConfiguration.formDefPath, formObjLoaded, loadDefaultForm);
    }
    else
    {
        formObjLoaded();
    }
}

/**
 * Runs when the form definition has been loaded to perform tasks that should be performed immidiately
 * and then starts to load all other definition files.
 */
function formObjLoaded()
{
    setupFormConfiguration();
    loadConfigurations();
}

/**
 * Sets up form configuration and loads form custom properties
 */
function setupFormConfiguration()
{
    // Set up form display mode
    var formDisplay = checkForResolvedPropertyFromTheServer("display");
    if (!formDisplay)
    {
        formDisplay = checkForUrlParameter("display");
    }
    
    if (formDisplay)
    {
        appConfiguration.display = formDisplay;
        formObj["display"] = appConfiguration.display;
    }
    else if (typeof appObj !== 'undefined' && appObj !== null && appObj.hasOwnProperty("display") && appObj["display"])
    {
        appConfiguration.display = appObj["display"];
        formObj["display"] = appConfiguration.display;
    }
    else
    {
        appConfiguration.display = formObj["display"];
    }
    
    // Set up the header title
    var titleUrl = checkForResolvedPropertyFromTheServer("title");
    if (!titleUrl)
    {
        titleUrl = checkForUrlParameter("title");
    }
    
    if (titleUrl)
    {
        appConfiguration.title = titleUrl;
    }
    else if (formObj && formObj.hasOwnProperty("title"))
    {
        appConfiguration.title = formObj["title"];
    }
    
    // Set up the form name
    if (formObj && formObj.hasOwnProperty("name"))
    {
        appConfiguration.formname = formObj["name"];
    }

    // Set up form title
    resolveStringOrBooleanParameter(false,"formtitle","formtitle",formObj,null,null,false,appConfiguration.formtitle); 
    
    document.title = appConfiguration.formtitle;
        
    // Set up default form help (can be overridden with component level "formhelp" property)
    resolveStringOrBooleanParameter(false,"formhelp","formhelp",formObj,null,null,false,appConfiguration.formhelp); 
    
    // Set up default process link which user can open when click on the process image in help menu
    // (can be overridden with component level "processimagelink" property)
    resolveStringOrBooleanParameter(false,"processimagelink","processimagelink",formObj,null,null,false,appConfiguration.processimagelink); 
    
    // Set up default process image in help menu (can be overridden with component level "processlink" property)
    resolveStringOrBooleanParameter(false,"processlink","processlink",formObj,null,null,false,appConfiguration.processlink); 
    
    // Set up default e-learning link which user can open when click on the e-learning image in help menu
    // (can be overridden with component level "elearningimagelink" property)
    resolveStringOrBooleanParameter(false,"elearningimagelink","elearningimagelink",formObj,null,null,false,appConfiguration.elearningimagelink); 
    
    // Set up default e-learning image in help menu (can be overridden with component "elearninglink" property)
    resolveStringOrBooleanParameter(false,"elearninglink","elearninglink",formObj,null,null,false,appConfiguration.elearninglink); 
    
    // If the customScript definition path has been specified
    resolveStringOrBooleanParameter(false,"customScript","customScript",formObj,appObj,null,true,appConfiguration.customScript);
    
    // If the customCss definition path has been specified
    resolveStringOrBooleanParameter(false,"customCss","customCss",formObj,appObj,null,true,appConfiguration.customCss);
}

/**
 * Loads form definition from the default path
 */
function loadDefaultForm()
{
    var formDef = appConfiguration.formDefPath = "./defs/form.json.js";
    loadScript(formDef, formObjLoaded, setDefaultForm);
}

/**
 * Sets hardcoded default form
 */
function setDefaultForm()
{
    window.formObj = defaultFormObj;
    loadConfigurations();
}

/**
 * Loads brand, customization and header definitions and sets up the app
 * once everything is loaded including the document itself.
 */
function loadConfigurations()
{
    var brandDef = checkForResolvedPropertyFromTheServer("brandDefPath");
    if (brandDef!=null) {
        appConfiguration.brandDefPath = brandDef;
    }
    var customizationDef = checkForResolvedPropertyFromTheServer("customizationDefPath");
    if (customizationDef!=null) {
        appConfiguration.customizationDefPath = customizationDef;
    }
    var headerConfig = checkForResolvedPropertyFromTheServer("headerConfPath");
    if (headerConfig!=null) {
        appConfiguration.headerConfPath = headerConfig;
    }

    if ((appInfoObjFromServer == null || appInfoObjFromServer.validBrandObj == null) && (typeof brandObj === "undefined" || brandObj == null))
    {
        if (brandDef == null)
        {
            // Check if we have an URI paramater which specifies
            // a path to the brand definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            brandDef = getURIParamForConfiguration("branddefinition","brand","brandDefPath","brands","brand",true);
        }
        
        if (brandDef)
        {
            loadScript(brandDef, brandObjLoaded, loadDefaultBrand);
        }
        else 
        {
            loadDefaultBrand();
        }
    } 
    else 
    {
        if (appInfoObjFromServer != null && appInfoObjFromServer.validBrandObj != null)
        {
            brandObj = appInfoObjFromServer.validBrandObj;
        }
        
        brandObjLoaded();
    }
    
    if ((appInfoObjFromServer == null || appInfoObjFromServer.validCustomizationObj == null) && (typeof customizationObj === "undefined" || customizationObj == null))
    {
        if (customizationDef == null)
        {
            // Check if we have an URI paramater which specifies
            // a path to the customization definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            customizationDef = getURIParamForConfiguration("customizationdefinition","cstmz","customizationDefPath","cstmz","customization",true);
        }
        
        if (customizationDef)
        {
            loadScript(customizationDef, customizationObjLoaded, loadDefaultCustomization);
        }
        else
        {
            loadDefaultCustomization();
        }
    }
    else
    {
        if (appInfoObjFromServer != null && appInfoObjFromServer.validCustomizationObj != null)
        {
            customizationObj = appInfoObjFromServer.validCustomizationObj;
        }
        
        customizationObjLoaded();
    }

    if ((appInfoObjFromServer == null || appInfoObjFromServer.validHeaderObj == null) && (typeof headerObj === "undefined" || headerObj == null))
    {
        if (headerConfig==null)
        {
            // Check if we have an URI paramater which specifies
            // a path to the header definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            headerConfig = getURIParamForConfiguration("headerconfiguration","hdrcnf","headerConfPath","hdrcnfs","header",true);
        }
        
        if (headerConfig)
        {
            loadScript(headerConfig, headerObjLoaded, loadDefaultHeader);
        }
        else
        {
            loadDefaultHeader();
        }
    }
    else 
    {
        if (appInfoObjFromServer != null && appInfoObjFromServer.validHeaderObj != null)
        {
            headerObj = appInfoObjFromServer.validHeaderObj;
        }
        
        headerObjLoaded();
    }
}

/**
 * Runs when the brand definition has been loaded. Parses the loaded brand object
 * and calculates final brand configurations.
 */
function brandObjLoaded()
{
    setupBrandConfiguration();
    checkForAppSetup();
}

/**
 * Sets up brand configuration
 */
function setupBrandConfiguration()
{
    // Set up main logo
    resolveStringOrBooleanParameter(false,"mainlogopath","mainlogopath",formObj,brandObj,null,true,appConfiguration.mainlogopath); 
    
    // Set up side logo
    resolveStringOrBooleanParameter(false,"sidelogopath","sidelogopath",formObj,brandObj,null,true,appConfiguration.sidelogopath); 
    
    // Set up favicon
    resolveStringOrBooleanParameter(false,"faviconpath","faviconpath",formObj,typeof customizationObj !== 'undefined' ? customizationObj : null,brandObj,true,appConfiguration.faviconpath); 
    
    // Set up Bootswatch theme
    resolveStringOrBooleanParameter(false,"bootswatchtheme","bootswatchtheme",formObj,brandObj,null,true,appConfiguration.bootswatchtheme);
}

/**
 * Loads brand definition from the default path
 */
function loadDefaultBrand()
{
    var brandDef = appConfiguration.brandDefPath = "./defs/brand.json.js";
    loadScript(brandDef, brandObjLoaded, checkForAppSetup);
}

/**
 * Runs when the customization definition has been loaded. Parses the loaded
 * customization object and calculates final customization configurations.
 */
function customizationObjLoaded()
{
    setupCustomizationConfiguration();
    checkForAppSetup();
}

/**
 * Sets up customization configuration
 */
function setupCustomizationConfiguration()
{
    // Check set up of favicon
    resolveStringOrBooleanParameter(false,"faviconpath","faviconpath",formObj,customizationObj,null,true,appConfiguration.faviconpath); 
    
    // Set up client's logo (customization logo)
    resolveStringOrBooleanParameter(false,"customizationlogopath","customizationlogopath",formObj,customizationObj,null,true,appConfiguration.customizationlogopath); 
}

/**
 * Loads customization definition from the default path
 */
function loadDefaultCustomization()
{
    var customizationDef = appConfiguration.customizationDefPath = "./defs/customization.json.js";
    loadScript(customizationDef, customizationObjLoaded, checkForAppSetup);
}

/**
 * Runs when the header configuration has been loaded. Parses the loaded header object
 * and calculates final header configurations.
 */
function headerObjLoaded()
{
    setupHeaderConfiguration();
    checkForAppSetup();
}

/**
 * Sets up header configuration
 */
function setupHeaderConfiguration()
{
    // Check if we should enable the app launcher button
    resolveStringOrBooleanParameter(true,"app launcher","appLauncher",formObj,headerObj,null,true,appConfiguration.appLauncher); 
    
    // Check if we should maximize the browser window (IE only)
    resolveStringOrBooleanParameter(true,"maximize","maximizeBrowserWindow",formObj,headerObj,null,true,appConfiguration.maximizeBrowserWindow); 

    // Check if we should use mailbox photo
    resolveStringOrBooleanParameter(true,"mailbox photo","mailboxPhoto",formObj,headerObj,null,true,appConfiguration.mailboxPhoto); 
    
    // Set up the form width percent
    var formWidthPercentUrlOrFromServer = checkForResolvedPropertyFromTheServer("formWidthPercent");
    
    if (formWidthPercentUrlOrFromServer==null) {
        formWidthPercentUrlOrFromServer = checkForUrlParameter("form width percent");
    }
    if (formWidthPercentUrlOrFromServer)
    {
        if (!isNaN(formWidthPercentUrlOrFromServer) && 0.1 < formWidthPercentUrlOrFromServer && formWidthPercentUrlOrFromServer <= 100)
        {
            appConfiguration.formWidthPercent = formWidthPercentUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("form width percent"))
    {
        var formWidthPercentAsNumber = Number(formObj.properties["form width percent"]);
        if (!isNaN(formWidthPercentAsNumber) && 0.1 < formWidthPercentAsNumber && formWidthPercentAsNumber <= 100)
        {
            appConfiguration.formWidthPercent = formWidthPercentAsNumber;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("form width percent") && !isNaN(headerObj["form width percent"])
        && 0.1 < headerObj["form width percent"] && headerObj["form width percent"] <= 100)
    {
        appConfiguration.formWidthPercent = headerObj["form width percent"];
    }
    
	//Set up the map grid size
	var mapGridSizeUrlOrFromServer = checkForResolvedPropertyFromTheServer("mapGridSize");
    
    if (mapGridSizeUrlOrFromServer==null) {
        mapGridSizeUrlOrFromServer = checkForUrlParameter("map grid size");
    }
    if (mapGridSizeUrlOrFromServer)
    {
        if (!isNaN(mapGridSizeUrlOrFromServer) && 5 <= mapGridSizeUrlOrFromServer && mapGridSizeUrlOrFromServer <= 100)
        {
            appConfiguration.mapGridSize = mapGridSizeUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("map grid size"))
    {
        var mapGridSizeAsNumber = Number(formObj.properties["map grid size"]);
        if (!isNaN(mapGridSizeAsNumber) && 5 <= mapGridSizeAsNumber && mapGridSizeAsNumber <= 100)
        {
            appConfiguration.mapGridSize = mapGridSizeAsNumber;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("map grid size") && !isNaN(headerObj["map grid size"])
        && 5 <= headerObj["map grid size"] && headerObj["map grid size"] <= 100)
    {
        appConfiguration.mapGridSize = headerObj["map grid size"];
    }
	
	// Set up the background image property
	resolveStringOrBooleanParameter(true,"display background image","displayBackgroundImage",formObj,headerObj,null,true,appConfiguration.displayBackgroundImage); 
	
    // Check if we should show environments
    resolveStringOrBooleanParameter(true,"environment","environment",formObj,headerObj,null,true,appConfiguration.environment); 
    
    // Check if we should show notifications menu
    resolveStringOrBooleanParameter(true,"notifications","notifications",formObj,headerObj,null,true,appConfiguration.notifications); 
    
    // Check if we should show settings menu
    resolveStringOrBooleanParameter(true,"settings","settings",formObj,headerObj,null,true,appConfiguration.settings); 
    
    // Check if we should show help menu
    resolveStringOrBooleanParameter(true,"help","help",formObj,headerObj,null,true,appConfiguration.help); 
    
    // Check if we should show the account menu
    resolveStringOrBooleanParameter(true,"account","account",formObj,headerObj,null,true,appConfiguration.account); 
    
    // Check if we should show theme selection option in the settings menu
    resolveStringOrBooleanParameter(true,"theme settings","themeSettings",formObj,headerObj,null,true,appConfiguration.themeSettings); 
    
    // Check if we should show language selection option in the settings menu
    resolveStringOrBooleanParameter(true,"language settings","languageSettings",formObj,headerObj,null,true,appConfiguration.languageSettings); 
    
    // Check if we should show time zone selection option in the settings menu
    resolveStringOrBooleanParameter(true,"time zone settings","timeZoneSettings",formObj,headerObj,null,true,appConfiguration.timeZoneSettings); 

    // If the themes definition path has been specified
    resolveStringOrBooleanParameter(false,"themes","themes",formObj,headerObj,null,true,appConfiguration.themes); 
	
    // If the userlangs definition path has been specified
    resolveStringOrBooleanParameter(false,"userlangs","userlangs",formObj,headerObj,null,true,appConfiguration.userlangs);
    
    // Set up Default Language
    resolveStringOrBooleanParameter(false,"defaultLanguage","defaultLanguage",formObj,headerObj,null,true,appConfiguration.defaultLanguage);  
    
    // If the timezones definition path has been specified
    resolveStringOrBooleanParameter(false,"timezones","timezones",formObj,headerObj,null,true,appConfiguration.timezones);
    
    // Set up Default Time Zone
    resolveStringOrBooleanParameter(false,"defaultTimeZone","defaultTimeZone",formObj,headerObj,null,true,appConfiguration.defaultTimeZone); 
     
    // Check if we should show the PhraseApp settings
    var hasPhraseAppSettings = false;
    var phraseAppSettingsOn = false;
    var hasPhraseAppSettingsFromServer = checkForResolvedPropertyFromTheServer("phraseApp");
    var hasPhraseAppSettingsUrl = checkForUrlParameter("phraseapp");
    if (hasPhraseAppSettingsFromServer === "false" || hasPhraseAppSettingsFromServer === "true" || hasPhraseAppSettingsFromServer === "on" || hasPhraseAppSettingsFromServer === "off")
    {
        appConfiguration.phraseApp = hasPhraseAppSettingsFromServer;
    }
    else if (hasPhraseAppSettingsUrl === "false" || hasPhraseAppSettingsUrl === "true" || hasPhraseAppSettingsUrl === "on" || hasPhraseAppSettingsUrl === "off")
    {
        appConfiguration.phraseApp = hasPhraseAppSettingsUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("phraseapp"))
    {
        appConfiguration.phraseApp = formObj.properties["phraseapp"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("phraseapp")
        && (headerObj["phraseapp"] === true || headerObj["phraseapp"] === "true" || headerObj["phraseapp"] === "on" || headerObj["phraseapp"] === "off"))
    {
        appConfiguration.phraseApp = headerObj["phraseapp"];
    }

    // setup phrase app project id
    resolveStringOrBooleanParameter(false,"phraseapp project id","phraseAppProjectId",formObj,headerObj,null,true,appConfiguration.phraseAppProjectId); 

    // setup phrase app prefix
    resolveStringOrBooleanParameter(false,"phraseapp prefix","phraseAppPrefix",formObj,headerObj,null,true,appConfiguration.phraseAppPrefix); 

    // setup phrase app suffix
    resolveStringOrBooleanParameter(false,"phraseapp suffix","phraseAppSuffix",formObj,headerObj,null,true,appConfiguration.phraseAppSuffix); 
    
    // Check if we should show the Test settings
    var hasTestSettings = false;
    var testSettingsOn = false;
    var hasTestSettingsFromServer = checkForResolvedPropertyFromTheServer("test");
    var hasTestSettingsUrl = checkForUrlParameter("test");
    if (hasTestSettingsFromServer === "false" || hasTestSettingsFromServer === "true" || hasTestSettingsFromServer === "on" || hasTestSettingsFromServer === "off")
    {
        appConfiguration.test = hasTestSettingsFromServer;
    }
    else if (hasTestSettingsUrl === "false" || hasTestSettingsUrl === "true" || hasTestSettingsUrl === "on" || hasTestSettingsUrl === "off")
    {
        appConfiguration.test = hasTestSettingsUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("test"))
    {
        appConfiguration.test = formObj.properties["test"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("test")
        && (headerObj["test"] === true || headerObj["test"] === "true" || headerObj["test"] === "on" || headerObj["test"] === "off"))
    {
        appConfiguration.test = headerObj["test"];
    }

    // Check if we should show the Debug settings
    var hasDebugSettings = false;
    var debugSettingsOn = false;
    var hasDebugSettingsFromServer = checkForResolvedPropertyFromTheServer("debug");
    var hasDebugSettingsUrl = checkForUrlParameter("debug");
    if (hasDebugSettingsFromServer === "false" || hasDebugSettingsFromServer === "true" || hasDebugSettingsFromServer === "on" || hasDebugSettingsFromServer === "off")
    {
        appConfiguration.debug = hasDebugSettingsFromServer;
    }
    else if (hasDebugSettingsUrl === "false" || hasDebugSettingsUrl === "true" || hasDebugSettingsUrl === "on" || hasDebugSettingsUrl === "off")
    {
        appConfiguration.debug = hasDebugSettingsUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("debug"))
    {
        appConfiguration.debug = formObj.properties["debug"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("debug")
        && (headerObj["debug"] === true || headerObj["debug"] === "true" || headerObj["debug"] === "on" || headerObj["debug"] === "off"))
    {
        appConfiguration.debug = headerObj["debug"];
    }

    // Check if we should show the button which opens the feedback form
    resolveStringOrBooleanParameter(true,"feedback","feedback",formObj,headerObj,null,true,appConfiguration.feedback); 
    
    // Make sure that we have a home parameter and if there is an additional parameter(relativepath) create complete feedback url
    resolveStringOrBooleanParameter(false,"Appl-Home","home",null,null,null,true,appConfiguration.home); 
    resolveStringOrBooleanParameter(false,"feedbackurl","feedbackurl",formObj,headerObj,null,true,appConfiguration.feedbackurl); 

    resolveStringOrBooleanParameter(false,"feedbackmethod","feedbackmethod",formObj,headerObj,null,true,appConfiguration.feedbackmethod); 

    var feedbackUrlAbsolutePath = checkForResolvedPropertyFromTheServer("feedbackUrlAbsolutePath");
    if (feedbackUrlAbsolutePath!=null) 
    {
        appConfiguration.feedbackUrlAbsolutePath = feedbackUrlAbsolutePath;
    } 
    else 
    {
        if (appConfiguration.home && appConfiguration.feedbackurl) 
        {
            appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/" + appConfiguration.feedbackurl; 
        }
        else if (appConfiguration.home && !appConfiguration.feedbackurl)
        {
            appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/Feedback";
        }    
    }

    // Check if we should use graph proxy API instead of the direct calls to Microsoft/Azure graph to get outlook mailbox settings/property extensions
    resolveStringOrBooleanParameter(true,"use graph proxy api","useGraphProxyApi",formObj,headerObj,null,true,appConfiguration.useGraphProxyApi); 
    
    // Check if we should use outlook mailbox settings for language and time zone
    resolveStringOrBooleanParameter(true,"use outlook settings","useOutlookSettings",formObj,headerObj,null,true,appConfiguration.useOutlookSettings); 
    
    // Check if we should use user property extensions for theme (and language and time zone if not stored in the mailbox)
    resolveStringOrBooleanParameter(true,"use user property extensions","useUserPropertyExtensions",formObj,headerObj,null,true,appConfiguration.useUserPropertyExtensions); 
    
    // Set up process text in help menu
    resolveStringOrBooleanParameter(false,"processtext","processtext",formObj,headerObj,null,true,appConfiguration.processtext); 
    
    // Set up e-learning text in help menu
    resolveStringOrBooleanParameter(false,"elearningtext","elearningtext",formObj,headerObj,null,true,appConfiguration.elearningtext); 
    
    // Set up property which specifies if we perform auto calculation modes.
    // Possible values are an empty string (default), "fieldchange" and "focuschange"
    resolveStringOrBooleanParameter(false,"autocalc","autocalc",formObj,headerObj,null,true,appConfiguration.autocalc); 
    
    // Set up property which specifies if we should update calculation result to all form controls - it can be overriden per the form control
    resolveStringOrBooleanParameter(true,"updatecalcresult","updatecalcresult",formObj,headerObj,null,true,appConfiguration.updatecalcresult); 
    
    // Set up path or URL to local calculation file
    resolveStringOrBooleanParameter(false,"calc_js_path_local","calcJsPathLocal",formObj,headerObj,null,true,appConfiguration.calcJsPathLocal); 

    // Set up path or URL to calculation file
    resolveStringOrBooleanParameter(false,"calc_js_path","calcJsPath",formObj,headerObj,null,true,appConfiguration.calcJsPath); 
    
    // Set up calculation setting name
    resolveStringOrBooleanParameter(false,"calc_js_setting","calcJsSetting",formObj,headerObj,null,true,appConfiguration.calcJsSetting); 
    
    // Set up calculation configuration
    resolveStringOrBooleanParameter(false,"calc_conf_path","calcConfPath",formObj,headerObj,null,true,appConfiguration.calcConfPath); 
    
    // Set up calculation configuration setting name
    resolveStringOrBooleanParameter(false,"calc_conf_setting","calcConfSetting",formObj,headerObj,null,true,appConfiguration.calcConfSetting); 
    
    // Set up calculation API path
    resolveStringOrBooleanParameter(false,"calc_api_path","calcApiPath",formObj,headerObj,null,true,appConfiguration.calcApiPath); 

    // setup action
    resolveStringOrBooleanParameter(false,"action","action",null,formObj,headerObj,true,appConfiguration.action); 

    // setup action local script
    resolveStringOrBooleanParameter(false,"action local script","actionLocalScript",formObj,headerObj,null,true,appConfiguration.actionLocalScript); 

    // setup action before script
    resolveStringOrBooleanParameter(false,"action before script","actionBeforeScript",formObj,headerObj,null,true,appConfiguration.actionBeforeScript); 

    // setup action success script
    resolveStringOrBooleanParameter(false,"action success script","actionSuccessScript",formObj,headerObj,null,true,appConfiguration.actionSuccessScript); 

    // setup action failure script
    resolveStringOrBooleanParameter(false,"action failure script","actionFailureScript",formObj,headerObj,null,true,appConfiguration.actionFailureScript); 
    
    // Check if we shoud wait for response from the last sent calculation before we perform an action
    resolveStringOrBooleanParameter(true,"action wait calculation","actionWaitCalculation",formObj,headerObj,null,true,appConfiguration.actionWaitCalculation);

    // setup graph proxy action
    resolveStringOrBooleanParameter(false,"action graph proxy","actionGraphProxy",formObj,headerObj,null,true,appConfiguration.actionGraphProxy);

    // setup loading action
    resolveStringOrBooleanParameter(false,"action loading","actionLoading",formObj,headerObj,null,true,appConfiguration.actionLoading); 
    
    // setup loaded action
    resolveStringOrBooleanParameter(false,"action loaded","actionLoaded",formObj,headerObj,null,true,appConfiguration.actionLoaded); 

    // setup focus action
    resolveStringOrBooleanParameter(false,"action focus","actionFocus",formObj,headerObj,null,true,appConfiguration.actionFocus); 

    // setup focus action local script
    resolveStringOrBooleanParameter(false,"action focus local script","actionFocusLocalScript",formObj,headerObj,null,true,appConfiguration.actionFocusLocalScript); 

    // setup blur action
    resolveStringOrBooleanParameter(false,"action blur","actionBlur",formObj,headerObj,null,true,appConfiguration.actionBlur); 

    // setup blur action local script
    resolveStringOrBooleanParameter(false,"action blur local script","actionBlurLocalScript",formObj,headerObj,null,true,appConfiguration.actionBlurLocalScript); 

    // setup change action
    resolveStringOrBooleanParameter(false,"action change","actionChange",formObj,headerObj,null,true,appConfiguration.actionChange); 

    // setup change action local script
    resolveStringOrBooleanParameter(false,"action change local script","actionChangeLocalScript",formObj,headerObj,null,true,appConfiguration.actionChangeLocalScript); 

    // setup search action
    resolveStringOrBooleanParameter(false,"action search","actionSearch",formObj,headerObj,null,true,appConfiguration.actionSearch); 

    // setup search action local script
    resolveStringOrBooleanParameter(false,"action search local script","actionSearchLocalScript",formObj,headerObj,null,true,appConfiguration.actionSearchLocalScript); 

    // setup showDropdown action
    resolveStringOrBooleanParameter(false,"action showDropdown","actionShowDropdown",formObj,headerObj,null,true,appConfiguration.actionShowDropdown); 

    // setup showDropdown action local script
    resolveStringOrBooleanParameter(false,"action showDropdown local script","actionShowDropdownLocalScript",formObj,headerObj,null,true,appConfiguration.actionShowDropdownLocalScript); 

    // setup click action
    resolveStringOrBooleanParameter(false,"action click","actionClick",formObj,headerObj,null,true,appConfiguration.actionClick); 

    // setup click action local script
    resolveStringOrBooleanParameter(false,"action click local script","actionClickLocalScript",formObj,headerObj,null,true,appConfiguration.actionClickLocalScript); 

    // setup dblclick action
    resolveStringOrBooleanParameter(false,"action dblclick","actionDblClick",formObj,headerObj,null,true,appConfiguration.actionDblClick); 

    // setup dblclick action local script
    resolveStringOrBooleanParameter(false,"action dblclick local script","actionDblClickLocalScript",formObj,headerObj,null,true,appConfiguration.actionDblClickLocalScript); 

    // setup mouseover action
    resolveStringOrBooleanParameter(false,"action mouseover","actionMouseOver",formObj,headerObj,null,true,appConfiguration.actionMouseOver); 

    // setup mouseover action local script
    resolveStringOrBooleanParameter(false,"action mouseover local script","actionMouseOverLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseOverLocalScript); 

    // setup mousedown action
    resolveStringOrBooleanParameter(false,"action mousedown","actionMouseDown",formObj,headerObj,null,true,appConfiguration.actionMouseDown); 

    // setup mousedown action local script
    resolveStringOrBooleanParameter(false,"action mousedown local script","actionMouseDownLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseDownLocalScript); 

    // setup mouseout action
    resolveStringOrBooleanParameter(false,"action mouseout","actionMouseOut",formObj,headerObj,null,true,appConfiguration.actionMouseOut); 

    // setup mouseout action local script
    resolveStringOrBooleanParameter(false,"action mouseout local script","actionMouseOutLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseOutLocalScript); 

    // setup mouseup action
    resolveStringOrBooleanParameter(false,"action mouseup","actionMouseUp",formObj,headerObj,null,true,appConfiguration.actionMouseUp); 

    // setup mouseup action local script
    resolveStringOrBooleanParameter(false,"action mouseup local script","actionMouseUpLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseUpLocalScript); 

    // setup mousemove action
    resolveStringOrBooleanParameter(false,"action mousemove","actionMouseMove",formObj,headerObj,null,true,appConfiguration.actionMouseMove); 

    // setup mousemove action local script
    resolveStringOrBooleanParameter(false,"action mousemove local script","actionMouseMoveLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseMoveLocalScript); 

    // setup mouseenter action
    resolveStringOrBooleanParameter(false,"action mouseenter","actionMouseEnter",formObj,headerObj,null,true,appConfiguration.actionMouseEnter); 

    // setup mouseenter action local script
    resolveStringOrBooleanParameter(false,"action mouseenter local script","actionMouseEnterLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseEnterLocalScript); 

    // setup mouseleave action
    resolveStringOrBooleanParameter(false,"action mouseleave","actionMouseLeave",formObj,headerObj,null,true,appConfiguration.actionMouseLeave); 

    // setup mouseleave action local script
    resolveStringOrBooleanParameter(false,"action mouseleave local script","actionMouseLeaveLocalScript",formObj,headerObj,null,true,appConfiguration.actionMouseLeaveLocalScript); 

    // setup keypress action
    resolveStringOrBooleanParameter(false,"action keypress","actionKeyPress",formObj,headerObj,null,true,appConfiguration.actionKeyPress); 

    // setup keypress action local script
    resolveStringOrBooleanParameter(false,"action keypress local script","actionKeyPressLocalScript",formObj,headerObj,null,true,appConfiguration.actionKeyPressLocalScript); 

    // setup keyup action
    resolveStringOrBooleanParameter(false,"action keyup","actionKeyUp",formObj,headerObj,null,true,appConfiguration.actionKeyUp); 

    // setup keyup action local script
    resolveStringOrBooleanParameter(false,"action keyup local script","actionKeyUpLocalScript",formObj,headerObj,null,true,appConfiguration.actionKeyUpLocalScript); 

    // setup keydown action
    resolveStringOrBooleanParameter(false,"action keydown","actionKeyDown",formObj,headerObj,null,true,appConfiguration.actionKeyDown); 

    // setup keydown action local script
    resolveStringOrBooleanParameter(false,"action keydown local script","actionKeyDownLocalScript",formObj,headerObj,null,true,appConfiguration.actionKeyDownLocalScript); 

    // setup input action
    resolveStringOrBooleanParameter(false,"action input","actionInput",formObj,headerObj,null,true,appConfiguration.actionInput); 

    // setup input action local script
    resolveStringOrBooleanParameter(false,"action input local script","actionInputLocalScript",formObj,headerObj,null,true,appConfiguration.actionInputLocalScript); 

    // setup prevPage action
    resolveStringOrBooleanParameter(false,"action prevPage","actionPrevPage",formObj,headerObj,null,true,appConfiguration.actionPrevPage); 

    // setup prevPage action local script
    resolveStringOrBooleanParameter(false,"action prevPage local script","actionPrevPageLocalScript",formObj,headerObj,null,true,appConfiguration.actionPrevPageLocalScript); 
    
    // setup nextPage action
    resolveStringOrBooleanParameter(false,"action nextPage","actionNextPage",formObj,headerObj,null,true,appConfiguration.actionNextPage); 

    // setup nextPage action local script
    resolveStringOrBooleanParameter(false,"action nextPage local script","actionNextPageLocalScript",formObj,headerObj,null,true,appConfiguration.actionNextPageLocalScript); 

    // setup componentError action
    resolveStringOrBooleanParameter(false,"action componentError","actionComponentError",formObj,headerObj,null,true,appConfiguration.actionComponentError); 

    // setup componentError action local script
    resolveStringOrBooleanParameter(false,"action componentError local script","actionComponentErrorLocalScript",formObj,headerObj,null,true,appConfiguration.actionComponentErrorLocalScript); 

    // setup beforeprint action
    resolveStringOrBooleanParameter(false,"action beforeprint","actionBeforePrint",formObj,headerObj,null,true,appConfiguration.actionBeforePrint); 

    // setup beforeprint local script
    resolveStringOrBooleanParameter(false,"action beforeprint local script","actionBeforePrintLocalScript",formObj,headerObj,null,true,appConfiguration.actionBeforePrintLocalScript); 

    // setup afterprint action
    resolveStringOrBooleanParameter(false,"action afterprint","actionAfterPrint",formObj,headerObj,null,true,appConfiguration.actionAfterPrint); 

    // setup afterprint local script
    resolveStringOrBooleanParameter(false,"action afterprint local script","actionAfterPrintLocalScript",formObj,headerObj,null,true,appConfiguration.actionAfterPrintLocalScript); 

    // setup resize action
    resolveStringOrBooleanParameter(false,"action resize","actionResize",formObj,headerObj,null,true,appConfiguration.actionResize); 

    // setup resize local script
    resolveStringOrBooleanParameter(false,"action resize local script","actionResizeLocalScript",formObj,headerObj,null,true,appConfiguration.actionResizeLocalScript); 

    // setup select action
    resolveStringOrBooleanParameter(false,"action select","actionSelect",formObj,headerObj,null,true,appConfiguration.actionSelect); 

    // setup select local script
    resolveStringOrBooleanParameter(false,"action select local script","actionSelectLocalScript",formObj,headerObj,null,true,appConfiguration.actionSelectLocalScript); 

    // setup contextMenu action
    resolveStringOrBooleanParameter(false,"action contextMenu","actionContextMenu",formObj,headerObj,null,true,appConfiguration.actionContextMenu); 

    // setup contextMenu local script
    resolveStringOrBooleanParameter(false,"action contextMenu local script","actionContextMenuLocalScript",formObj,headerObj,null,true,appConfiguration.actionContextMenuLocalScript); 

    // setup wheel action
    resolveStringOrBooleanParameter(false,"action wheel","actionWheel",formObj,headerObj,null,true,appConfiguration.actionWheel); 

    // setup wheel local script
    resolveStringOrBooleanParameter(false,"action wheel local script","actionWheelLocalScript",formObj,headerObj,null,true,appConfiguration.actionWheelLocalScript); 

    // setup cut action
    resolveStringOrBooleanParameter(false,"action cut","actionCut",formObj,headerObj,null,true,appConfiguration.actionCut); 

    // setup cut local script
    resolveStringOrBooleanParameter(false,"action cut local script","actionCutLocalScript",formObj,headerObj,null,true,appConfiguration.actionCutLocalScript); 

    // setup copy action
    resolveStringOrBooleanParameter(false,"action copy","actionCopy",formObj,headerObj,null,true,appConfiguration.actionCopy); 

    // setup copy local script
    resolveStringOrBooleanParameter(false,"action copy local script","actionCopyLocalScript",formObj,headerObj,null,true,appConfiguration.actionCopyLocalScript); 

    // setup paste action
    resolveStringOrBooleanParameter(false,"action paste","actionPaste",formObj,headerObj,null,true,appConfiguration.actionPaste); 

    // setup paste local script
    resolveStringOrBooleanParameter(false,"action paste local script","actionPasteLocalScript",formObj,headerObj,null,true,appConfiguration.actionPasteLocalScript); 

    // setup scroll action
    resolveStringOrBooleanParameter(false,"action scroll","actionScroll",formObj,headerObj,null,true,appConfiguration.actionScroll); 

    // setup scroll local script
    resolveStringOrBooleanParameter(false,"action scroll local script","actionScrollLocalScript",formObj,headerObj,null,true,appConfiguration.actionScrollLocalScript);

    // setup dirty changed action
    resolveStringOrBooleanParameter(false,"action dirty changed","actionDirtyChanged",formObj,headerObj,null,true,appConfiguration.actionDirtyChanged); 

    // setup dirty changed local script
    resolveStringOrBooleanParameter(false,"action dirty changed local script","actionDirtyChangedLocalScript",formObj,headerObj,null,true,appConfiguration.actionDirtyChangedLocalScript);

	// check wether we should cluster pins
    resolveStringOrBooleanParameter(true,"map cluster pins","mapClusterPins",formObj,headerObj,null,true,appConfiguration.mapClusterPins);

    // Set up Bing Maps key https://msdn.microsoft.com/en-us/library/ff428642.aspx
    resolveStringOrBooleanParameter(false,"bing maps key","bingMapsKey",formObj,headerObj,null,true,appConfiguration.bingMapsKey); 
    
    // Set up map wrapper ID which is the ID of an HTML element where we put a map
    resolveStringOrBooleanParameter(false,"map wrapper id","mapWrapperId",formObj,headerObj,null,true,appConfiguration.mapWrapperId);
    
    // Set up map route information wrapper ID which is the ID of an HTML element where we put a route information from the map
    resolveStringOrBooleanParameter(false,"map route info wrapper id","mapRouteInfoWrapperId",formObj,headerObj,null,true,appConfiguration.mapRouteInfoWrapperId);
    
    // Set up map country name used to specify starting map area
    resolveStringOrBooleanParameter(false,"map country name","mapCountryName",formObj,headerObj,null,true,appConfiguration.mapCountryName); 
    
    // Set up map zoom level
    resolveStringOrBooleanParameter(false,"map zoom","mapZoom",formObj,headerObj,null,true,appConfiguration.mapZoom); 
    
    // Set up if we show a pushpin on the map center
    resolveStringOrBooleanParameter(true, "map center pushpin","mapCenterPushpin",formObj,headerObj,null,true,appConfiguration.mapCenterPushpin);
    
    // Set up center map pushpin title
    resolveStringOrBooleanParameter(false, "map center pushpin title","mapCenterPushpinTitle",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinTitle);
    
    // Set up center map pushpin subtitle
    resolveStringOrBooleanParameter(false, "map center pushpin subtitle","mapCenterPushpinSubTitle",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinSubTitle);
    
    // Set up center map pushpin description
    resolveStringOrBooleanParameter(false, "map center pushpin description","mapCenterPushpinDescription",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinDescription);
    
    // Set up map center latitude
    var mapCenterLatitudeUrlOrFromServer = checkForResolvedPropertyFromTheServer("mapCenterLatitude");    
    if (mapCenterLatitudeUrlOrFromServer==null) {
        mapCenterLatitudeUrlOrFromServer = checkForUrlParameter("map center latitude");
    }
    if (mapCenterLatitudeUrlOrFromServer)
    {
        if (!isNaN(mapCenterLatitudeUrlOrFromServer))
        {
            appConfiguration.mapCenterLatitude = mapCenterLatitudeUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties !== null && formObj.properties.hasOwnProperty("map center latitude"))
    {
        if (!isNaN(formObj.properties["map center latitude"]))
        {
            appConfiguration.mapCenterLatitude = Number(formObj.properties["map center latitude"]);
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("map center latitude") && headerObj["map center latitude"])
    {
        if (!isNaN(headerObj["map center latitude"]))
        {
            appConfiguration.mapCenterLatitude = headerObj["map center latitude"];
        }
    }
    
    // Set up map center longitude
    var mapCenterLongitudeUrlOrFromServer = checkForResolvedPropertyFromTheServer("mapCenterLongitude");
    if (mapCenterLongitudeUrlOrFromServer==null) {
        mapCenterLongitudeUrlOrFromServer = checkForUrlParameter("map center longitude");
    }
    if (mapCenterLongitudeUrlOrFromServer)
    {
        if (!isNaN(mapCenterLongitudeUrlOrFromServer))
        {
            appConfiguration.mapCenterLongitude = mapCenterLongitudeUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties !== null && formObj.properties.hasOwnProperty("map center longitude"))
    {
        if (!isNaN(formObj.properties["map center longitude"]))
        {
            appConfiguration.mapCenterLongitude = Number(formObj.properties["map center longitude"]);
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("map center longitude") && headerObj["map center longitude"])
    {
        if (!isNaN(headerObj["map center longitude"]))
        {
            appConfiguration.mapCenterLongitude = headerObj["map center longitude"];
        }
    }
    
    // Set up if we show an info box when pushpin is clicked
    resolveStringOrBooleanParameter(true, "map show info box","mapShowInfoBox",formObj,headerObj,null,true,appConfiguration.mapShowInfoBox);
    
    // Set up if we show traffic on the map
    // Possible values are an empty string (default), "pushpinclick" and "fromstart"
    resolveStringOrBooleanParameter(false,"map show traffic","mapShowTraffic",formObj,headerObj,null,true,appConfiguration.mapShowTraffic); 
    
    // Check if we should show toggle menu
    resolveStringOrBooleanParameter(true,"toggle menu","toggleMenu",formObj,headerObj,null,true,appConfiguration.toggleMenu); 
    
    // Check if we should trigger form change when the window gets resized
    resolveStringOrBooleanParameter(true,"triggerResizeChange","triggerResizeChange",formObj,headerObj,null,true,appConfiguration.triggerResizeChange); 
    
    // Check if we should disable spinner when executing actions
    resolveStringOrBooleanParameter(true,"disableActionSpinner","disableActionSpinner",formObj,headerObj,null,true,appConfiguration.disableActionSpinner); 
    
    // Set up menu position
    resolveStringOrBooleanParameter(false,"menuposition","menuPosition",formObj,headerObj,null,true,appConfiguration.menuPosition);
    TogFormViewer.menuPosition = appConfiguration.menuPosition;
    
    // Set up menu position threshold (minimum window width when menu position is changed from top or left to bottom)
    var menuPositionThresholdUrlOrFromServer = checkForResolvedPropertyFromTheServer("menuPositionThreshold");
    if (menuPositionThresholdUrlOrFromServer==null) {
        menuPositionThresholdUrlOrFromServer = checkForUrlParameter("menupositionthreshold");
    }
    if (menuPositionThresholdUrlOrFromServer)
    {
        if (!isNaN(menuPositionThresholdUrlOrFromServer))
        {
            appConfiguration.menuPositionThreshold = menuPositionThresholdUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties !== null && formObj.properties.hasOwnProperty("menupositionthreshold"))
    {
        if (!isNaN(formObj.properties["menupositionthreshold"]))
        {
            appConfiguration.menuPositionThreshold = Number(formObj.properties["menupositionthreshold"]);
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("menupositionthreshold") && headerObj["menupositionthreshold"])
    {
        if (!isNaN(headerObj["menupositionthreshold"]))
        {
            appConfiguration.menuPositionThreshold = headerObj["menupositionthreshold"];
        }
    }
    
    recalculateMenuPosition();
    
    // Check if the menus definition path has been specified
    resolveStringOrBooleanParameter(false,"menus","menusPath",formObj,headerObj,null,true,appConfiguration.menusPath); 
    
    // Check if the top menu translations definition path has been specified
    resolveStringOrBooleanParameter(false,"langmenustop","langMenusTopPath",formObj,headerObj,null,true,appConfiguration.langMenusTopPath); 
    
    // Check if the left menu translations definition path has been specified
    resolveStringOrBooleanParameter(false,"langmenusleft","langMenusLeftPath",formObj,headerObj,null,true,appConfiguration.langMenusLeftPath); 
    
    // Check if the bottom menu translations definition path has been specified
    resolveStringOrBooleanParameter(false,"langmenusbottom","langMenusBottomPath",formObj,headerObj,null,true,appConfiguration.langMenusBottomPath); 
    
    // Check if we have Choices.js options defined for the whole form (applied to all Select components in the form)
    var choicesOptionsFromServer = checkForResolvedPropertyFromTheServer("choicesOptions");
    var choicesOptionsUrl = checkForUrlParameter("choicesOptions");
    if (choicesOptionsFromServer)
    {
        appConfiguration.choicesOptions = choicesOptionsFromServer;
    }
    else if (choicesOptionsUrl)
    {
        appConfiguration.choicesOptions = JSON.parse(choicesOptionsUrl);
    }
    else if (typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("choicesOptions"))
    {
        if (formObj.properties["choicesOptions"])
        {
            appConfiguration.choicesOptions = JSON.parse(formObj.properties["choicesOptions"]);
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("choicesOptions") && headerObj["choicesOptions"])
    {
        appConfiguration.choicesOptions = JSON.parse(headerObj["choicesOptions"]);
    }

    // Check if we should send formObj to the server as a part of appInfo object
    resolveStringOrBooleanParameter(true,"sendForm","sendForm",formObj,headerObj,null,true,appConfiguration.sendForm);
    
    // Check if form translation path has been specified
    resolveStringOrBooleanParameter(false,"formtranslation","formTranslation",formObj,headerObj,null,true,appConfiguration.formTranslation);
    
    // Check if additional api function should be called and find out resource of the function
    resolveStringOrBooleanParameter(false, "additional api function resource","additionalApiFunctionResource",formObj,headerObj,null,true,appConfiguration.additionalApiFunctionResource);
    
    // Check if additional api function should be called and find out function URL
    resolveStringOrBooleanParameter(false, "additional api function url","additionalApiFunctionUrl",formObj,headerObj,null,true,appConfiguration.additionalApiFunctionUrl);
    
    // Check if additional api function should be called and find out HTTP method
    resolveStringOrBooleanParameter(false, "additional api function method","additionalApiFunctionMethod",formObj,headerObj,null,true,appConfiguration.additionalApiFunctionMethod);
    
    // Check if additional api function should be called and find out stringified payload to send
    resolveStringOrBooleanParameter(false, "additional api function payload","additionalApiFunctionPayload",formObj,headerObj,null,true,appConfiguration.additionalApiFunctionPayload);
    
}

/**
 * Resolves boolean or string parameter (depending on the 1st isBoolean method parameter) by first checking query parameters (if  checkUrlParameter method parameter is true),
 * and then, if not found, checking firstObj, secondObj and thirdObj JSON object's sequentially (if they exist) for the paramName attribute. If parameter value is not found anywhere, 
 * the value of defaultValue method parameter is set to the appConfiguration attribute with the name specified by appConfigurationParamName. 
 */
function resolveStringOrBooleanParameter(isBoolean,paramName,appConfigurationParamName,firstObj,secondObj,thirdObj,checkUrlParameter,defaultValue) 
{
    var paramVal = defaultValue;
    var paramValFromRPO = checkForResolvedPropertyFromTheServer(appConfigurationParamName);
    
    if (paramValFromRPO!=null)
    {
        paramVal = paramValFromRPO;
    }
    else
    {
        var paramValFromUrl = checkUrlParameter ? checkForUrlParameter(paramName) : "";
        var boolValCorrect = !isBoolean || paramValFromUrl === "false" || paramValFromUrl === "true";
        
        if (paramValFromUrl && boolValCorrect)
        {
            if (isBoolean)
            {
                paramVal =  (paramValFromUrl === "true");
            }
            else
            {
                paramVal = paramValFromUrl;
            }
        }
        else if (typeof firstObj !== 'undefined' && firstObj !== null && firstObj.hasOwnProperty("properties") && firstObj.properties !== null && firstObj.properties.hasOwnProperty(paramName))
        {
            var paramValFromObj = firstObj.properties[paramName];
            var bvc = !isBoolean || paramValFromObj === "false" || paramValFromObj === "true";
            if (isBoolean) {
                if (bvc) {
                    paramVal = (firstObj.properties[paramName]==='true');
                }
            } else {
                paramVal = firstObj.properties[paramName];
            }
        }
        else if (typeof secondObj !== 'undefined' && secondObj !== null && secondObj.hasOwnProperty(paramName))
        {
            paramVal  = secondObj[paramName];
        }
        else if (typeof thirdObj !== 'undefined' && thirdObj !== null && thirdObj.hasOwnProperty(paramName))
        {
            paramVal  = thirdObj[paramName];
        }
    }
    
    appConfiguration[appConfigurationParamName] = paramVal;
}

/**
 * Loads header configuration from the default path
 */
function loadDefaultHeader()
{
    var headerDef = appConfiguration.headerConfPath = "./defs/header.json.js";
    loadScript(headerDef, headerObjLoaded, checkForAppSetup);
}

/**
 * Resets loaded themes
 */
function resetThemes()
{
    loadScript(appConfiguration.themes, themesReloaded, resetStyleAndTheme);
}

/**
 * Callback executed when themes.json.js has been reloaded
 */
function themesReloaded()
{
    setThemesConfiguration();
    resetStyleAndTheme();
}

/**
 * Resets page style and themes settings after a new form and properties has been loaded
 */
function resetStyleAndTheme()
{
    // Reset theme menu and page style because it is possible that
    // they are reconfigured with the new form properties
    resetThemeMenu();
    resetStyle();
    
    // Theme is overridden if we use theme stored on Azure
    // In this case we need to keep the theme unchanged
    if (themeSelector.overridden)
    {
        setupTheme(themeSelector.currentTheme);
    }
    else
    {
        setupStyle(false);
    }
}

/**
 * Callback executed when themes.json.js has been loaded
 */
function themesLoaded() {
    
    setThemesConfiguration();
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Sets up themes configuration
 */
function setThemesConfiguration()
{
    // Update the themesMap
    themesMap = themesObj;
}

/**
 * Callback executed when themes.json.js can't be loaded
 */
function loadDefaultThemes(doNotCheck)
{
    // We haven't found themes.json.js so we will use the hardcoded themes list
    // defined in the themesMap global variable. We still need to define the
    // themesObj as a global variable because we check if it is defined in the
    // checkForAppSetup function when we want to know if the themes are initialized
    window.themesObj = defaultThemesMap;
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when userlangs.json.js has been loaded
 */
function languagesLoaded() 
{
    
    setLanguagesConfiguration();
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Sets up languages configuration
 */
function setLanguagesConfiguration()
{
    // Update the languagesMap and appConfiguration to override the hardcoded values
    languagesMap = userLangsObj;
}

/**
 * Callback executed when userlangs.json.js can't be loaded
 */
function loadDefaultLanguages(doNotCheck)
{
    // We haven't found userlangs.json.js so we will use the hardcoded languages list
    // defined in the languagesMap global variable. We still need to define the
    // userLangsObj as a global variable because we check if it is defined in the
    // checkForAppSetup function when we want to know if the languages are initialized
    window.userLangsObj = defaultLanguagesMap;
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when timezones.json.js can't be loaded
 */
function loadDefaultTimeZones(doNotCheck)
{
    // We haven't found timezones.json.js so we will use the hardcoded time zones list
    // defined in the timeZonesArray global variable. We still need to define the
    // timeZonesArr as a global variable because we check if it is defined in the
    // checkForAppSetup function when we want to know if the time zones are initialized
    window.timeZonesArr = timeZonesArray;
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Flag which indicates that customScript has been loaded
 */
var customScriptLoadedFlag = false;

/**
 * Callback executed when customScript has been loaded
 */
function customScriptLoaded(doNotCheck) 
{
    
    customScriptLoadedFlag = true;
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Flag which indicates that customCss has been loaded
 */
var customCssLoadedFlag = false;

/**
 * Callback executed when customCss has been loaded
 */
function customCssLoaded(doNotCheck) 
{
    
    customCssLoadedFlag = true;
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when menus.json.js can't be loaded
 */
function loadDefaultMenus(doNotCheck)
{
    window.menusObj = {};
    TogFormViewer.activeMenuKey = "";

    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when lang-top-menus.json.js can't be loaded
 */
function loadDefaultLangTopMenus(doNotCheck)
{
    window.langTopMenusObj = {};
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when lang-left-menus.json.js can't be loaded
 */
function loadDefaultLangLeftMenus(doNotCheck)
{
    window.langLeftMenusObj = {};
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when lang-bottom-menus.json.js can't be loaded
 */
function loadDefaultLangBottomMenus(doNotCheck)
{
    window.langBottomMenusObj = {};
    
    // Check if anything else should be loaded
    if (!doNotCheck || (typeof doNotCheck=='object')) {
        checkForAppSetup();
    }
}

/**
 * Callback executed when form translations have been loaded
 */
function formTranslationsLoaded()
{
    $.extend(langObj, tranFormObj);
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Callback executed when tran-form.json.js can't be loaded
 */
function loadDefaultFormTranslations()
{
    loadScript(appConfiguration.formDefPath.substring(0, appConfiguration.formDefPath.length - 12) + "tran-form.json.js", formTranslationsLoaded, formTranslationsLoadFailed);
}

/**
 * Callback executed when a default tran-form.json.js can't be loaded
 */
function formTranslationsLoadFailed()
{
    window.tranFormObj = {};
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Flag which indicates if the themes definition (themes.json.js) loading has been started
 */
var themeLoadStarted = false;

/**
 * Flag which indicates if the lenguages definition (userlangs.json.js) loading has been started
 */
var languageLoadStarted = false;

/**
 * Flag which indicates if the time zones definition (timezones.json.js) loading has been started
 */
var timeZonesLoadStarted = false;

/**
 * Flag which indicates if the customScript definition loading has been started
 */
var customScriptLoadStarted = false;

/**
 * Flag which indicates if the custom css loading has been started
 */
var customCssLoadStarted = false;

/**
 * Flag which indicates if the menus definition loading has been started
 */
var menusLoadStarted = false;

/**
 * Flag which indicates if the top menus translations loading has been started
 */
var langTopMenusLoadStarted = false;

/**
 * Flag which indicates if the left menus translations loading has been started
 */
var langLeftMenusLoadStarted = false;

/**
 * Flag which indicates if the bottom menus translations loading has been started
 */
var langBottomMenusLoadStarted = false;

/**
 * Flag which indicates if the form translations loading has been started
 */
var formTranslationLoadStarted = false;

/**
 * Flag which indicates if the additional API function has been called
 */
var additionalApiCallPerformed = false;

/**
 * Checks if all definition files has been loaded.
 * If so adds the app setup function as listener for the window load event
 * or runs the app setup if the window load event is already fired.
 */
function checkForAppSetup()
{
    // Check if the themes.json.js should be loaded
    if (!themeLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        themeLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.themesObj != null) 
        {
            themesObj = appInfoObjFromServer.themesObj;
            setThemesConfiguration();
        }
        else
        {
            if (appConfiguration.themes)
            {
                loadScript(appConfiguration.themes, themesLoaded, loadDefaultThemes);
            } else {
               loadDefaultThemes(true);
            }               
        }        
    }
    
    // Check if the userlangs.json.js should be loaded
    if (!languageLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        languageLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.config != null && appInfoObjFromServer.config.userLangsObj != null)
        {
            userLangsObj = appInfoObjFromServer.config.userLangsObj;
            setLanguagesConfiguration();
        }
        else
        {
            if (appConfiguration.userlangs)
            {
                loadScript(appConfiguration.userlangs, languagesLoaded, loadDefaultLanguages);
            } else {
               loadDefaultLanguages(true);
            }
        }        
    }
    
    // Check if the timezones.json.js should be loaded
    if (!timeZonesLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        timeZonesLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.timeZonesArr != null)
        {
            timeZonesArr = appInfoObjFromServer.timeZonesArr;
        }
        else
        {
            if (appConfiguration.timezones)
            {
                loadScript(appConfiguration.timezones, checkForAppSetup, loadDefaultTimeZones);
            } else {
               loadDefaultTimeZones(true);
            }
        }
        
    }

    // Check if the file, which path is specified at customScript parameter, should be loaded
    if (!customScriptLoadStarted && typeof appObj !== 'undefined' && appObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        customScriptLoadStarted = true;
        if (appConfiguration.customScript)
        {
            loadScript(appConfiguration.customScript, customScriptLoaded);
        } else {
           customScriptLoaded(true);
        }   
    }
    
    // Check if the file, which path is specified at customCss parameter, should be loaded
    if (!customCssLoadStarted && typeof appObj !== 'undefined' && appObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        customCssLoadStarted = true;
        if (appConfiguration.customCss)
        {
            var customCssElem = document.createElement("link");
            customCssElem.rel = "stylesheet";
            customCssElem.href = appConfiguration.customCss + "?vid=" + versionId;
            customCssElem.onreadystatechange = customCssLoaded;
            customCssElem.onload = customCssLoaded;
            customCssElem.onerror = customCssLoaded;
            var layoutStyleNode = document.getElementById("layoutstyle");
            layoutStyleNode.parentNode.insertBefore(customCssElem, layoutStyleNode.nextSibling);
        } else {
           customCssLoaded(true);
        }   
    }
    
    // Check if the menus.json.js should be loaded
    if (!menusLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        menusLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.config != null && appInfoObjFromServer.config.menusObj != null)
        {
            menusObj = appInfoObjFromServer.config.menusObj;
        }
        else
        {
            if (appConfiguration.menusPath)
            {
                loadScript(appConfiguration.menusPath, checkForAppSetup, loadDefaultMenus);
            } else {
               loadDefaultMenus(true);
            }
        }        
    }
    
    // Check if the lang-top-menus.json.js should be loadedScript
    if (!langTopMenusLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        langTopMenusLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.config && appInfoObjFromServer.config.langTopMenusObj)
        {
            langTopMenusObj = appInfoObjFromServer.config.langTopMenusObj;
        }
        else
        {
            if (appConfiguration.langMenusTopPath)
            {
                loadScript(appConfiguration.langMenusTopPath, checkForAppSetup, loadDefaultLangTopMenus);
            } else {
               loadDefaultLangTopMenus(true);
            }
        }        
    }
    
    // Check if the lang-left-menus.json.js should be loadedScript
    if (!langLeftMenusLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        langLeftMenusLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.config && appInfoObjFromServer.config.langLeftMenusObj)
        {
            langLeftMenusObj = appInfoObjFromServer.config.langLeftMenusObj;
        }
        else
        {
            if (appConfiguration.langMenusLeftPath)
            {
                loadScript(appConfiguration.langMenusLeftPath, checkForAppSetup, loadDefaultLangLeftMenus);
            } else {
               loadDefaultLangLeftMenus(true);
            }
        }        
    }
    
    // Check if the lang-bottom-menus.json.js should be loadedScript
    if (!langBottomMenusLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        langBottomMenusLoadStarted = true;
        if (appInfoObjFromServer != null && appInfoObjFromServer.config && appInfoObjFromServer.config.langBottomMenusObj)
        {
            langBottomMenusObj = appInfoObjFromServer.config.langBottomMenusObj;
        }
        else
        {
            if (appConfiguration.langMenusBottomPath)
            {
                loadScript(appConfiguration.langMenusBottomPath, checkForAppSetup, loadDefaultLangBottomMenus);
            } else {
               loadDefaultLangBottomMenus(true);
            }
        }        
    }
    
    if (!formTranslationLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        formTranslationLoadStarted = true;
        if (appConfiguration.formTranslation)
        {
            loadScript(appConfiguration.formTranslation, formTranslationsLoaded, loadDefaultFormTranslations);
        }
        else
        {
            loadDefaultFormTranslations();
        }
    }
    
    if (isSignedInUser() && !additionalApiCallPerformed && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        additionalApiCallPerformed = true;
        if (appConfiguration.additionalApiFunctionResource && appConfiguration.additionalApiFunctionUrl)
        {
            performApiFunctionCall(appConfiguration.additionalApiFunctionResource, appConfiguration.additionalApiFunctionUrl, appConfiguration.additionalApiFunctionMethod,
                appConfiguration.additionalApiFunctionPayload, function(data)
                {
                    additionalApiResponseReceived = true;
                    TogFormViewer.additionalApiFunctionResponse = data;
                    checkAdditionalApiCallPerformed();
                }, function()
                {
                    additionalApiResponseReceived = true;
                    TogFormViewer.additionalApiFunctionResponse = {};
                    checkAdditionalApiCallPerformed();
                });
        }
        else
        {
            additionalApiResponseReceived = true;
            TogFormViewer.additionalApiFunctionResponse = {};
        }
    }
        
    if (typeof headerObj !== 'undefined' && headerObj!=null && typeof customizationObj !== 'undefined' && customizationObj!=null && typeof brandObj !== 'undefined' && brandObj!=null && typeof formObj !== 'undefined' && formObj!=null 
        && (typeof themesObj !== 'undefined' && themesObj!=null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["themes"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["themes"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.themes)))
        && (typeof userLangsObj !== 'undefined' && userLangsObj != null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["userlangs"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["userlangs"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.userlangs)))
        && (typeof timeZonesArr !== 'undefined' && timeZonesArr != null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["timezones"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["timezones"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.timezones)))
        && (customScriptLoadedFlag || (typeof appObj !== 'undefined' && appObj != null && !(appObj["customScript"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["customScript"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.customScript)))
        && (customCssLoadedFlag || (typeof appObj !== 'undefined' && appObj != null && !(appObj["customCss"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["customCss"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.customCss)))
        && (typeof menusObj !== 'undefined' && menusObj != null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["menus"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["menus"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.menus)))
        && (typeof langTopMenusObj !== 'undefined' && langTopMenusObj != null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["langmenustop"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["langmenustop"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.langmenustop)))
        && (typeof langBottomMenusObj !== 'undefined' && langBottomMenusObj != null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["langmenusbottom"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["langmenusbottom"])) && (appInfoObjFromServer == null || !appInfoObjFromServer.langmenusbottom)))
        && (typeof tranFormObj !== 'undefined' && tranFormObj != null))
    {        
        if (document.readyState === 'complete')
        {
            checkUserSettingsAndPerformLoadingCallback();
        }
        else
        {
            if(window.addEventListener)
            {
                window.addEventListener('load', checkUserSettingsAndPerformLoadingCallback);
            }
            else
            {
                window.attachEvent('onload', checkUserSettingsAndPerformLoadingCallback);
            }
        }
    }
}

/**
 * Calls MS APIs to find out user settings such as language, time zone and theme if they are not
 * already initialized and then performs loading callback if needed and sets up the application
 */
function checkUserSettingsAndPerformLoadingCallback()
{
    setUserSettings(function()
    {
        userSettingsLoaded = true;
        checkAdditionalApiCallPerformed();
    });
}

/**
 * Set user settings from Outlook or Azure. 
 */
function setUserSettings(userSettingsSetCallback)
{
    resetLanguageConfiguration();
    resetTimeZoneConfiguration();
    resetThemeConfiguration();
    
    // Check if exsist stored user settings (on Azure or Outlook)
    if (appConfiguration.useOutlookSettings && isSignedInUser())
    {
        if (appConfiguration.timeZoneSettings)
        {
            getSupportedTimeZones(function(timeZones)
            {
                TogFormViewer.setProperty("supportedTimeZones", timeZones);
                var userTimeZonesRPO = checkForResolvedPropertyFromTheServer("userTimeZones");
                if (userTimeZonesRPO)
                {
                    TogFormViewer.setProperty("userTimeZones", userTimeZonesRPO);
                }
                else
                {
                    TogFormViewer.setProperty("userTimeZones", timeZones);
                }
                
                setSupportedTimeZones(TogFormViewer.getProperty("userTimeZones"));
                
                // Find out user's mailbox settings
                getmailboxsettingsdata(function(language, timeZone)
                {
                    outlookSettingsSuccessCallback(language, timeZone, userSettingsSetCallback);
                },
                function()
                {
                    outlookSettingsErrorCallback(userSettingsSetCallback);
                });
            }, function()
            {
                TogFormViewer.setProperty("supportedTimeZones", "");
                var userTimeZonesRPO = checkForResolvedPropertyFromTheServer("userTimeZones");
                if (userTimeZonesRPO)
                {
                    TogFormViewer.setProperty("userTimeZones", userTimeZonesRPO);
                    setSupportedTimeZones(timeZones);
                }
                else
                {
                    setDefaultTimeZonesChoices();
                }
                
                // Find out user's mailbox settings
                getmailboxsettingsdata(function(language, timeZone)
                {
                    outlookSettingsSuccessCallback(language, timeZone, userSettingsSetCallback);
                },
                function()
                {
                    outlookSettingsErrorCallback(userSettingsSetCallback);
                });            
            });
        }
        else if (appConfiguration.languageSettings)
        {
            // We set the default time zone choices beacuse
            // we don't read them from the mailbox settings
            TogFormViewer.setProperty("supportedTimeZones", "");
            setDefaultTimeZonesChoices();
            
            // Find out user's mailbox settings
            getmailboxsettingsdata(function(language, timeZone)
            {
                outlookSettingsSuccessCallback(language, timeZone, userSettingsSetCallback);
            },
            function()
            {
                outlookSettingsErrorCallback(userSettingsSetCallback);
            });
        }
        else
        {
            // We set the default time zone choices beacuse
            // we don't read them from the mailbox settings
            TogFormViewer.setProperty("supportedTimeZones", "");
            setDefaultTimeZonesChoices();
        
            // Setup language, time zone and theme configuration
            setupLanguageConfiguration();
            setupTimeZoneConfiguration();
            setupThemeConfiguration();
            userSettingsSetCallback();
        }
        
        if (appConfiguration.useUserPropertyExtensions && appConfiguration.themeSettings)
        {
            // Find out user's theme (user property extensions)
            getUserPropertyExtensions(false,
            function(language, timeZone, theme)
            {
                // Setup theme configuration
                setupThemeConfiguration(theme);
                checkUserSettingsLoaded(userSettingsSetCallback);
            },
            function()
            {
                // Setup theme configuration
                setupThemeConfiguration();
                checkUserSettingsLoaded(userSettingsSetCallback);
            });
        }
        else if (appConfiguration.themeSettings)
        {
            // In this case we don't use stored theme but we still need
            // to update properties and predefined theme
            setupThemeConfiguration();
            checkUserSettingsLoaded(userSettingsSetCallback);
        }
    }
    else if ((appConfiguration.themeSettings || appConfiguration.languageSettings || appConfiguration.timeZoneSettings)
        && appConfiguration.useUserPropertyExtensions && isSignedInUser())
    {
        // We set the default time zone choices beacuse
        // we don't read them from the mailbox settings
        TogFormViewer.setProperty("supportedTimeZones", "");
        setDefaultTimeZonesChoices();
                
        // Find out user's language, time zone and theme settings
        // defined in user's property extensions on AAD
        getUserPropertyExtensions(true,
        function(language, timeZone, theme)
        {
            // Setup language, time zone and theme configuration
            // We don't use stored language configuration when theme settings are switched off
            if (appConfiguration.languageSettings)
            {
                setupLanguageConfiguration(language);
            }
            else
            {
                setupLanguageConfiguration();
            }
            
            // We don't use stored time zone configuration when theme settings are switched off
            if (appConfiguration.timeZoneSettings)
            {
                setupTimeZoneConfiguration(timeZone);
            }
            else
            {
                setupTimeZoneConfiguration();
            }
            
            // We don't use stored theme configuration when theme settings are switched off
            if (appConfiguration.themeSettings)
            {
                setupThemeConfiguration(theme);
            }
            else
            {
                setupThemeConfiguration();
            }
            
            // We perform the callback immidiately because we performed only one API call
            userSettingsSetCallback();
        },
        function()
        {
            // Setup language, time zone and theme configuration
            setupLanguageConfiguration();
            setupTimeZoneConfiguration();
            setupThemeConfiguration();
            
            // We perform the callback immidiately because we performed only one API call
            userSettingsSetCallback();
        });
    }
    else
    {
        // We set the default time zone choices beacuse
        // we don't read them from the mailbox settings
        TogFormViewer.setProperty("supportedTimeZones", "");
        setDefaultTimeZonesChoices();
        
        // Setup language, time zone and theme configuration
        setupLanguageConfiguration();
        setupTimeZoneConfiguration();
        setupThemeConfiguration();
        userSettingsSetCallback();
    }
} 

function checkUserSettingsLoaded(userSettingsLoadedCallback)
{
    if ((!appConfiguration.themeSettings || isThemeSettingsLoaded())
        && (!appConfiguration.languageSettings || isLanguageSettingsLoaded())
    && (!appConfiguration.timeZoneSettings || isTimeZoneSettingsLoaded()))
    {
        userSettingsLoadedCallback();
    }
}

function setupLanguageConfiguration(storedLanguage)
{
    var convertedStoredLanguage = "";
    if (typeof storedLanguage === "undefined")
    {
        storedLanguage = "";
    }
    else
    {
        convertedStoredLanguage = convertGraphLanguage(storedLanguage);
    }
    
    TogFormViewer.setProperty("storedUserLanguage", storedLanguage);
    console.log("Mailbox settings language = " + storedLanguage);
    var userLanguageFromRPO = checkForResolvedPropertyFromTheServer("userLanguage");
    if (userLanguageFromRPO && languagesMap[userLanguageFromRPO])
    {
        TogFormViewer.setProperty("userLanguage", userLanguageFromRPO);
    }
    else if (convertedStoredLanguage && languagesMap[convertedStoredLanguage])
    {
        TogFormViewer.setProperty("userLanguage", convertedStoredLanguage);
    }
    else if (appConfiguration.defaultLanguage && languagesMap[appConfiguration.defaultLanguage])
    {
        TogFormViewer.setProperty("userLanguage", appConfiguration.defaultLanguage);
    }
    else
    {
        resetLanguageConfiguration();
        TogFormViewer.setProperty("userLanguage", languageSelector.currentLanguage);
    }
    
    preparePredefinedLanguage(TogFormViewer.getProperty("userLanguage"));
}

function setupTimeZoneConfiguration(storedTimeZone)
{
    if (typeof storedTimeZone === "undefined")
    {
        storedTimeZone = "";
    }
    
    TogFormViewer.setProperty("storedUserTimeZone", storedTimeZone);
    console.log("Mailbox settings time zone = " + storedTimeZone);
    var timeZoneFromRPO = checkForResolvedPropertyFromTheServer("userTimeZone");
    if (timeZoneFromRPO && supportedTimeZonesMap[timeZoneFromRPO])
    {
        TogFormViewer.setProperty("userTimeZone", timeZoneFromRPO);
    }
    else if (storedTimeZone && supportedTimeZonesMap[storedTimeZone])
    {
        TogFormViewer.setProperty("userTimeZone", storedTimeZone);
    }
    else if (appConfiguration.defaultTimeZone && supportedTimeZonesMap[appConfiguration.defaultTimeZone])
    {
        TogFormViewer.setProperty("userTimeZone", appConfiguration.defaultTimeZone);
    }
    else
    {
        resetTimeZoneConfiguration();
        checkTimeZonesConfiguration();
        TogFormViewer.setProperty("userTimeZone", timeZoneSelector.currentTimeZone);
    }
    
    preparePredefinedTimeZone(TogFormViewer.getProperty("userTimeZone"));
}

function setupThemeConfiguration(storedTheme)
{
    if (typeof storedTheme === "undefined")
    {
        storedTheme = "";
    }
    
    TogFormViewer.setProperty("storedUserTheme", storedTheme);
    var userThemeFromRPO = checkForResolvedPropertyFromTheServer("userTheme");
    if (userThemeFromRPO && themesMap[userThemeFromRPO])
    {
        TogFormViewer.setProperty("userTheme", userThemeFromRPO);
    }
    else if (storedTheme && themesMap[storedTheme])
    {
        TogFormViewer.setProperty("userTheme", storedTheme);
    }
    else if (appConfiguration.bootswatchtheme && themesMap[appConfiguration.bootswatchtheme])
    {
        TogFormViewer.setProperty("userTheme", appConfiguration.bootswatchtheme);
    }
    else
    {
        resetThemeConfiguration();
        TogFormViewer.setProperty("userTheme", themeSelector.currentTheme);
    }
    
    preparePredefinedTheme(TogFormViewer.getProperty("userTheme"));
}

function outlookSettingsSuccessCallback(language, timeZone, userSettingsSetCallback)
{
    // We don't use stored language configuration when theme settings are switched off
    if (appConfiguration.languageSettings)
    {
        setupLanguageConfiguration(language);
    }
    else
    {
        setupLanguageConfiguration();
    }
    
    // We don't use stored time zone configuration when theme settings are switched off
    if (appConfiguration.timeZoneSettings)
    {
        setupTimeZoneConfiguration(timeZone);
    }
    else
    {
        setupTimeZoneConfiguration();
    }
        
    checkUserSettingsLoaded(userSettingsSetCallback);
}

function outlookSettingsErrorCallback(userSettingsSetCallback)
{
    setupLanguageConfiguration();
    setupTimeZoneConfiguration();    
    checkUserSettingsLoaded(userSettingsSetCallback);
}

function checkAdditionalApiCallPerformed()
{
    if (!isSignedInUser() || (userSettingsLoaded && additionalApiResponseReceived))
    {
        checkForLoadingCallback();
    }
}

/**
 * Executes script defined by form's custom property "loadingScript" or "loadedScript".
 * If the parameter isLoadingScript is true, the "loadingScript" will be used, otherwise "loadedScript" will be used.
 */
function executeLoadingOrLoadedScript(isLoadingScript)
{
    var propertyName = isLoadingScript ? "loadingScript" : "loadedScript";
    var lname = isLoadingScript ? "loading" : "loaded";
    if (formObj.hasOwnProperty("properties") && formObj.properties!=null && formObj.properties.hasOwnProperty(propertyName))
    {
        var lScript = formObj.properties[propertyName];
        executeScript(lname,lScript,null,true);
    }    
}

function executeScript(scriptName,script,togFormViewerEvent,log2console)
{
    try
    {
        if (log2console) console.log("Executing "+scriptName+" script:"+script);
        eval(script);
        if (togFormViewerEvent && togFormViewerEvent.controlProperties && togFormViewerEvent.controlProperties["set clean"] === "true")
        {
            TogFormViewer.FormioPlugIn.setProperty("dirty", false);
        }
    }
    catch (err)
    {
        var msg = "Error occurred when executing "+scriptName+" script:\n\n"+script;
        msg+="\n\nError name: "+err.name;
        msg+="\n\nError message: "+err.message;
        msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
        console.log(msg);
        alert(msg);                      
    }
}

/**
 * Checks the configuration to find out if we should perform an optional API call before we load the form.
 * If so performs the call and waits for a response. When the response is received uses returned data to
 * set up the APP. Otherwise just sets up the APP.
 */
function checkForLoadingCallback()
{
//    console.trace();
    // Executing loading script before we perform "Loading" action
    // E.g. the script could be something like: 
    // TogFormViewer.setProperty('appLauncher',false);TogFormViewer.setProperty('environment',false);TogFormViewer.FormioPlugIn.setProperty('formhelp','This is new form help');",    
    executeLoadingOrLoadedScript(true);
    if (!appConfiguration.home)
    {
        // We don't have the base URL for the API call so we don't perform a call
        appInfoObjFromServer = null;
        if (typeof formioForm !== 'undefined') {
            TogFormViewer.FormioPlugIn.destroy();
        }        
        setupApp();
        return;
    }

    
    var formChanged = appInfoObjFromServer!=null && appInfoObjFromServer.formChanged!=null && appInfoObjFromServer.formChanged;
    var callbackCount = appInfoObjFromServer!=null && appInfoObjFromServer.callbackCount!=null ? appInfoObjFromServer.callbackCount+1 : 1;
    // appInfoObjFromServer.callbackCount is set only inside handleServerResponseForLoadingAndOtherActions function
    var doLoadingCallback = appConfiguration.actionLoading && (appInfoObjFromServer==null || appInfoObjFromServer.callbackCount==null || callbackCount<4 && formChanged);
    
    formChanged = formChanged || callbackCount>1;
    // We found home URL and it is a base address for our call
    // Now we need to find a relative path    
    if (doLoadingCallback)
    {

        var url = appConfiguration.home + "/" + appConfiguration.actionLoading;
        performLoadingCallback(url,callbackCount);
    }
    else
    {
        appInfoObjFromServer = null;
        if (!formDestroyed && !formChanged) {
            formioForm.submission = {"data":appFormDataObj};
            setupPredefinedTheme();
            setInitialTimeZone();
            setupPredefinedLanguage();
            
            // We should show the form after new styles has been loaded to prevent FOUC
            showContentOnStyleApply(function()
            {
                MapPlugIn.reloadMap();
                configureChoicesOptions(formioForm);                
                hideSpinner();
            });
        } else {            
            if (typeof formioForm !== 'undefined') {
                TogFormViewer.FormioPlugIn.destroy();
            }
            setupApp();
        }
    }
}

function handlePlaceholders(placeholderStr,event) {
    // Replace placeholders in placeholderStr with available settings
    var placeholders = {"formname":formObj.name,"formversion":(formObj.hasOwnProperty("properties") && formObj.properties!=null ? formObj.properties["formversion"] : null),"eventid":event.id,"eventtype":event.type,"eventvalue":event.value,"eventcontrolid":event.controlId,"eventcontroltype":event.controlType};
    // Add all simple properties from the submission as possible placeholders
    for (var p in appFormDataObj) {
        //console.log("type of "+p+" is "+(typeof appConfiguration[p]));
        if (!placeholders.hasOwnProperty(p)) {
            var val = appFormDataObj[p];
            if (typeof val !== "object" && val!=null) {
                placeholders[p]=val.toString();  
            }
        }
    }
    // Add all simple properties from the form custom properties possible placeholders with prefix 'formproperties.'
    if (formObj.hasOwnProperty("properties") && formObj.properties!=null) {
        for (var p in formObj.properties) {
            if (!placeholders.hasOwnProperty("formproperties."+p)) {
                var val = formObj.properties[p];
                if (typeof val !== "object" && val!=null) {
                    placeholders["formproperties."+p]=val.toString();  
                }
            }
        }
    }

    for (let key in placeholders) {
        placeholderStr = placeholderStr.replace(/({([^}]+)})/g, function(i) {
            let key = i.replace(/{/, '').replace(/}/, '');
            if (!placeholders[key]) {
                return i;
            }

            return placeholders[key];
        });
    }
    return placeholderStr;
}

/**
 * Calls loading callback and set up the APP
 */
function performLoadingCallback(url,cnt)
{    
    var now = new Date();
    var event =
    {
        "id": TogFormViewer.uuidv4(),
        "type": "Loading",
        "when" : {
            "time": now.toISOString(),
            "timezoneOffset": now.getTimezoneOffset()
        },
        "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : null),
        "controlType": "form",
        "controlProperties": (formObj.properties ? formObj.properties : null),
        "value": null
    };

    // Replace placeholders in relative path with available settings
    url = handlePlaceholders(url,event);

    var payload = {"appInfo" : TogFormViewer.getAppInfo(event)};
    console.log('executing loading action for url '+url+', attempt number '+cnt);
    // TODO: Perform loading API call with the given callback
    if (typeof ADAL!== 'undefined' && ADAL || typeof MSAL!== 'undefined' && MSAL) {
        executeAjaxRequestWithAdalLogic(ADAL!=null ? ADAL.config.clientId : MSAL.clientId, executeAjaxRequest, url, payload, {"callbackCount":cnt,"event":event},onsuccess_loading,onfailure_loading,onfailure_loading);
    } else {
        //alert("It is not possible to perform loading because user is not logged-in!");
        //console.log("It is not possible to perform loading because user is not logged-in!");
        //setupApp();
        executeAjaxRequest(null, url, payload, {"callbackCount":cnt,"event":event},onsuccess_loading,onfailure_loading,onfailure_loading);
    }    
}

/**
 * This function is executed on successful call to Loading API. If form definition changed, it will call again Loading API...but Loading API can be called max 3 times.
 */
function onsuccess_loading(token,url,formdata,additionalConfiguration,data,textStatus,request) {
    var msgPart = "loading operation for url '"+url+"', attempt number "+additionalConfiguration.callbackCount;
    console.log("Successfully executed "+msgPart+".");
    additionalConfiguration.isLoading = true;
    handleServerResponseForLoadingAndOtherActions(url,additionalConfiguration,data);
}

function handleServerResponseForLoadingAndOtherActions(url,additionalConfiguration,data,actionSuccessScript) {   
   appInfoObjFromServer = null;
   if (data) {
       appInfoObjFromServer = data.appInfo;
       
       // Extended data sent from server which are not part of the submission data
       // Can be used within forms and custom scripts as project specific data model
       // The extended data will not be sent back to the server with next API call
       if (data.extendedData)
       {
           TogFormViewer.extendedServerData = data.extendedData;
       }
   }
   
   if (appInfoObjFromServer!=null) {
       var resolvedPropertiesObjFromServer = appInfoObjFromServer.resolvedProperties;
       if (resolvedPropertiesObjFromServer==null) {
           resolvedPropertiesObjFromServer = {};
       }
       
       if (additionalConfiguration.event.type=='search' || additionalConfiguration.event.type=='showDropdown') {
          if (appInfoObjFromServer.eventResponse) {
             console.log('setting select component '+additionalConfiguration.event.controlId+' vals to '+JSON.stringify(appInfoObjFromServer.eventResponse));
             formioForm.getComponent(additionalConfiguration.event.controlId).component.data.values = appInfoObjFromServer.eventResponse;
             formioForm.getComponent(additionalConfiguration.event.controlId).triggerUpdate();            
          }
       }
       
       // keeping sub-object of appInfo object from the server that do not exist in the appInfo specification...to be in appInfo object every-time we call TogFormViewer.getAppInfo()
       for (var p in appInfoObjFromServer) {
           if (p!='plugin' && p!='browserInfo' && p!='deviceInfo' && p!='currentUser' && p!='appUrl' && p!='currentUserSettings' && p!='runtimeProperties' && p!='auth' && p!='config' && p!='queries' && p!='dataObj' && p!='resolvedProperties' && p!='event' && p!='eventResponse' && p!='additionalApiCallResult') {
              TogFormViewer.additionalAppInfoData[p] = appInfoObjFromServer[p];
           }
       }
       
       
       // if server decided that the user should go offline, set ADAL and MSAL to null
       if (resolvedPropertiesObjFromServer.onlinemode!=null && !resolvedPropertiesObjFromServer.onlinemode) {
          ADAL = null;
          MSAL = null;
       }
       appInfoObjFromServer.callbackCount = additionalConfiguration!=null && additionalConfiguration.callbackCount!=null ? additionalConfiguration.callbackCount : 0;
       
       // Update read/write runtime properties
       if (appInfoObjFromServer.runtimeProperties) {
          if (appInfoObjFromServer.runtimeProperties.hasOwnProperty("dirty")
              && typeof appInfoObjFromServer.runtimeProperties.dirty === "boolean"
          && TogFormViewer.dirty !== appInfoObjFromServer.runtimeProperties.dirty) {
             TogFormViewer.FormioPlugIn.setProperty("dirty", appInfoObjFromServer.runtimeProperties.dirty);
          }
       }
       
       //console.log('DATA received ='+JSON.stringify(data));
       var appDefChanged = resolvedPropertiesObjFromServer.appDefPath!=null && appConfiguration.appDefPath!=resolvedPropertiesObjFromServer.appDefPath;
       var formChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.formObj!=null && JSON.stringify(formObj)!==JSON.stringify(appInfoObjFromServer.config.formObj);
       var formPathChanged = resolvedPropertiesObjFromServer.formDefPath!=null && appConfiguration.formDefPath!=resolvedPropertiesObjFromServer.formDefPath;
       formChanged = formChanged || formPathChanged;
       var brandChanged = resolvedPropertiesObjFromServer.brandDefPath!=null && appConfiguration.brandDefPath!=resolvedPropertiesObjFromServer.brandDefPath;
       var customizationChanged = resolvedPropertiesObjFromServer.customizationDefPath!=null && appConfiguration.customizationDefPath!=resolvedPropertiesObjFromServer.customizationDefPath;
       var headerChanged = resolvedPropertiesObjFromServer.headerConfPath!=null && appConfiguration.headerConfPath!=resolvedPropertiesObjFromServer.headerConfPath;
       //var themesChanged = appInfoObjFromServer.themesObj!=null && JSON.stringify(themesObj)!==JSON.stringify(appInfoObjFromServer.themesObj);
       var themesPathChanged = resolvedPropertiesObjFromServer.themes!=null && appConfiguration.themes!=resolvedPropertiesObjFromServer.themes;
       var themesChanged = /*themesChanged ||*/ themesPathChanged;
       var userLangsChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.userLangsObj!=null && JSON.stringify(userLangsObj)!==JSON.stringify(appInfoObjFromServer.config.userLangsObj);
       var userLangsPathChanged = resolvedPropertiesObjFromServer.userlangs!=null && appConfiguration.userlangs!=resolvedPropertiesObjFromServer.userlangs;
       userLangsChanged = userLangsChanged || userLangsPathChanged;
       //var timeZonesChanged = appInfoObjFromServer.timeZonesArr!=null && JSON.stringify(timeZonesArr)!==JSON.stringify(appInfoObjFromServer.timeZonesArr);
       var timeZonesPathChanged = resolvedPropertiesObjFromServer.timezones!=null && appConfiguration.timezones!=resolvedPropertiesObjFromServer.timezones;
       var timeZonesChanged = /*timeZonesChanged ||*/ timeZonesPathChanged;
       var customScriptChanged = resolvedPropertiesObjFromServer.customScript!=null && appConfiguration.customScript!=resolvedPropertiesObjFromServer.customScript;
       var customCssChanged = resolvedPropertiesObjFromServer.customCss!=null && appConfiguration.customCss!=resolvedPropertiesObjFromServer.customCss;
       var menusChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.menusObj!=null && JSON.stringify(menusObj)!==JSON.stringify(appInfoObjFromServer.config.menusObj);
       var menusPathChanged = resolvedPropertiesObjFromServer.menusPath!=null && appConfiguration.menusPath!=resolvedPropertiesObjFromServer.menusPath;
       menusChanged = menusChanged || menusPathChanged;
       var langMenusTopChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.langTopMenusObj!=null && JSON.stringify(langTopMenusObj)!==JSON.stringify(appInfoObjFromServer.config.langTopMenusObj);
       var langMenusTopPathChanged = resolvedPropertiesObjFromServer.langMenusTopPath!=null && appConfiguration.langMenusTopPath!=resolvedPropertiesObjFromServer.langMenusTopPath;
       langMenusTopChanged = langMenusTopChanged || langMenusTopPathChanged;
       var langMenusLeftChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.langLeftMenusObj!=null && JSON.stringify(langLeftMenusObj)!==JSON.stringify(appInfoObjFromServer.config.langLeftMenusObj);
       var langMenusLeftPathChanged = resolvedPropertiesObjFromServer.langMenusLeftPath!=null && appConfiguration.langMenusLeftPath!=resolvedPropertiesObjFromServer.langMenusLeftPath;
       langMenusLeftChanged = langMenusLeftChanged || langMenusLeftPathChanged;
       var langMenusBottomChanged = appInfoObjFromServer.config!=null && appInfoObjFromServer.config.langBottomMenusObj!=null && JSON.stringify(langBottomMenusObj)!==JSON.stringify(appInfoObjFromServer.config.langBottomMenusObj);
       var langMenusBottomPathChanged = resolvedPropertiesObjFromServer.langMenusBottomPath!=null && appConfiguration.langMenusBottomPath!=resolvedPropertiesObjFromServer.langMenusBottomPath;
       langMenusBottomChanged = langMenusBottomChanged || langMenusBottomPathChanged;
       var formTranslationChanged = resolvedPropertiesObjFromServer.formTranslation!=null && appConfiguration.formTranslation!=resolvedPropertiesObjFromServer.formTranslation;
              
       appInfoObjFromServer.formChanged = formChanged;
       
       appFormDataObj = appInfoObjFromServer.dataObj == null ? appFormDataObj : appInfoObjFromServer.dataObj;
       //console.log('form DATA merged ='+JSON.stringify(appFormDataObj));
       //console.log('configuration DATA merged ='+JSON.stringify(appConfiguration));
       
       appInfoObjFromServer.validBrandObj = brandObj;
       appInfoObjFromServer.validCustomizationObj = customizationObj;
       appInfoObjFromServer.validHeaderObj = headerObj;
       var hasChanges = false;
       if (!appDefChanged) {
          resolvedPropertiesObjFromServer.appDefPath = appConfiguration.appDefPath;
       }
       if (!formPathChanged) {
          resolvedPropertiesObjFromServer.formDefPath = appConfiguration.formDefPath; 
       }
       if (!brandChanged) {
           resolvedPropertiesObjFromServer.brandDefPath = appConfiguration.brandDefPath; 
       }
       if (!customizationChanged) {
           resolvedPropertiesObjFromServer.customizationDefPath = appConfiguration.customizationDefPath;
       }
       if (!headerChanged) {
           resolvedPropertiesObjFromServer.headerConfPath = appConfiguration.headerConfPath; 
       }
       if (!themesPathChanged) {
           resolvedPropertiesObjFromServer.themes = appConfiguration.themes; 
       }
       if (!userLangsPathChanged) {
           resolvedPropertiesObjFromServer.userlangs = appConfiguration.userlangs; 
       }
       if (!timeZonesPathChanged) {
           resolvedPropertiesObjFromServer.timezones = appConfiguration.timezones; 
       }
       if (!menusPathChanged) {
           resolvedPropertiesObjFromServer.menusPath = appConfiguration.menusPath;
       }
       if (!langMenusTopChanged) {
           resolvedPropertiesObjFromServer.langMenusTopPath = appConfiguration.langMenusTopPath;
       }
       if (!langMenusLeftChanged) {
           resolvedPropertiesObjFromServer.langMenusLeftPath = appConfiguration.langMenusLeftPath;
       }
       if (!langMenusBottomChanged) {
           resolvedPropertiesObjFromServer.langMenusBottomPath = appConfiguration.langMenusBottomPath;
       }
       if (!formTranslationChanged) {
           resolvedPropertiesObjFromServer.formTranslation = appConfiguration.formTranslation;
       }
       
       if (appDefChanged || formChanged) {
          hasChanges = true;
          if (appDefChanged) {
            appObj = null;
          }
          headerObj = null;
          appInfoObjFromServer.validHeaderObj = null;
          customizationObj = null;
          appInfoObjFromServer.validCustomizationObj = null;
          brandObj = null;
          appInfoObjFromServer.validBrandObj = null;
          formDestroyed = true;
          formObj = null;
          themesObj = null;
          userLangsObj = null;
          timeZonesArr = null;
          menusObj = null;
          langTopMenusObj = null;
          langBottomMenusObj = null;
          tranFormObj = null;
          themeLoadStarted = false;
          languageLoadStarted = false;
          timeZonesLoadStarted = false;
          customScriptLoadStarted = false;
          customCssLoadStarted = false;
          customScriptLoadedFlag = false;
          customCssLoadedFlag = false;
          menusLoadStarted = false;
          langTopMenusLoadStarted = false;
          langBottomMenusLoadStarted = false;
          formTranslationLoadStarted = false;
       }
       if (brandChanged) {
          hasChanges = true;
          brandObj = null;
          appInfoObjFromServer.validBrandObj = null;
       }
       if (customizationChanged) {
          hasChanges = true;
          customizationObj = null;
          appInfoObjFromServer.validCustomizationObj = null;
       }
       if (headerChanged) {
          hasChanges = true;
          headerObj = null;
          appInfoObjFromServer.validHeaderObj = null;
          themesObj = null;
          userLangsObj = null;
          timeZonesArr = null;
          menusObj = null;
          langTopMenusObj = null;
          langBottomMenusObj = null;
          tranFormObj = null;
          themeLoadStarted = false;
          languageLoadStarted = false;
          timeZonesLoadStarted = false;
          menusLoadStarted = false;
          langTopMenusLoadStarted = false;
          langBottomMenusLoadStarted = false;
          formTranslationLoadStarted = false;
       }
       if (themesChanged) {
          hasChanges = true;
          themesObj = null;
          themeLoadStarted = false;
       }
       if (userLangsChanged) {
          hasChanges = true;
          userLangsObj = null;
          languageLoadStarted = false;
       }
       if (timeZonesChanged) {
          hasChanges = true;
          timeZonesArr = null;
          timeZonesLoadStarted = false;
       }
       if (customScriptChanged) {
          hasChanges = true;
          customScriptLoadStarted = false;
          customScriptLoadedFlag = false;
       }
       if (customCssChanged) {
          hasChanges = true;
          customCssLoadStarted = false;
          customCssLoadedFlag = false;
       }
       if (menusChanged) {
          hasChanges = true;
          menusObj = null;
          menusLoadStarted = false;
       }
       if (langMenusTopChanged) {
          hasChanges = true;
          langTopMenusObj = null;
          langTopMenusLoadStarted = false;
       }
       if (langMenusLeftChanged) {
          hasChanges = true;
          langLeftMenusObj = null;
          langLeftMenusLoadStarted = false;
       }
       if (langMenusBottomChanged) {
          hasChanges = true;
          langBottomMenusObj = null;
          langBottomMenusLoadStarted = false;
       }
       if (formTranslationChanged) {
          hasChanges = true;
          tranFormObj = null;
          formTranslationLoadStarted = false;
       }
       if (!hasChanges) {
           // checking for changes in resolvedProperties from the server compared to the ones we sent
           for (var p in appConfiguration) {
               //console.log("type of "+p+" is "+(typeof appConfiguration[p]));
               if (resolvedPropertiesObjFromServer.hasOwnProperty(p)) {                  
                  if (typeof appConfiguration[p] == "object") {
                    if (JSON.stringify(appConfiguration[p])!==JSON.stringify(resolvedPropertiesObjFromServer[p])) {
                      hasChanges = true;
                      console.log('There were changes in resolved property '+p+' from the server that require re-configuration process, oldValue='+JSON.stringify(appConfiguration[p])+', newValue='+JSON.stringify(resolvedPropertiesObjFromServer[p]));
                      break;
                    }                          
                  } else {
                      if (appConfiguration[p]!==resolvedPropertiesObjFromServer[p] && p!=='formname') {
                          hasChanges = true;
                          console.log('There were changes in resolved property '+p+' from the server that require re-configuration process, oldValue='+appConfiguration[p]+', newValue='+resolvedPropertiesObjFromServer[p]);
                          break;
                      }
                  }
               }
           }
           
           if (!hasChanges) {
               if (resolvedPropertiesObjFromServer.hasOwnProperty("userLanguage") && TogFormViewer.getProperty("userLanguage") !== resolvedPropertiesObjFromServer["userLanguage"]) {
                   hasChanges = true;
                   console.log('There was a change in user language from the server that require re-configuration process, oldValue='
                       + TogFormViewer.getProperty("userLanguage") + ', newValue=' + resolvedPropertiesObjFromServer["userLanguage"]);
               } else if (resolvedPropertiesObjFromServer.hasOwnProperty("userTheme") && TogFormViewer.getProperty("userTheme") !== resolvedPropertiesObjFromServer["userTheme"]) {
                   hasChanges = true;
                   console.log('There was a change in user theme from the server that require re-configuration process, oldValue='
                       + TogFormViewer.getProperty("userTheme") + ', newValue=' + resolvedPropertiesObjFromServer["userTheme"]);
               } else if (resolvedPropertiesObjFromServer.hasOwnProperty("userTimeZone") && TogFormViewer.getProperty("userTimeZone") !== resolvedPropertiesObjFromServer["userTimeZone"]) {
                   hasChanges = true;
                   console.log('There was a change in user time zone from the server that require re-configuration process, oldValue='
                       + TogFormViewer.getProperty("userTimeZone") + ', newValue=' + resolvedPropertiesObjFromServer["userTimeZone"]);
               } 
               /*else if (resolvedPropertiesObjFromServer.hasOwnProperty("userTimeZones") && JSON.stringify(TogFormViewer.getProperty("userTimeZones")) !== JSON.stringify(resolvedPropertiesObjFromServer["userTimeZones"])) {
                   hasChanges = true;
                   console.log('There was a change in user time zone from the server that require re-configuration process');
               }*/
           }
       } else {
           console.log('There were changes in configuration or definition objects on the server that require re-configuration process');
       }
       
       if (hasChanges) {
          brandObj = null;
          customizationObj = null;
          headerObj = null;
          beginConfigurationProcess();
          return;
       }
   } 
   console.log('There were no changes on the server that require re-configuration process');
   // we'll come to this point either if appInfoObjFromServer is null or there were no changes on the server that require re-configuration
   appInfoObjFromServer = null;
   if (!formDestroyed) {
      formioForm.setSubmission({"data":appFormDataObj}).then(function () {
          if (actionSuccessScript) {
              executeScript(additionalConfiguration.event.controlId +"-actionSuccessScript",actionSuccessScript,additionalConfiguration.event,true);
          }
          hideSpinner();
      });
   } else {            
      setupApp();
   }
}

function onfailure_loading(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
   setupApp();
}

/**
 * Updates form definition and optionally populates it with the data
 */
function updateFormDefinition(formPath,data)
{
    // First show the spinner
    showSpinner();
    
    var absolutePath = formPath;
    if (!(formPath.startsWith && (formPath.startsWith("http://") || formPath.startsWith("https://")))
        && !(formPath.indexOf && (formPath.indexOf("http://") === 0 || formPath.indexOf("https://") === 0)))
    {
        absolutePath = appConfiguration.formDefPath = "../forms/" + formPath + "/form.json.js";
    }

    // here we  set appFormDataObj to the provided JSON data if exists...the form will be initially populated with that data 
    if (data) {
        appFormDataObj = data;
    } else {
        resetFormData();
    }
    
    // This is a hack - using the same logic as when we are getting updated appInfo from server
    appInfoObjFromServer = {
        "resolvedProperties" : {
            "formDefPath" : absolutePath
        }
    };
    
    TogFormViewer.FormioPlugIn.destroy();
    formObj = null;
    headerObj = null;
    customizationObj = null;
    brandObj = null;
    themesObj = null;
    userLangsObj = null;
    timeZonesArr = null;
    menusObj = null;
    langTopMenusObj = null;
    langLeftMenusObj = null;
    langBottomMenusObj = null;
    tranFormObj = null;
    themeLoadStarted = false;
    languageLoadStarted = false;
    timeZonesLoadStarted = false;    
    customScriptLoadStarted = false;
    customCssLoadStarted = false;
    customScriptLoadedFlag = false;
    customCssLoadedFlag = false;
    menusLoadStarted = false;
    langTopMenusLoadStarted = false;
    langLeftMenusLoadStarted = false;
    langBottomMenusLoadStarted = false;
    formTranslationLoadStarted = false;

    beginConfigurationProcess();
}

/**
 * Updating the form definition when we change display property.
 */
function reloadFormDefinition()
{
    showSpinner();
    window.formSubmissionData = formioForm.submission;
    
    // Update the form
    TogFormViewer.FormioPlugIn.destroy();
    setupAppForUpdatedForm();
}

/**
 * Initializing the form when we change display property.
 */
function setupAppForUpdatedForm() 
{
    generateForm(showFormWithUnchagedData);
}

function hideSpinner() {
    $('.header-border').show();
    $('.content-wrapper').show();
    $('#menuWrapper, #primaryDiv, .back-div, #submenu').show();
    $('.overlay').hide();
}

function showSpinner() {
    $('.header-border').hide();
    $('.content-wrapper').hide();
    $('#menuWrapper, #primaryDiv, .back-div, #submenu').hide();
    $('.overlay').show();
}

var TogFormViewer =
{
    toggleMenuOpened: false,
    menuPosition: "top",
    testFlag: false,
    debugFlag: false,
    activeMenuKey: "",
    openidConfiguration: null,
    dirty: false,
    additionalAppInfoData: {},
    correlationId: null,
    lastCalculationTimestamp: null,
    lastCalculationResultTimestamp: null,
    queuedEventsAfterCalculation: [],
    additionalApiFunctionResponse: {},

    FormioPlugIn:
    {
        jumpWidth : 767,
        
        setProperty: function(propName, propValue)
        {
            if (_checkPropertyValue(propName, propValue, "form", "string"))
            {
                updateFormDefinition(propValue);
            }
            else if (propName === "display" && propValue !== appConfiguration.display && (propValue === "form" || propValue === "wizard")) 
            {
                appConfiguration.display = propValue;
                formObj["display"] = appConfiguration.display;
                reloadFormDefinition();
            }
            else if (_checkPropertyValue(propName, propValue, "formWidthPercent", "number")) 
            {
                appConfiguration.formWidthPercent = propValue;
                $('.body-content').width(propValue);
            }
			else if(_checkPropertyValue(propName, propValue, "displayBackgroundImage", "boolean"))
			{
				appConfiguration.displayBackgroundImage = propValue;
				if(propValue)
				{
					$(".background-image-left").css("display","inherit");
					$(".background-image-right").css("display","inherit");
				}
				else
				{
					$(".background-image-left").css("display","none");
					$(".background-image-right").css("display","none");
				}
			}
            else if(_checkPropertyValue(propName, propValue, "formhelp", "string"))
            {
                appConfiguration.formhelp = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "formtitle", "string"))
            {
                appConfiguration.formtitle = propValue;
                document.title = appConfiguration.formtitle;
            }
            else if(_checkPropertyValue(propName, propValue, "processtext", "string"))
            {
                appConfiguration.processtext = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "processlink", "string"))
            {
                appConfiguration.processlink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "processimagelink", "string"))
            {
                appConfiguration.processimagelink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearningtext", "string"))
            {
                appConfiguration.elearningtext = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearninglink", "string"))
            {
                appConfiguration.elearninglink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearningimagelink", "string"))
            {
                appConfiguration.elearningimagelink = propValue;
            }
            else if (_checkPropertyValue(propName, propValue, "choicesOptions", "object"))
            {
                appConfiguration.choicesOptions = propValue;
                configureChoicesOptions(formioForm);
            }
            else if (_checkPropertyValue(propName, propValue, "dirty", "boolean"))
            {
                TogFormViewer.dirty = propValue;
                if (typeof formioForm !== "undefined" && formioForm)
                {
                    formioForm.checkConditions();
                    formioForm.checkValidity();
                    var now = new Date();
                    var myevent =
                    {
                        "id": TogFormViewer.uuidv4(),
                        "type": "drity changed",
                        "when" : {
                            "time": now.toISOString(),
                            "timezoneOffset": now.getTimezoneOffset()
                        },
                        "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
                        "controlType": "form",
                        "controlProperties": (formObj.properties ? formObj.properties : null),
                        "value": null
                    };
                    execEventAction(null, myevent, 'action dirty changed', 'actionDirtyChanged', false);
                }
            }
        },
        
        getProperty: function(propName)
        {
            // Defines the window width (window.innerWidth) when the mobile layout gets triggered
            // (columns are placed one bellow the other instead of one next to the other). Hardcoded
            // in Bootstrap
            if (propName === "jumpWidth")
            {
                return this.jumpWidth;
            }
            else if (propName === "choicesOptions")
            {
                return appConfiguration.choicesOptions;
            }
            else if (propName === "dirty")
            {
                return TogFormViewer.dirty;
            }
        },
        
        /**
         * Sets new value to a submission property with a given key
         * @note This function sets component value regardles of if the component is in submission root or subobject at any level
         * @param componentKey API key of the component which value should be set
         * @param value New value of the component
         */
        setComponentValue: function(componentKey, value)
        {
            var submissionData = JSON.parse(JSON.stringify(formioForm.submission.data));
            TogFormViewer.Utils.setValueToProperty(componentKey, value, submissionData);
            return formioForm.setSubmission({"data": submissionData});
        },
        
        destroy: function() {
            if (typeof formioForm !== 'undefined' && formioForm) {
                formioForm.destroy();
                // here we have to de-register all the events, otherwise events would be fired multiple times
                formioForm.off('change');
                formioForm.off('render');
                formioForm.off('initialized');
                formioForm.off('submit');
                formioForm.off('customEvent');
                formioForm.off('componentError');
                formioForm.off('prevPage');
                formioForm.off('nextPage');
            }
            formDestroyed = true;
        }
    },
    
    Utils:
    {
        /**
         * Sets a value to a given property of a given object
         * @note Property can be in the object root or at any subobject level
         * @param propertyName Name of the property which should be changed
         * @param propertyValue New value of the property
         * @param obj Object whose property should be changed
         */
        setValueToProperty: function(propertyName, propertyValue, obj)
        {
            if (typeof obj === 'undefined' && !obj)
            {
                return;
            }
            
            var subObjs = [];
            for (var key in obj)
            {
                if (key === propertyName)
                {
                    obj[key] = propertyValue;
                    
                    return;
                }
                else if (typeof obj[key] === 'object')
                {
                    subObjs.push(obj[key]);
                }
            }
            
            for (var subObjIndex = 0; subObjIndex < subObjs.length; subObjIndex++)
            {
                setValueToProperty(propertyName, propertyValue, subObjs[subObjIndex]);
            }
        },
    // ----------------------------------- The following 5 functions are taken from ADAL library ------------------------------
        _isEmpty: function (str) {
            return (typeof str === 'undefined' || !str || 0 === str.length);
        },
        
        _extractIdToken: function (encodedIdToken) {
            // id token will be decoded to get the username
            var decodedToken = this._decodeJwt(encodedIdToken);
            if (!decodedToken) {
                return null;
            }

            try {
                var base64IdToken = decodedToken.JWSPayload;
                var base64Decoded = this._base64DecodeStringUrlSafe(base64IdToken);
                if (!base64Decoded) {
                    this.info('The returned id_token could not be base64 url safe decoded.');
                    return null;
                }

                // ECMA script has JSON built-in support
                return JSON.parse(base64Decoded);
            } catch (err) {
                this.error('The returned id_token could not be decoded', err);
            }

            return null;
        },
        
        _base64DecodeStringUrlSafe: function (base64IdToken) {
            // html5 should support atob function for decoding
            base64IdToken = base64IdToken.replace(/-/g, '+').replace(/_/g, '/');
            if (window.atob) {
                return decodeURIComponent(escape(window.atob(base64IdToken))); // jshint ignore:line
            }
            else {
                return decodeURIComponent(escape(this._decode(base64IdToken)));
            }
        },
        
        _decode: function (base64IdToken) {
            var codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            base64IdToken = String(base64IdToken).replace(/=+$/, '');

            var length = base64IdToken.length;
            if (length % 4 === 1) {
                throw new Error('The token to be decoded is not correctly encoded.');
            }

            var h1, h2, h3, h4, bits, c1, c2, c3, decoded = '';
            for (var i = 0; i < length; i += 4) {
                //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
                // then 6 bits per base64 encoded character
                h1 = codes.indexOf(base64IdToken.charAt(i));
                h2 = codes.indexOf(base64IdToken.charAt(i + 1));
                h3 = codes.indexOf(base64IdToken.charAt(i + 2));
                h4 = codes.indexOf(base64IdToken.charAt(i + 3));

                // For padding, if last two are '='
                if (i + 2 === length - 1) {
                    bits = h1 << 18 | h2 << 12 | h3 << 6;
                    c1 = bits >> 16 & 255;
                    c2 = bits >> 8 & 255;
                    decoded += String.fromCharCode(c1, c2);
                    break;
                }
                // if last one is '='
                else if (i + 1 === length - 1) {
                    bits = h1 << 18 | h2 << 12
                    c1 = bits >> 16 & 255;
                    decoded += String.fromCharCode(c1);
                    break;
                }

                bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                // then convert to 3 byte chars
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                c3 = bits & 255;

                decoded += String.fromCharCode(c1, c2, c3);
            }

            return decoded;
        }, 

        _decodeJwt: function (jwtToken) {
            if (this._isEmpty(jwtToken)) {
                return null;
            };

            var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;

            var matches = idTokenPartsRegex.exec(jwtToken);
            if (!matches || matches.length < 4) {
                console.log('The returned id_token is not parseable.');
                return null;
            }

            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };

            return crackedToken;
        },
        // ----------------------------------------------------------------------------------------        
        _getTenantNameFromIdentityProviderURL : function(identityProviderUrl) {
            try {
                var start = identityProviderUrl.indexOf("://")+3;
                var end = identityProviderUrl.indexOf(".");
                var tenantName = identityProviderUrl.substring(start,end);
                return tenantName;
            } catch (e) {
                return "unknown";
            }
        },
        _getTenantIdFromIdentityProviderURL : function(identityProviderUrl) {
            try {
                var start = identityProviderUrl.indexOf("://")+3;
                start = identityProviderUrl.indexOf("/",start+3)+1;
                var end = identityProviderUrl.indexOf("/",start);
                var tenantId = identityProviderUrl.substring(start,end);
                if (tenantId==='tfp') {
                    start = end+1;
                    end = identityProviderUrl.indexOf("/",start);
                    tenantId = identityProviderUrl.substring(start,end);
                }
                return tenantId;
            } catch (e) {
                return "unknown";
            }
        }
    },
    
    setProperty: function(propName, propValue)
    {
        if (_checkPropertyValue(propName, propValue, "appLauncher", "boolean")) 
        {
            appConfiguration.appLauncher = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "environment", "boolean")) 
        {
            appConfiguration.environment = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "notifications", "boolean")) 
        {
            appConfiguration.notifications = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "settings", "boolean")) 
        {
            appConfiguration.settings = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "help", "boolean")) 
        {
            appConfiguration.help = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "account", "boolean")) 
        {
            appConfiguration.account = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "bingMapsKey", "string"))
        {
            appConfiguration.bingMapsKey = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "maximizeBrowserWindow", "boolean")) 
        {
            appConfiguration.maximizeBrowserWindow = propValue;
            setMaximizeBrowserWindow();
        }
        else if (_checkPropertyValue(propName, propValue, "themeSettings", "boolean")) 
        {
            appConfiguration.themeSettings = propValue;
            showThemeSettings();
        }
        else if (_checkPropertyValue(propName, propValue, "languageSettings", "boolean"))
        {
            appConfiguration.languageSettings = propValue;
            showLTZSettings();
        }
        else if (_checkPropertyValue(propName, propValue, "timeZoneSettings", "boolean"))
        {
            appConfiguration.timeZoneSettings = propValue;
            showLTZSettings();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseApp", "boolean")) 
        {
            appConfiguration.phraseApp = propValue;
            showPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "test", "boolean")) 
        {
            appConfiguration.test = propValue;
            showTest();
            formioForm.triggerRedraw();
            TogFormViewer.calculate();
        }
        else if (_checkPropertyValue(propName, propValue, "debug", "boolean")) 
        {
            appConfiguration.debug = propValue;
            showDebug();
            formioForm.triggerRedraw();
            TogFormViewer.calculate();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppProjectId", "string")) 
        {
            appConfiguration.phraseAppProjectId = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppPrefix", "string")) 
        {
            appConfiguration.phraseAppPrefix = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppSuffix", "string")) 
        {
            appConfiguration.phraseAppSuffix = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "feedback", "boolean")) 
        {
            appConfiguration.feedback = propValue;
            showFeeedbackButton();
        }
        else if (_checkPropertyValue(propName, propValue, "feedbackurl", "string")) 
        {
            appConfiguration.feedbackurl = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "feedbackmethod", "string")) 
        {
            appConfiguration.feedbackmethod = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "feedbackUrlAbsolutePath", "string")) 
        {
            appConfiguration.feedbackUrlAbsolutePath = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "home", "string")) 
        {
            appConfiguration.home = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "mainlogopath", "string")) 
        {
            appConfiguration.mainlogopath = propValue;
            $("#mainLogo").find("img").attr("src", appConfiguration.mainlogopath);
            if (!appConfiguration.mainlogopath)
            {
                $(".logo-background").css("width", "0");
            }
            else
            {
                $(".logo-background").css("width", "auto");
            }
        }
        else if (_checkPropertyValue(propName, propValue, "sidelogopath", "string")) 
        {
            appConfiguration.sidelogopath = propValue;
            setSideLogoPath();
        }
        else if (_checkPropertyValue(propName, propValue, "faviconpath", "string")) 
        {
            appConfiguration.faviconpath = propValue;
            setFaviconElement();
        }
        else if (_checkPropertyValue(propName, propValue, "customizationlogopath", "string")) 
        {
            appConfiguration.customizationlogopath = propValue;
            setCustomizationLogo();
        }
        else if (_checkPropertyValue(propName, propValue, "bootswatchtheme", "string")) 
        {
            if (themesMap.hasOwnProperty(propValue))
            {
                appConfiguration.bootswatchtheme = propValue;
                updateBootswatchthemeTheme(propValue);
            }
        }
        else if (_checkPropertyValue(propName, propValue, "themesObj", "object")) 
        {
            checkExistenceOfCurrentTheme(propValue);
            themesObj = propValue;
            setThemesConfiguration();
            resetThemeMenu();
            setupThemeMenu();                       
        }
        // TODO Add check for mapWrapperId and mapRouteInfoWrapperId
        else if (_checkPropertyValue(propName, propValue, "mapCountryName", "string"))
        {
            appConfiguration.mapCountryName = propValue;
            MapPlugIn.updateMap();
        }
        else if (propName === "mapZoom" && propValue != appConfiguration.mapZoom && propValue && !isNaN(propValue))
        {
            appConfiguration.mapZoom = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpin", "boolean"))
        {
            appConfiguration.mapCenterPushpin = propValue;
            MapPlugIn.updateMap();
        }
		else if (_checkPropertyValue(propName, propValue, "mapClusterPins", "boolean"))
        {
            appConfiguration.mapClusterPins = propValue;
			MapPlugIn.updateClustering();
        }
		else if (_checkPropertyValue(propName, propValue, "mapGridSize", "number")) 
        {
				if (clusterLayer)
				{
					appConfiguration.mapGridSize = propValue;
					clusterLayer.setOptions({gridSize: Number(propValue)});
				}
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinTitle", "string"))
        {
            appConfiguration.mapCenterPushpinTitle = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinSubTitle", "string"))
        {
            appConfiguration.mapCenterPushpinSubTitle = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinDescription", "string"))
        {
            appConfiguration.mapCenterPushpinDescription = propValue;
            MapPlugIn.updateMap();
        }
        else if (propName === "activeMenuKey" && propValue != this.activeMenuKey && typeof propValue === "string")
        {
            this.activeMenuKey = propValue;
            configureMenu();
        }
        else if (propName === "menuPosition" && propValue != TogFormViewer.menuPosition && typeof propValue === "string")
        {
            this.menuPosition = propValue;
            updateMenu();
        }
        else if (propName === "storedUserTheme")
        {
            this.storedUserTheme = propValue;
        }
        else if (propName === "userTheme")
        {
            this.userTheme = propValue;
        }
        else if (propName === "storedUserLanguage")
        {
            this.storedUserLanguage = propValue;
        }
        else if (propName === "userLanguage")
        {
            this.userLanguage = propValue;
        }
        else if (propName === "storedUserTimeZone")
        {
            this.storedUserTimeZone = propValue;
        }
        else if (propName === "userTimeZone")
        {
            this.userTimeZone = propValue;
        }
        else if (propName === "supportedTimeZones")
        {
            this.supportedTimeZones = propValue;
        }
        else if (propName === "userTimeZones")
        {
            this.userTimeZones = propValue;
        }
    },
    
    getProperty: function(propName)
    {
        if (propName === "storedUserTheme")
        {
            if (this.storedUserTheme)
            {
                return this.storedUserTheme;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "userTheme")
        {
            if (this.userTheme)
            {
                return this.userTheme;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "storedUserLanguage")
        {
            if (this.storedUserLanguage)
            {
                return this.storedUserLanguage;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "userLanguage")
        {
            if (this.userLanguage)
            {
                return this.userLanguage;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "storedUserTimeZone")
        {
            if (this.storedUserTimeZone)
            {
                return this.storedUserTimeZone;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "userTimeZone")
        {
            if (this.userTimeZone)
            {
                return this.userTimeZone;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "supportedTimeZones")
        {
            if (this.supportedTimeZones)
            {
                return this.supportedTimeZones;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "userTimeZones")
        {
            if (this.userTimeZones)
            {
                return this.userTimeZones;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "activeMenuKey")
        {
            if (this.activeMenuKey)
            {
                return this.activeMenuKey;
            }
            else
            {
                return "";
            }
        }
        else if (propName === "menuPosition")
        {
            return this.menuPosition;
        }
    },

    getAppInfo: function(event,sendForm)
    {
        var appInfo = {
            "plugin" : {
                "name" : "form.io"
            },
            "browserInfo" : {
                "navigator.appName" : navigator.appName,
                "navigator.appVersion" : navigator.appVersion,
                "navigator.userAgent" : navigator.userAgent,
                "navigator.language" : navigator.language,
                "navigator.platform" : navigator.platform,
                "navigator.product" : navigator.product,
                "navigator.appCodeName" : navigator.appCodeName,
                "navigator.cookieEnabled" : navigator.cookieEnabled
            },
            "deviceInfo" : {
            },
            "currentUser" : currentUser,
            "appUrl" : {
                "protocol" : window.location.protocol.substring(0,window.location.protocol.length-1),
                "host" : window.location.hostname,
                "path" : window.location.pathname.substring(1),
                "url" : window.location.protocol+"//"+window.location.hostname+window.location.pathname
            },
            "currentUserSettings": {
                "theme": this.getProperty("storedUserTheme"),
                "language": this.getProperty("storedUserLanguage"),
                "timeZone": this.getProperty("storedUserTimeZone"),
                //"supportedTimeZones": this.getProperty("supportedTimeZones")
            },
            "runtimeProperties" : {
                "tenantId" : (typeof ADAL=== 'undefined' || ADAL==null ? ((typeof MSAL=== 'undefined' || MSAL==null ? "" : (isAAD() ? MSAL.getUser().idToken.tid : TogFormViewer.Utils._getTenantIdFromIdentityProviderURL(MSAL.getUser().identityProvider)))) : ADAL.config.tenant),
                "appRegAppId" : (typeof ADAL=== 'undefined' || ADAL==null ? ((typeof MSAL=== 'undefined' || MSAL==null ? "" : MSAL.clientId)) : ADAL.config.clientId),
                "jumpWidth" : this.FormioPlugIn.jumpWidth,
                "toggleMenuOpened" : this.toggleMenuOpened,
                "menuPosition": this.menuPosition,
                "testFlag" : this.testFlag,
                "debugFlag" : this.debugFlag,
                "activeMenuKey" : this.activeMenuKey,
                "browserInfo" : {
                    "width" : $(window).width(),
                    "height" : $(window).height()
                },
                "dirty": this.dirty,
                "correlationId": TogFormViewer.correlationId
            },
            "auth" : {
                "IDToken" : _getJWTInfo(),
                "IDTokenEncoded" : (typeof ADAL=== 'undefined' || ADAL==null ? ((typeof MSAL=== 'undefined' || MSAL==null ? null : MSAL._cacheStorage.getItem("msal.idtoken"))) : ADAL._getItem(ADAL.CONSTANTS.STORAGE.IDTOKEN)),
                "openid-configuration": TogFormViewer.openidConfiguration
            },
            "config" : {
                "appObj" : appObj,
                "headerObj" : headerObj,
                "customizationObj" : customizationObj,
                "brandObj" : brandObj,
                "userLangsObj" : typeof userLangsObj === 'undefined' ? '' : userLangsObj,
                //"timeZonesArr" : typeof timeZonesArr === 'undefined' ? '' : timeZonesArr,
                //"themesObj" : typeof themesObj === 'undefined' ? '' : themesObj,
                "menusObj" : typeof menusObj === 'undefined' ? '' : menusObj,
                "langTopMenusObj" : typeof langTopMenusObj === 'undefined' ? '' : langTopMenusObj,
                "langBottomMenusObj" : typeof langBottomMenusObj === 'undefined' ? '' : langBottomMenusObj
            },
            "queries" : appURLQueryParameters,
            "dataObj" : typeof window.formioForm !== 'undefined' && window.formioForm!=null ? formioForm.submission.data : appFormDataObj,
            "resolvedProperties" : JSON.parse(JSON.stringify(appConfiguration)),
        };
        
        appInfo.resolvedProperties.userTheme = this.getProperty("userTheme");
        appInfo.resolvedProperties.userLanguage = this.getProperty("userLanguage");
        appInfo.resolvedProperties.userTimeZone = this.getProperty("userTimeZone");
        //appInfo.resolvedProperties.userTimeZones = this.getProperty("userTimeZones");
        
        if (event) {
            appInfo.event = event;
        }
        
        if (arguments.length == 2)
        {
            if (sendForm) {
                appInfo.config.formObj = formObj;
            } 
        } else {
            if (appConfiguration.sendForm) {
                appInfo.config.formObj = formObj;
            }
        }
        
        for (var p in TogFormViewer.additionalAppInfoData) {
           console.log("handling additional property for appInfo:"+p);
           appInfo[p]=TogFormViewer.additionalAppInfoData[p];
        }
        
        if (appConfiguration.additionalApiFunctionResource && appConfiguration.additionalApiFunctionUrl) {
            appInfo["additionalApiCallResult"] = typeof this.additionalApiFunctionResponse === 'undefined' ? '' : this.additionalApiFunctionResponse; 
        }
        
        return appInfo;
    },
    
    loadForm: function(formPath, data)
    {
        updateFormDefinition(formPath,data);
    },
    
    queueEventAfterCalculation: function(eventHandler)
    {
        if (TogFormViewer.lastCalculationTimestamp != null && TogFormViewer.lastCalculationTimestamp === TogFormViewer.lastCalculationResultTimestamp)
        {
            eventHandler();
        }
        else
        {
            TogFormViewer.queuedEventsAfterCalculation.push(eventHandler);
        }
    },
    
    executeQueuedEventsAfterCalculation: function()
    {
        for (var i = 0; i < TogFormViewer.queuedEventsAfterCalculation.length; i++)
        {
            TogFormViewer.queuedEventsAfterCalculation[i]();
        }
        
        TogFormViewer.queuedEventsAfterCalculation = [];
    },
    
    calculate: function(calcPath)
    {
        if (arguments.length == 1)
        {
            _calculate(calcPath);
        }
        else
        {
            performCalculation();
        }
    },
   
    openFile: function(filePath,target)
    {
        if (!target) {
            target = "_blank";
        }
        window.open(filePath,target);
    },
    
    openFileNewWindow: function(filePath, target)
    {
        if (!target)
        {
            target = "_blank";
        }
        
        var whStr = "height=" + window.innerHeight + ",width=" + window.innerWidth;
        window.open(filePath, target, whStr);
    },
    
    downloadFile: function(filePath,filename)
    {
        downloadURI(filePath,filename);
    },
    
    loadData: function(filePath)
    {
        _loadData(filePath);
    },

    showData: function(target)
    {
        if (!target) {
            target = "_blank";
        }
        var showDataWindow = window.open("",target);
        var data2show = JSON.stringify(formioForm.submission.data, null, 2);
        _showData(showDataWindow,data2show,"Form submission data - JSON");
    },
    
    showDataXML: function(xslPrePathOrURL,target)
    {
        if (!target) {
            target = "_blank";
        }
        var showDataWindow = window.open("",target);
        var xmlDoc = _convertJSON2XML("data", null, formioForm.submission.data, null, null);
        if (xslPrePathOrURL) {
            doXSLTAndShowData(xmlDoc,xslPrePathOrURL,showDataWindow);
        } else {
            _showData(showDataWindow,formatXml(new XMLSerializer().serializeToString(xmlDoc)),"Form submission data - XML (plain)");
        }
    },

    showDataFO2HTML: function(xslPrePathOrURL,xslFOPathOrUrl,target)
    {
        if (!target) {
            target = "_blank";
        }
        var showDataWindow = window.open("",target);
        var xmlDoc = _convertJSON2XML("data", null, formioForm.submission.data, null, null);
        doFO2HTMLAndShowData(xmlDoc,xslPrePathOrURL,xslFOPathOrUrl,showDataWindow);
    },
    
    showDataHTML: function(pathToHTML,data,target)
    {
        if (!target) {
            target = "_blank";
        }
        if (!data) {
            data = {};
        }
        window.showDataHTMLWindow = window.open(pathToHTML,target);
        window.showDataHTMLData = data;
    },

    // This function should be called from custom button action. It will post appInfo object to the specified URL
    // If the response changes some of the appInfo data, the re-evaluation of the properties will start (like with Loading action)
    executeCustomAction: function(url,sendForm,actionHttpMethod,waitCalculation)
    {
        var now = new Date();
        var myevent = {
            "id": TogFormViewer.uuidv4(),
            "type": "customAction",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": null,
            "controlType": "button",
            "value": null
        };
        performEventOrCustomAction(url,myevent,sendForm,waitCalculation,actionHttpMethod);
    },
    
    uuidv4: function () {  
        var uuid = null;
        var msg = null;
        if (typeof (crypto)!= 'undefined') {
            msg = "Generated UUIDV4 with crypto is ";
            uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function(c){ return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);});
        } else if (typeof (msCrypto)!= 'undefined') {            
            msg = "Generated UUIDV4 with msCrypto is ";
            uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function(c){ return (c ^ msCrypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);});
        } else {
            msg = "Generated UUIDV4 without crypto/msCrypto is ";
            uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        //console.log(msg+"'"+uuid+"'");
        return uuid;
    }        
}

// This listener is triggered when the child window (opened with showDataHTML function) posts message to our application window
// Then we know the child window (form) is loaded, and then we post the JSON (parameter to showDataHTML function) to the
// child window, and child window populates the form with that data
window.addEventListener("message", function(event) {
    if (window.showDataHTMLWindow && window.showDataHTMLData) {
        console.log('posting message to child "showDataHTMLWindow" window: '+JSON.stringify(window.showDataHTMLData));
        showDataHTMLWindow.postMessage(window.showDataHTMLData,"*");
        window.showDataHTMLWindow = null;
        window.showDataHTMLData = null;
    }
});


function _showData(showDataWindow,data2show,title) { 
    showDataWindow.document.open();
    showDataWindow.document.write('<html><body><h1><u>'+title+'</u></h1><pre>' + jQuery('<div/>').text(data2show).html() + '</pre></body></html>');
    showDataWindow.document.close(); 
    showDataWindow.document.title=title;
    showDataWindow.focus();
}

function _showDataHTML(showDataWindow,htmlData2show,title) {    
    showDataWindow.document.open();
    showDataWindow.document.write(htmlData2show);
    showDataWindow.document.close(); 
    showDataWindow.document.title=title;
    showDataWindow.focus();
}

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w([^>]*[^\/])?>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}

function doFO2HTMLAndShowData(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow)
{
   if (xsltPrePathOrURL) {
       var script = getScript(xsltPrePathOrURL);
       if (script) {
          script.parentNode.removeChild(script);
       }
       loadScript(xsltPrePathOrURL,function(){xsltPreLoadOK(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow);},function(){xsltLoadFailed(xsltPrePathOrURL,showDataWindow);});   
   } else {
       xsltPreLoadOK(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow);
   }

}

function xsltPreLoadOK(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow)
{
   var script = getScript(xsltFOPathOrUrl);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(xsltFOPathOrUrl,function(){_doFO2HTMLAndShowData(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow);},function(){xsltLoadFailed(xsltFOPathOrUrl,showDataWindow);});   
}

function _doFO2HTMLAndShowData(xmlDoc,xsltPrePathOrURL,xsltFOPathOrUrl,showDataWindow)
{
    try {
        var xsltPreDoc = null;        
        if (xsltPrePathOrURL) {
            xsltPreDoc = parseXmlStringForTransformation(xsltPreObj);
        }
        
        var resultHTML = null;
        if (window.ActiveXObject!=null || "ActiveXObject" in window) {
            var resultDoc = null;
            xmlDoc = parseXmlStringForTransformation(new XMLSerializer().serializeToString(xmlDoc));
            if (xsltPrePathOrURL) {
                resultHTML = xmlDoc.transformNode(xsltPreDoc);
                resultDoc = parseXmlStringForTransformation(resultHTML);
            } else {
                resultDoc = xmlDoc;
            }            
            var xsltDoc2 = parseXmlStringForTransformation(xsltFOObj);
            resultHTML = resultDoc.transformNode(xsltDoc2);

            var resultDoc2 = parseXmlStringForTransformation(resultHTML);
            var xsltDoc3 = parseXmlStringForTransformation(xsltFO2HTMLObj);
            resultHTML = resultDoc2.transformNode(xsltDoc3);            
        } else {
            var xsltProcessor = new XSLTProcessor();
            var resultDoc = null;
            if (xsltPrePathOrURL) {
                xsltProcessor.importStylesheet(xsltPreDoc);
                resultDoc = xsltProcessor.transformToDocument(xmlDoc);
            } else {
                resultDoc = xmlDoc;
            }
            var xsltProcessor2 = new XSLTProcessor();
            var xsltDoc2 = parseXmlStringForTransformation(xsltFOObj);
            xsltProcessor2.importStylesheet(xsltDoc2);
            var resultDoc2 = xsltProcessor2.transformToDocument(resultDoc);
            
            var xsltProcessor3 = new XSLTProcessor();
            var xsltDoc3 = parseXmlStringForTransformation(xsltFO2HTMLObj);
            xsltProcessor3.importStylesheet(xsltDoc3);
            var resultDoc3 = xsltProcessor3.transformToDocument(resultDoc2);
            resultHTML = new XMLSerializer().serializeToString(resultDoc3);
        }
        var titlemsg = "HTML based on form submission data";
        if(xsltPrePathOrURL) {
            titlemsg+=", pre-transformation '"+xsltPrePathOrURL+"'";
        }
        titlemsg+=" and XSL-FO transformation '"+xsltFOPathOrUrl+"'";
        _showDataHTML(showDataWindow,resultHTML,titlemsg);
   } catch (err) {
      showDataWindow.close();
      var msg = "Error occurred when performing FO2HTML transformation with pre-transformation '"+xsltPrePathOrURL+"' and FO transformation '"+xsltFOPathOrUrl+"'!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function doXSLTAndShowData(xmlDoc,xsltPrePathOrUrl,showDataWindow)
{
   var script = getScript(xsltPrePathOrUrl);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(xsltPrePathOrUrl,function(){xsltLoadOK(xmlDoc,xsltPrePathOrUrl,showDataWindow);},function(){xsltLoadFailed(xsltPrePathOrUrl,showDataWindow);});   

}

function parseXmlStringForTransformation(xml) {
    try {
        var doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
        doc.loadXML(xml);
        return doc;
    }
    catch (e) {
        var doc = new DOMParser().parseFromString(xml, 'application/xml');
        return doc;
    }
}
  
function xsltLoadOK(xmlDoc,xsltPrePathOrUrl,showDataWindow) {
    try {
        var xsltDoc = parseXmlStringForTransformation(xsltPreObj);
        var resultXml = null;
        if (window.ActiveXObject!=null || "ActiveXObject" in window) {
            xmlDoc = parseXmlStringForTransformation(new XMLSerializer().serializeToString(xmlDoc));        
            resultXml = xmlDoc.transformNode(xsltDoc);
        } else {
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsltDoc);
            var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
            resultXml = new XMLSerializer().serializeToString(resultDoc);
        }
        _showData(showDataWindow,formatXml(resultXml),"Form submission data - XML (with (pre)transformation '"+xsltPrePathOrUrl+"')");
   } catch (err) {
      showDataWindow.close();
      var msg = "Error occurred when doing xsl transformation "+xsltPrePathOrUrl+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function xsltLoadFailed(xsltPathOrUrl,showDataWindow) {
   showDataWindow.close();
   var msg = "Error occurred when loading xslt '"+xsltPathOrUrl+"'!";   
   console.log(msg);
   alert(msg);
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

// Converts JSON to so called plain XML. The XML schema corresponds to the schema used by our Azure functions.
function _convertJSON2XML(joname,nameattr,json,parentXML,doc){
    var el;
    if (!doc) {
        doc = $.parseXML("<"+joname+"/>");
        parentXML = doc.getElementsByTagName(joname)[0];
        el = parentXML;
    } else {
        el = doc.createElement(joname);
        parentXML.appendChild(el);
    }
    if (nameattr) {
        $(el).attr("name",nameattr);
    }
    var jt = typeof(json);
    if (jt === 'object') {
        if (isArray(json)) {
            var aind, alen;
            for (aind=0, alen=json.length; aind<alen; ++aind) {
                var jsonarrel = json[aind];
                var jtarr = typeof(jsonarrel);
                if (jtarr === 'object') {
                    _convertJSON2XML((isArray(jsonarrel) ? "array" : "complexobject"),nameattr,jsonarrel,el,doc);
                } else {
                    var memberElement = doc.createElement("member");
                    $(memberElement).attr("value",jsonarrel);
                    el.appendChild(memberElement);                    
                }                
            }
        } else {
            var key;
            for (key in json) {
                if (json.hasOwnProperty(key)) {
                    var jsonel = json[key];
                    var jet = typeof(jsonel);
                    if (jet === 'object') {
                        _convertJSON2XML((isArray(jsonel) ? "array" : "complexobject"),key,jsonel,el,doc);
                    } else {
                        var propertyElement = doc.createElement("property");
                        $(propertyElement).attr("name",key);
                        $(propertyElement).attr("value",jsonel);
                        el.appendChild(propertyElement);
                    }
                }
            }
        }
    }
    
    return doc;
}

function _checkPropertyValue(propertyName, propertyValue, parameterName, parameterType)
{
    return propertyName === parameterName && propertyValue != appConfiguration[parameterName] && typeof propertyValue === parameterType;
}

// It is expected that the file referenced by path (json.js file) contains JS variable called dataObj
// This variable is JSON containing the data to be loaded into the form. 
// E.g. the file content could look like: var dataObj = {"n1":33,"n2":44,"str1":"mystr","bln1":true};
function _loadData(filePath){
   var script = getScript(filePath);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(filePath,function(){mockupDataOK(filePath);},function(){mockupDataFailed(filePath);});   
}

function mockupDataOK(mockupPath) {
   try {
      var datamerged = $.extend(formioForm.submission.data,dataObj);
      console.log('MERGED WITH MOCK-UP DATA='+JSON.stringify(datamerged));   
      formioForm.submission={"data":datamerged};
   } catch (err) {
      var msg = "Error occurred when loading mock-up data "+mockupPath+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function mockupDataFailed(mockupPath) {
   var msg = "Error occurred when loading mock-up data "+mockupPath+"!";   
   console.log(msg);
   alert(msg);
}

// NOTE: it works properly on Chrome and Opera. Other browsers are opening files if the extension is known
function downloadURI(uri, name) 
{
    if (!name) {
        name = "myfile";
    }
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    //link.target="_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Performs calculation as specified in APP configuration.
 * It can be executed either in the browser or by performing
 * an ajax call to an APIs 
 */
function performCalculation()
{
    if (appConfiguration.home && appConfiguration.calcApiPath && (appConfiguration.calcJsPath || appConfiguration.calcJsSetting || appConfiguration.calcConfPath || appConfiguration.calcConfSetting)) 
    {
        _performCalculationRemotely();
    } 
    else if (appConfiguration.calcJsPathLocal) 
    {
        _performCalculationLocally();
    }
}

function _performCalculationRemotely()
{
    var payload = {"data": formioForm.submission.data};
    if (appConfiguration.calcJsPath)
    {
        payload["calculation"] = appConfiguration.calcJsPath;
    }
    
    if (appConfiguration.calcJsSetting)
    {
        payload["calculation_SettingName"] = appConfiguration.calcJsSetting;
    }
    
    if (appConfiguration.calcConfPath)
    {
        payload["Configuration"] = appConfiguration.calcConfPath;
    }
    
    if (appConfiguration.calcConfSetting)
    {
        payload["Configuration_SettingName"] = appConfiguration.calcConfSetting;
    }
    
    var url = appConfiguration.home+"/"+appConfiguration.calcApiPath;
    TogFormViewer.lastCalculationTimestamp = new Date().toISOString();
    var additionalConfig = {"lastCalculationTimestamp":TogFormViewer.lastCalculationTimestamp};
    if (typeof ADAL!== 'undefined' && ADAL || typeof MSAL!== 'undefined' && MSAL) {
        executeAjaxRequestWithAdalLogic(ADAL!=null ? ADAL.config.clientId : MSAL.clientId, executeAjaxRequest, url, payload, additionalConfig,onsuccess_calc,onfailure_calc,onfailure_calc);
    } else {
        executeAjaxRequest(null, url, payload, additionalConfig,onsuccess_calc,onfailure_calc,onfailure_calc);
    }
    
}

function _performCalculationLocally()
{
    if (getScript(appConfiguration.calcJsPathLocal))
    {
        applyCalculation();
    }
    else
    {
        _calculate(appConfiguration.calcJsPathLocal);
    }
}

function _calculate(calcPath) {
   var script = getScript(calcPath);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(calcPath,function(){calcScriptOK(calcPath);},function(){calcScriptFailed(calcPath);});
}

function getScript(url) {
    if (!url) return null;
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].attributes.src.value === url) return scripts[i];
    }
    return null;
}

function calcScriptOK(calcPath) {
   try {
      applyCalculation();
   } catch (err) {
      var msg = "Error occurred when executing calculation "+calcPath+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function applyCalculation()
{
    var sd = JSON.parse(JSON.stringify(formioForm.submission.data));
    var initdata = calc.calculate(sd);
    var jsond = JSON.parse(initdata);
    for (var p in jsond) {
        var pLowerCase = p.toLowerCase();
        if ((pLowerCase.startsWith && pLowerCase.startsWith("xlew_"))
            || (pLowerCase.indexOf && pLowerCase.indexOf("xlew_") === 0)) {
            delete jsond[p];
        }
    }

    resultData = _filterCalculationResultData(jsond)
    var datamerged = $.extend(formioForm.submission.data,resultData);
    formioForm.submission={"data":datamerged};
}

function _filterCalculationResultData(calcResult) {
    var resultData = {};
    if (calcResult!=null) { 
        for (var p in calcResult) {
            var c = formioForm.getComponent(p);
            if (appConfiguration.updatecalcresult || (c && c.component && c.component.properties && c.component.properties.updatecalcresult && c.component.properties.updatecalcresult==='true')) {
                resultData[p]=calcResult[p];
            }          
        }
    }
    console.log('CALCULATION RESULT FILTERED DATA='+JSON.stringify(resultData));
    return resultData;
}

function calcScriptFailed(calcPath) {
   var msg = "Error occurred when loading calculation "+calcPath+"!";   
   console.log(msg);
   alert(msg);
}

function handleADALError() {
}

function onsuccess_calc(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   console.log("Successfully executed calculation");
   var lcts = additionalConfiguration.lastCalculationTimestamp;
   if (lcts===TogFormViewer.lastCalculationTimestamp) {
      TogFormViewer.lastCalculationResultTimestamp = TogFormViewer.lastCalculationTimestamp;
      var resultData = _filterCalculationResultData(data.calcResult);
      var datamerged = $.extend(formioForm.submission.data,resultData);
      formioForm.setSubmission({"data":datamerged}).then(TogFormViewer.executeQueuedEventsAfterCalculation);
   } else {
      console.log("...calculation result will be ignored because the calculation timestamp "+lcts+" does not match the last calculation request timestamp "+TogFormViewer.lastCalculationTimestamp);
   }
}

function onfailure_calc(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   var lcts = additionalConfiguration.lastCalculationTimestamp;
   if (lcts===TogFormViewer.lastCalculationTimestamp) {
      TogFormViewer.lastCalculationResultTimestamp = TogFormViewer.lastCalculationTimestamp;
      TogFormViewer.executeQueuedEventsAfterCalculation();
   }
   
   onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
}

function onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   var msg = "Error occurred when executing request against url "+url+"!";
   msg+="\n\nError type: "+textStatus;
   msg+="\nError status: "+err.status + (err.statusText && err.statusText!='' ? " - "+err.statusText : "");
   msg+="\n\nForm data: "+(formdata!=null ? JSON.stringify(formdata) : null);
   msg+=(err.responseText!=null || err.responseXML!=null) ? ("\n\nResponse: "+(err.responseText!=null ? err.responseText : err.responseXML)) : "";

   console.log(msg);
   alert(msg);
}

function executeAjaxRequest(token,url,formdata,additionalConfiguration,onsuccess,onfailure) {
   var httpMethod = additionalConfiguration.actionHttpMethod;
   if (httpMethod) {
       httpMethod = httpMethod.toUpperCase();
       if (httpMethod!=='POST' && httpMethod!=='PUT' && httpMethod!=='PATCH' && httpMethod!=='DELETE' && httpMethod!=='GET') {
           httpMethod = "POST";
       }
   } else {
       httpMethod = "POST";
   }
   
   
   var eventId;
   var eventTime;
   var eventTimeZoneOffset;
   if (additionalConfiguration && additionalConfiguration.event) {
       eventId = additionalConfiguration.event.id;
       eventTime = additionalConfiguration.event.when.time;
       eventTimeZoneOffset = additionalConfiguration.event.when.timezoneOffset;
   }
   
   var settings = {
     "crossDomain": true,     
     "url": url,
     "timeout":60000,
     "method": httpMethod,
     "headers": {
       "content-type": "application/json",
       "cache-control": "no-cache",
       "x-ms-client-tracking-id": TogFormViewer.correlationId,
       "Mode-Test": TogFormViewer.testFlag,
       "Mode-Debug": TogFormViewer.debugFlag,
       "EventId": eventId,
       "EventTime": eventTime,
       "EventTimeZoneOffset": eventTimeZoneOffset
     }
   };
   if (httpMethod!=='GET') {
      settings.data=JSON.stringify(formdata);
      settings.dataType='json';
      settings.contentType='application/json';
   }   
   if (token) {   
      settings.headers.authorization = "Bearer "+token;
   }

   $.ajax(settings).done(function (data,textStatus,request) {
      onsuccess(token,url,formdata,additionalConfiguration,data,textStatus,request);
   }).fail(function (err, textStatus, errorThrown) {
      onfailure(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
   });
}
