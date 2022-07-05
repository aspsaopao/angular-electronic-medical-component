import { IBuiltinLoadingPanel, LoadingPanelBase } from './panel';
export declare class LoadingPanelManagerBase<TLoadingPanel extends LoadingPanelBase<IBuiltinLoadingPanel>, TStatusBarLoadingPanel extends LoadingPanelBase<IBuiltinLoadingPanel>> {
    loadingPanel: TLoadingPanel;
    statusBarLoadingPanel: TStatusBarLoadingPanel;
    dispose(): void;
}
//# sourceMappingURL=manager.d.ts.map