import { DelayedActionManager } from '@devexpress/utils/lib/class/delayed-manager';
export interface ICustomLoadingPanel {
    visible?: boolean;
    dispose?(): void;
    show(): void;
    hide(): void;
}
export interface IBuiltinLoadingPanel {
    visible: boolean;
    show(): void;
    hide(): void;
    dispose(): void;
}
export declare class ShowLoadingPanelDelayedManager extends DelayedActionManager {
    private readonly hidePanelAction;
    constructor(action: () => void, hidePanelAction: () => void);
    hidePanel(): void;
}
export declare abstract class LoadingPanelBase<TBuildInLoadingPanel extends IBuiltinLoadingPanel> {
    enabled: boolean;
    customPanel?: ICustomLoadingPanel;
    protected loadingPanel: TBuildInLoadingPanel;
    showPanelDelayed(timeout: number): ShowLoadingPanelDelayedManager;
    dispose(): void;
    setVisible(visible: boolean): void;
    protected setPanelVisible(panel: ICustomLoadingPanel | IBuiltinLoadingPanel, visible: boolean): void;
}
//# sourceMappingURL=panel.d.ts.map