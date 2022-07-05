import { ListNumberAlignment, NumberingFormat } from '../../numbering-lists/list-level-properties';
import { BaseManipulator } from '../base-manipulator';
import { IListLevelPropertyManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class ListLevelPropertiesManipulator extends BaseManipulator {
    start: IListLevelPropertyManipulator<number>;
    format: IListLevelPropertyManipulator<NumberingFormat>;
    alignment: IListLevelPropertyManipulator<ListNumberAlignment>;
    convertPreviousLevelNumberingToDecimal: IListLevelPropertyManipulator<boolean>;
    separator: IListLevelPropertyManipulator<string>;
    suppressRestart: IListLevelPropertyManipulator<boolean>;
    suppressBulletResize: IListLevelPropertyManipulator<boolean>;
    displayFormatString: IListLevelPropertyManipulator<string>;
    relativeRestartLevel: IListLevelPropertyManipulator<number>;
    templateCode: IListLevelPropertyManipulator<number>;
    originalLeftIndent: IListLevelPropertyManipulator<number>;
    legacy: IListLevelPropertyManipulator<boolean>;
    legacySpace: IListLevelPropertyManipulator<number>;
    legacyIndent: IListLevelPropertyManipulator<number>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=list-level-properties-manipulator.d.ts.map