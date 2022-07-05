export interface IRulerScrollEventListener {
    onScroll(): void;
}
export declare class RulerViewElementScrollManager {
    private controls;
    private evtHandlersHolder;
    dispose(): void;
    addListener(owner: IRulerScrollEventListener, viewElement: HTMLElement): void;
    removeListener(owner: IRulerScrollEventListener, viewElement: HTMLElement): void;
    private onScroll;
}
//# sourceMappingURL=scroll.d.ts.map