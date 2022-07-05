import { IBuiltinLoadingPanel, LoadingPanelBase } from '../../base/loading-panel/panel';
export declare class ClientBuiltinStatusBarLoadingPanel implements IBuiltinLoadingPanel {
    visible: boolean;
    dispose(): void;
    show(): void;
    hide(): void;
}
export declare class ClientStatusBarLoadingPanel extends LoadingPanelBase<ClientBuiltinStatusBarLoadingPanel> {
    protected loadingPanel: ClientBuiltinStatusBarLoadingPanel;
}
//# sourceMappingURL=status-bar-panel.d.ts.map