export interface IRulerEventsListener {
    canHandle(source: HTMLElement): boolean;
    onMouseDown(evt: MouseEvent): void;
    onMouseMove(distance: number, source: HTMLElement): void;
    onMouseUp(): void;
    onDoubleClick(evt: MouseEvent): void;
    onEscPress(): void;
}
export declare class RulerMouseEventsManager {
    private canMouseMoveHandle;
    private startX;
    private touchID;
    private listeners;
    private listener;
    private evtHandlersHolder;
    dispose(): void;
    addListener(rulerControl: IRulerEventsListener): void;
    removeListener(rulerControl: IRulerEventsListener): void;
    private init;
    private onDoubleClick;
    private onKeyBoardEvent;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private reset;
    private getCurrentListener;
    private getChangedTouchesIdentifier;
}
//# sourceMappingURL=mouse.d.ts.map