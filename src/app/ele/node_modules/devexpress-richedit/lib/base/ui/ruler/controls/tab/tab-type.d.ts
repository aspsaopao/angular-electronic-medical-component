import { TabAlign } from '../../../../../core/model/paragraph/paragraph';
import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerBase } from '../base';
export declare class RulerTabTypeControl extends RulerBase {
    private evtHandlersHolder;
    align: TabAlign;
    private innerSquareElement;
    private alignElement;
    protected getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls);
    init(): void;
    dispose(): void;
    adjust(): void;
    private adjustAlignElement;
    onMouseDown(evt: Event): void;
    private applyTemplate;
}
//# sourceMappingURL=tab-type.d.ts.map