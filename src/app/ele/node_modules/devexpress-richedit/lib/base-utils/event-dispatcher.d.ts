export interface IEventListener {
    dispose?(): void;
}
export declare class EventDispatcher<T extends IEventListener> {
    listeners: T[];
    clear(): void;
    add(listener: T): void;
    remove(listener: T): void;
    dispose(): void;
}
//# sourceMappingURL=event-dispatcher.d.ts.map