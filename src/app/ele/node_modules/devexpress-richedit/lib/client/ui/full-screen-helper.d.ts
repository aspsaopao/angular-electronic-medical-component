export declare class FullScreenHelper {
    private readonly fullScreenTempVars;
    private readonly element;
    private readonly zIndex;
    constructor(element: HTMLElement);
    private get shouldChangeNativeFullscreen();
    prepareFullScreenMode(): void;
    setNormalMode(): void;
    private getMainElement;
    setWidth(width: any): void;
    setHeight(height: any): void;
    private requestFullScreen;
    private cancelFullScreen;
}
//# sourceMappingURL=full-screen-helper.d.ts.map