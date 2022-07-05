import { RichEditUnit } from '../../../base-utils/unit-converter';
import { InnerClientProperties } from '../../../core/rich-utils/inner-client-properties';
import { CommandManager } from '../../commands/command-manager';
import { RichEditCore } from '../../rich-edit-core';
import { InputPosition } from '../../selection/input-position';
import { Selection } from '../../selection/selection';
import { RulerSettings } from './settings';
export declare class RulerModelData {
    private core;
    readonly settings: RulerSettings;
    get inputPosition(): InputPosition;
    get commandManager(): CommandManager;
    get isClosed(): boolean;
    get innerClientProperties(): InnerClientProperties;
    get isReadOnly(): boolean;
    get unitType(): RichEditUnit;
    get selection(): Selection;
    constructor(core: RichEditCore, settings: RulerSettings);
    private fixSettings;
    private getDefaultStyle;
}
//# sourceMappingURL=model-data.d.ts.map