export declare class LosingChangesWatcherSingleton {
    private static _instance;
    private watchers;
    private static evtHandlersHolder;
    private constructor();
    static get instance(): LosingChangesWatcherSingleton;
    add(watcher: ILosingChangesWatcher): void;
    remove(watcher: ILosingChangesWatcher): void;
    private onWindowBeforeUnload;
    private getConfirmMessage;
    private getModifiedWatchers;
}
export interface ILosingChangesWatcher {
    hasChanges(): boolean;
    getConfirmMessage(): string;
    confirm(): boolean;
    dispose(): any;
}
export declare class LosingChangesWatcher implements ILosingChangesWatcher {
    private hasChangesCallback;
    private confirmMessage;
    constructor(hasChangesCallback: () => boolean, confirmMessage: string);
    hasChanges(): boolean;
    getConfirmMessage(): string;
    confirm(): boolean;
    dispose(): void;
}
//# sourceMappingURL=losing-changes-watcher.d.ts.map