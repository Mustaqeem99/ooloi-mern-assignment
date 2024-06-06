
// This function will return components list to the client for building form elements in the react app
//No MongoDB // serves sample JSON data
exports.getLoginComponents = async (req, res, next) => {
    try {

        let components = [
            {
                "comp": "TextInput",
                "isRequired": true,
                "valuePath": "main.title",
                "props": {
                    "id": "main.title",
                    "label": "title",
                    "sublabel": "title",
                    "placeholder": "title"
                }
            },
            {
                "comp": "ImageInput",
                "isRequired": false,
                "valuePath": "main.coverImage",
                "props": {
                    "id": "coverImage",
                    "invert": true
                }
            },
            {
                "comp": "DropdownSingle",
                "isRequired": false,
                "valuePath": "main.dropdown",
                "props": {
                    "id": "5spum7",
                    "label": "dropdown",
                    "options": [
                        {
                            "reactKey": "l2OnzF",
                            "value": "india",
                            "display": "india"
                        },
                        {
                            "reactKey": "VVpN7t",
                            "value": "japan",
                            "display": "japan"
                        },
                        {
                            "reactKey": "FLMPvq",
                            "value": "germany",
                            "display": "germany"
                        }
                    ]
                }
            },
            {
                "comp": "TextInput",
                "isRequired": true,
                "valuePath": "main.enterTextHere",
                "props": {
                    "id": "dutnvz",
                    "label": "enter text here"
                }
            },
            {
                "comp": "CheckboxList",
                "isRequired": false,
                "valuePath": "main.checkbox",
                "props": {
                    "id": "rle96m",
                    "label": "checkbox",
                    "options": [
                        {
                            "reactKey": "zUO0or",
                            "value": "japan",
                            "display": "Japan"
                        },
                        {
                            "reactKey": "yEwXcc",
                            "value": "germany",
                            "display": "Germany"
                        },
                        {
                            "reactKey": "0qJSKt",
                            "value": "india",
                            "display": "India"
                        }
                    ]
                }
            },
            {
                "comp": "ImageInput",
                "isRequired": false,
                "valuePath": "main.image",
                "props": {
                    "id": "zk79wo",
                    "label": "image",
                    "sublabel": "Select an image"
                }
            },
            {
                "comp": "RadioList",
                "isRequired": true,
                "valuePath": "main.radioList",
                "props": {
                    "id": "kh8dvv",
                    "label": "Radio list",
                    "sublabel": "Select a radio input",
                    "options": [
                        {
                            "reactKey": "kCwnIj",
                            "value": "mango",
                            "display": "Mango"
                        },
                        {
                            "reactKey": "DnqlBr",
                            "value": "apple",
                            "display": "Apple"
                        },
                        {
                            "reactKey": "H7vPfc",
                            "value": "oranges",
                            "display": "Oranges"
                        }
                    ]
                }
            },
            {
                "comp": "VideoInput",
                "isRequired": false,
                "valuePath": "main.videoInput",
                "props": {
                    "id": "0kb1ux",
                    "label": "Video Input",
                    "sublabel": "Select a video"
                }
            },
            {
                "comp": "DatePicker",
                "isRequired": true,
                "valuePath": "main.datePicker",
                "props": {
                    "id": "xd0ijp",
                    "label": "Date Picker",
                    "sublabel": "Select Date"
                }
            },
            {
                "comp": "TextInput",
                "isRequired": false,
                "valuePath": "main.location",
                "props": {
                    "id": "n9283z",
                    "label": "Location",
                    "sublabel": "Enter location"
                }
            },
            {
                "comp": "PDFInput",
                "isRequired": false,
                "valuePath": "main.pdf",
                "props": {
                    "id": "y93dq8",
                    "label": "pdf",
                    "sublabel": "Add a Pdf here"
                }
            }
        ]

        return res.status(200).json({
            message: "Componenet Fetched successfully",
            data: components
        });

    } catch (error) {
        return res.status(500).json({
            message: error.toString()
        });
    }
};