import React, { Component } from 'react'
import dynamic from 'next/dynamic';

const FroalaEditorInput = dynamic(import('react-froala-wysiwyg'), {
    ssr: false
});

export default class FroalaEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: props.model
        };
    }

    handleModelChange = model => {
        this.props.handleEditorChange(model);
    };


    render() {
        const { guardarDescrip } = this.props
        return (
            <FroalaEditorInput
                id={this.props.editorId}
                config={{
                    attribution: false,
                    placeholderText: 'Descripcion del mail',
                    toolbarButtons: {
                        moreText: {
                            buttons: [
                                "bold",
                                "italic",
                                "underline",
                                "strikeThrough",
                                "subscript",
                                "superscript",
                                "fontFamily",
                                "fontSize",
                                "textColor",
                                "backgroundColor",
                                "inlineClass",
                                "inlineStyle",
                                "clearFormatting"
                            ]
                        },
                        moreParagraph: {
                            buttons: [
                                "alignLeft",
                                "alignCenter",
                                "formatOLSimple",
                                "alignRight",
                                "alignJustify",
                                "formatOL",
                                "formatUL",
                                "paragraphFormat",
                                "paragraphStyle",
                                "lineHeight",
                                "outdent",
                                "indent",
                                "quote"
                            ]
                        },
                        moreRich: {
                            buttons: [
                                "insertLink",
                                "insertImage",
                                "insertVideo",
                                "insertTable",
                                "emoticons",
                                "fontAwesome",
                                "specialCharacters",
                                "embedly",
                                "insertFile",
                                "insertHR"
                            ]
                        },
                        moreMisc: {
                            buttons: [
                                "undo",
                                "redo",
                                "fullscreen",
                                "print",
                                "getPDF",
                                "spellChecker",
                                "selectAll",
                                "html",
                                "help"
                            ],
                            align: "right",
                            buttonsVisible: 2
                        }
                    },
                    events: {
                        // "focus": function (e, editor) {
                        //     console.log(e.target.innerText);
                        // }
                        'input': function (inputEvent) {
                            // Do something here.
                            // this is the editor instance.
                            guardarDescrip(inputEvent.target.innerText);
                        }
                    },
                    pluginsEnabled: [
                        "table",
                        "spell",
                        "quote",
                        "save",
                        "quickInsert",
                        "paragraphFormat",
                        "paragraphStyle",
                        "help",
                        "draggable",
                        "align",
                        "link",
                        "lists",
                        "file",
                        "image",
                        "emoticons",
                        "url",
                        "video",
                        "embedly",
                        "colors",
                        "entities",
                        "inlineClass",
                        "inlineStyle",
                        // 'codeBeautif '
                        // 'spellChecker',
                        "imageTUI"
                    ],


                }
                }
                model={this.props.model}
                onModelChange={this.props.handleEditorChange}

            />
        )
    }
}
