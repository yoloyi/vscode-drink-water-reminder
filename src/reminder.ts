import * as vscode from 'vscode';
import { Utility } from './utility';

export class Reminder {
    
    public static remind() {
        vscode.window.showInformationMessage(Utility.getConfiguration().get<string>("remindText", ""));
    }
}