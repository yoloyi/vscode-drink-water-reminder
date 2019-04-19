import * as vscode from 'vscode';

export class Utility {
    public static getConfiguration(): vscode.WorkspaceConfiguration {
        return vscode.workspace.getConfiguration('drink.water');
    }
}