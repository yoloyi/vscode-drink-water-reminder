import * as vscode from 'vscode';
import { Utility } from './utility';

export class Reminder {
    
    public static remind() {
        vscode.window.showErrorMessage(Utility.getConfiguration().get<string>("remindText", ""));
    }
}