var formObjButtons = {
  "display": "form",
  "components": [
    {
      "numRows": 12,
      "numCols": 4,
      "mask": false,
      "type": "table",
      "input": false,
      "key": "table",
      "label": "",
      "rows": [
        [
          {
            "components": [
              {
                "label": "formtitle",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The name of the browser tab.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "formtitle",
                "validate": {
                  "unique": false,
                  "customMessage": "",
                  "json": ""
                },
                "properties": {},
                "logic": [],
                "tags": [],
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'Browser tab name')\n\n",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": true,
                "conditional": {
                  "show": "true",
                  "when": null,
                  "eq": "formtitle"
                },
                "$$hashKey": "object:3208",
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3196"
          },
          {
            "components": [
              {
                "label": "mainlogopath",
                "tooltip": "The relative path from the index.html of the header to the mainlogo.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "mainlogopath",
                "id": "mainlogopath",
                "logic": [],
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../brands/mainlogo.png')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "$$hashKey": "object:3216"
              }
            ],
            "$$hashKey": "object:3197"
          },
          {
            "components": [
              {
                "label": "app launcher",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Enable the app laucnher menu in the header bar.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "applauncher",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "$$hashKey": "object:3224",
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3198"
          },
          {
            "components": [
              {
                "label": "feedback",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show the Feedback tab in the footer.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "feedback",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3232",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3199"
          }
        ],
        [
          {
            "components": [
              {
                "label": "formhelp",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The help text of the form, can be overwritten by each field.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "formhelp",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'Here goes the form help text shown in the help menu...','quill')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3252",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3240"
          },
          {
            "components": [
              {
                "label": "sidelogopath",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header to the sidelogo.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "sidelogopath",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../brands/sidelogo.png')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3260",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3241"
          },
          {
            "components": [
              {
                "label": "environment",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show the environment (tenant) menu in the header bar.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "environment",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3268",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3242"
          },
          {
            "components": [
              {
                "label": "display",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show as form or as wizard.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "display",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event, 'form')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3276",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3243"
          }
        ],
        [
          {
            "components": [
              {
                "label": "elearninglink",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The URL to the graphic/logo to be shown for the elearining course link, can be overwritten by each field.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "elearninglink",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'https://en.wikipedia.org/wiki/Operation_(mathematics)')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3296",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3284"
          },
          {
            "components": [
              {
                "label": "faviconpath",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header to the browser favcon.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "faviconpath",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../brands/sidelogo.png')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3304",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3285"
          },
          {
            "components": [
              {
                "label": "notifications",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show the notifications icon in the header bar.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "notifications",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3312",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3286"
          },
          {
            "components": [
              {
                "label": " mailbox photo",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "use the mailbox photo instead of the Azure profile photo.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "mailboxphoto",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'false')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3320",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3287"
          }
        ],
        [
          {
            "components": [
              {
                "label": "elearningimagelink",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The URL to the graphic/logo to be shown for the elearning course link, can be overwritten by each field.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "elearningimagelink",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3340",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3328"
          },
          {
            "components": [
              {
                "label": "bootswatchtheme",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The bootswatch theme to load with this form.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "bootswatchtheme",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'bluemeanie')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3348",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3329"
          },
          {
            "components": [
              {
                "label": "settings",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show the settings icon in the header bar.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "settings",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3356",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3330"
          },
          {
            "components": [
              {
                "label": "themes",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html to the themes list configuration.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "themes",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../appcnfs/themes.json.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3364",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3331"
          }
        ],
        [
          {
            "components": [
              {
                "label": "processimagelink",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The URL to the graphic/logo to be shown for the elearining course link, can be overwritten by each field.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "processimagelink",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'https://i.stack.imgur.com/MjNuE.gif')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3384",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3372"
          },
          {
            "components": [
              {
                "label": "customizationlogopath",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header of the customization logo.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "customizationlogopath",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../logos/pws_hdr.png')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3392",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3373"
          },
          {
            "components": [
              {
                "label": "help",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Show the help icon in the header bar.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "help",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3400",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3374"
          },
          {
            "components": [
              {
                "label": "branddefinition",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header to the brand definition.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "branddefinition",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../appcnfs/brand.json.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3408",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3375"
          }
        ],
        [
          {
            "components": [
              {
                "label": "processlink",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The URL to thebusiness process definition, can be overwritten by each field.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "processlink",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3428",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3416"
          },
          {
            "components": [
              {
                "label": " use outlook settings",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Store user language and timezone in the mailbox settings",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "useoutlooksettings",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3436",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3417"
          },
          {
            "components": [
              {
                "label": "account",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Enable the account menu in the header bar",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "account",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3444",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3418"
          },
          {
            "components": [
              {
                "label": "customizationdefinition",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header of the customization logo.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "customizationdefinition",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../cstmz/cstmz.json.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3452",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3419"
          }
        ],
        [
          {
            "components": [
              {
                "label": "maximize",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "If the app should be maximized when opened with this form. Only works on IE and with special IE settings !.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "maximize",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3472",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3460"
          },
          {
            "components": [
              {
                "label": "use user property extensions",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Store the theme (and language + timezone if not stored in the mailbox) in the user property extensions.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "useuserpropertyextensions",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3480",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3461"
          },
          {
            "components": [
              {
                "label": "theme settings",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Allow the user to select a theme.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "themesettings",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'false')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3488",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3462"
          },
          {
            "components": [
              {
                "label": "headerconfiguration",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative path from the index.html of the header to the header configuration.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "headerconfiguration",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../appcnfs/header.json.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3496",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3463"
          }
        ],
        [
          {
            "components": [
              {
                "label": "phraseapp project id",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The id of the phrase app project that is used to translate this form, please paste it into this custom property.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "phraseappprojectid",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'Paste your PhraseApp project ID here !')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3516",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3504"
          },
          {
            "components": [
              {
                "label": "formversion",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The version of this form, usually we start with v1.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "formversion",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'v1')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3524",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3505"
          },
          {
            "components": [
              {
                "label": "multilanguage",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Is this form multilingual / translated ? Then insert this custom property with the value: true",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "multilanguage",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'true')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3532",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3506"
          },
          {
            "components": [
              {
                "label": "language",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The language code of the language that this form is created / used in, e.g. en_GB or de_AT.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "language",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'en_GB')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3540",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3507"
          }
        ],
        [
          {
            "components": [
              {
                "label": "form width percent",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Its an attribute how wide the form.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "formwidthpercent",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'100')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3560",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3548"
          },
          {
            "components": [
              {
                "label": "elearningtext",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "elearningtext",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "elearningtext",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'','quill')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3568",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3549"
          },
          {
            "components": [
              {
                "label": "processtext",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "processtext",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "processtext",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'','quill')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3576",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3550"
          },
          {
            "components": [
              {
                "label": "autocalc",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Automatic calculation using SSC, value can be fieldchange or focuschange",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "autocalc",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'fieldchange')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3584",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3551"
          }
        ],
        [
          {
            "components": [
              {
                "label": "calc_js_path",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Path or URL to a calculation JS file, either calls locally (if offline or no api path is provided) or as body parameter.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_js_path",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../cals/calc1/v1/calc.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3604",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3592"
          },
          {
            "components": [
              {
                "label": "calc_api_path",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The full URL to call, only gets used if app is online",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_api_path",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'https://host.azurewebsites.net/prj/v1/Calculation(\\'calc1/v1\\')/Calculate')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3612",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3593"
          },
          {
            "components": [
              {
                "label": "calc_js_setting",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The AppSetting name that holds the path / URL to the calculation calc.js file to be used",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_js_setting",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'CALC_DEFAULT_calculation')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3620",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3594"
          },
          {
            "components": [
              {
                "label": "calc_conf_path",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The path to a json file holding the configuration parameters for the calculation call",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_conf_path",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../cals/calc1/v1/conf.json')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3628",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {},
                "lockKey": true
              }
            ],
            "$$hashKey": "object:3595"
          }
        ],
        [
          {
            "components": [
              {
                "label": "calc_conf_setting",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The AppSetting name that holds the path / URL to the configuration file to be used",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_conf_setting",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'CALC_DEFAULT_conf')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3648",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3636"
          },
          {
            "components": [
              {
                "label": "actionLoading",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative URL to call before a form is loaded",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "actionLoading",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'Form(\\'{formname}/{formversion}\\')/Loading')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3656",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3637"
          },
          {
            "components": [
              {
                "label": "actionLoaded",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The relative URL to call after a form was loaded",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "actionLoaded",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'Form(\\'{formname}/{formversion}\\')/Loaded')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3664",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3638"
          },
          {
            "components": [
              {
                "label": "loadingScript",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Path or URL to a JS file to execute before a form gets loaded",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "loadingScript",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'','ace')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3672",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3639"
          }
        ],
        [
          {
            "components": [
              {
                "label": "loadedScript",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Path or URL to a JS file to execute after a form gets loaded",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "loadedScript",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'','ace')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3692",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3680"
          },
          {
            "components": [
              {
                "label": "calc_js_path_local",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "Path or URL to a calculation JS file, either calls locally (if offline or no api path is provided) or as body parameter.",
                "mask": false,
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "input": true,
                "key": "calc_js_path_local",
                "event": "",
                "url": "",
                "custom": "addDefaultValue(event,'../calcs/calc1/v1/calc.js')",
                "autofocus": false,
                "tableView": false,
                "size": "md",
                "leftIcon": "",
                "rightIcon": "",
                "block": false,
                "disableOnInvalid": false,
                "$$hashKey": "object:3699",
                "tags": [],
                "conditional": {
                  "show": "",
                  "when": null,
                  "eq": ""
                },
                "properties": {}
              }
            ],
            "$$hashKey": "object:3681"
          },
          {
            "components": [],
            "$$hashKey": "object:3682"
          },
          {
            "components": [],
            "$$hashKey": "object:3683"
          }
        ]      

      ],
      "header": [],
      "$$hashKey": "object:211",
      "clearOnHide": false,
      "hideLabel": true,
      "caption": "",
      "striped": false,
      "bordered": false,
      "hover": false,
      "condensed": false,
      "tableView": false,
      "isNew": false,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {}
    }
  ],
  "settings": {
    "pdf": {
      "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
      "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
    }
  },
  "page": 0
}