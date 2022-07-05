import { RunBase } from '../../core/model/runs/run-base';
import { RunType } from '../../core/model/runs/run-type';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { IInterval } from '../interval';
import { Collection } from './collection';
export declare class RunWithPosition<TRun extends RunBase> {
    run: TRun;
    position: number;
    constructor(run: TRun, position: number);
}
export declare abstract class DrawingObjectCollectionBase<TRun extends RunBase, ApiType> extends Collection<ApiType, RunWithPosition<TRun>> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    foreach(callback?: (picture: ApiType) => void): void;
    find(position: number | IInterval): ApiType[];
    protected abstract get _runTypes(): RunType[];
    protected _getCoreItems(): RunWithPosition<TRun>[];
}
//# sourceMappingURL=drawing-object-collection-base.d.ts.map