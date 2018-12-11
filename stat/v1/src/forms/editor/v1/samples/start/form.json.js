var formObj = {
  "display": "form",
  "components": [
    {
      "type": "button",
      "label": "Button",
      "key": "button",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/button');"
    },
    {
      "type": "button",
      "label": "Text Field",
      "key": "textField",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/textfield');"
    },
    {
      "type": "button",
      "label": "Number",
      "key": "number",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/number');"
    },
    {
      "type": "button",
      "label": "Checkbox",
      "key": "checkbox",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/checkbox');"
    },
    {
      "type": "button",
      "label": "Radio",
      "key": "radio",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/radio');"
    },
    {
      "type": "button",
      "label": "Select",
      "key": "select",
      "action": "custom",
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/select');"
    }	
  ], 
  "properties": {
    "formtitle": "Component Samples"
  },
  "title": "Form Component Samples",
  "name": "start"
}; /*This link we need ../../../header/index.html?form=../forms/editor/v1/samples/start*/