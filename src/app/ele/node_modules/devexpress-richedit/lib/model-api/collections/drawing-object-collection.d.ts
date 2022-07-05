import { AnchoredTextBoxRun } from '../../core/model/runs/anchored-text-box-run';
import { PictureRunType } from '../../core/model/runs/inline-picture-run';
import { RunType } from '../../core/model/runs/run-type';
import { IntervalApi } from '../interval';
import { PictureApi } from '../picture';
import { SizeApi } from '../size';
import { TextBoxApi } from '../text-box';
import { DrawingObjectCollectionBase, RunWithPosition } from './drawing-object-collection-base';
export declare class PictureCollection extends DrawingObjectCollectionBase<PictureRunType, PictureApi> {
    create(position: number, base64: string, size: SizeApi, callback?: (interval: IntervalApi) => void): void;
    protected get _runTypes(): RunType[];
    protected _getItem(coreItem: RunWithPosition<PictureRunType>): PictureApi;
}
export declare class TextBoxCollection extends DrawingObjectCollectionBase<AnchoredTextBoxRun, TextBoxApi> {
    create(position: number): TextBoxApi;
    protected get _runTypes(): RunType[];
    protected _getItem(coreItem: RunWithPosition<AnchoredTextBoxRun>): TextBoxApi;
}
//# sourceMappingURL=drawing-object-collection.d.ts.map