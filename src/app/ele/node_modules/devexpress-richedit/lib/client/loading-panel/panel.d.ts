import { IBuiltinLoadingPanel, LoadingPanelBase } from '../../base/loading-panel/panel';
export declare class ClientBuiltinLoadingPanel implements IBuiltinLoadingPanel {
    private canvas;
    private panelElem;
    visible: boolean;
    constructor(canvas: HTMLDivElement);
    dispose(): void;
    show(): void;
    hide(): void;
    private getLoadingPanel;
}
export declare class ClientLoadingPanel extends LoadingPanelBase<ClientBuiltinLoadingPanel> {
    constructor(canvas: HTMLDivElement);
}
//# sourceMappingURL=panel.d.ts.map