'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Document from './document';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.gotoDocument', (e: vscode.Uri) => {
        // The code you place here will be executed every time your command is executed
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('No active text editor found!');
            return;
        }
        
        let keyword: string = '';
        if (editor.selection.isEmpty) {
            let wordRange: any = editor.document.getWordRangeAtPosition(editor.selection.start);
            keyword = wordRange ? editor.document.getText(wordRange) : '';
        } else {
            keyword = editor.document.getText(editor.selection.with());
        }

        let extIndex: number = editor.document.fileName.lastIndexOf('.');
        let ext: string = extIndex >= 0 ? editor.document.fileName.substring(extIndex + 1) : '';
        let config = vscode.workspace.getConfiguration('goto-documentation');
        let customDocs = config.get<object>("customDocs");
        
        Document.open(ext, keyword, customDocs);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}