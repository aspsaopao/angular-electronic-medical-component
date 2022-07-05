import { IModelChangesListener } from '../../../core/interfaces/model-changes-listener';
import { ModelChange } from '../../../core/model/changes/change';
import { BatchUpdatableObject, IBatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { RichEditCore } from '../../rich-edit-core';
import { ISelectionChangesListener } from '../../selection/i-selection-changes-listener';
import { Selection } from '../../selection/selection';
import { RulerControls } from './manager';
import { RulerModelData } from './model-data';
import { RulerSettings } from './settings';
export interface IRulerControl extends ISelectionChangesListener, IBatchUpdatableObject, IModelChangesListener {
    update(): void;
    setVisible(visible: boolean): any;
    getVisible(): boolean;
    setEnable(enable: boolean): any;
    getHeight(): number;
    initialize(testMode: boolean): void;
    adjust(): void;
    onViewTypeChanged(): void;
    dispose(): any;
}
declare enum HorizontalRulerEventType {
    None = 0,
    FullReset = 1,
    CheckSelectionChange = 2
}
export declare class HorizontalRulerControl extends BatchUpdatableObject implements IRulerControl {
    protected canvas: HTMLDivElement;
    protected modelData: RulerModelData;
    protected controls: RulerControls | null;
    private _innerVisible;
    private _visible;
    private isTestMode;
    private selection;
    private get initialized();
    updateEnabled: boolean;
    constructor(core: RichEditCore, settings: RulerSettings, canvas: HTMLDivElement);
    dispose(): void;
    initialize(testMode: boolean): void;
    onUpdateUnlocked(occurredEvents: HorizontalRulerEventType): void;
    modelChanged(change: ModelChange): void;
    NotifySelectionChanged(selection: Selection): void;
    private applyEvent;
    private getSelectionChangeEvent;
    private getModelChangeEvent;
    forceUpdate(_queryCommands?: Record<number, boolean>): void;
    update(): void;
    adjust(): void;
    setEnable(enable: boolean): void;
    setVisible(visible: boolean): void;
    private innerSetVisible;
    getVisible(): boolean;
    getHeight(): number;
    onViewTypeChanged(): void;
    protected initializeCore(): void;
}
export {};
//# sourceMappingURL=ruler.d.ts.map