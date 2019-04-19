import * as vscode from 'vscode';
import { Utility } from './utility';
import { Reminder } from './reminder';

export class Scheduler {
    public constructor(private context: vscode.ExtensionContext) {
    }

    public start() {
        setInterval(() => {
            Reminder.remind();
        }, 1000 * 60 * Utility.getConfiguration().get<number>('reminderIntervalInMinutes', 60));
    }
} 