import * as vscode from 'vscode';
import { Reminder } from './reminder';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
	let scheduler: Scheduler = new Scheduler(context);
	scheduler.start();
	
	let disposable = vscode.commands.registerCommand('drink.water', () => {
		Reminder.remind();
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
