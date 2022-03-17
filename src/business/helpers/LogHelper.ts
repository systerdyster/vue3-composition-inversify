/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from 'inversify-props';

export interface ILogHelper {
    log(severity: LogSeverity, ... args: any[]): void;

    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
}

export type LogSeverity = 'info' | 'warn' | 'error' | 'debug';

@injectable()
export class LogHelper implements ILogHelper {
    #isDebug: boolean = true;

    public log(severity: LogSeverity, ... args: any[]) {
        if (severity === 'debug' && !this.#isDebug) {
            return;
        }

        console[severity](...args);
    }

    public info(...args: any[]) {
        this.log('info', ... args)
    }
   
    public warn(...args: any[]) {
        this.log('warn', ... args);
    }
    
    public error(...args: any[]) {
        this.log('error', ... args);
    }

    public debug(...args: any[]) {
        this.log('debug', ... args);    
    }
}