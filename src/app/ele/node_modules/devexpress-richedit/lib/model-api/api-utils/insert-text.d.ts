import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { InputPositionBase } from '../../core/selection/input-position-base';
import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
export declare function insertTextThroughApi(position: number, text: string, subDocument: SubDocument, processor: IProcessor, options?: {
    wrapIntoBeginUpdate?: boolean;
    inputPosition?: InputPositionBase;
}): ConstInterval;
//# sourceMappingURL=insert-text.d.ts.map