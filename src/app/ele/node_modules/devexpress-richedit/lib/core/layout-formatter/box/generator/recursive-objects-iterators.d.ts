import { Field } from '../../../model/fields/field';
import { Table, TablePosition } from '../../../model/tables/main-structures/table';
import { BoxWrapFieldInfo } from '../box-wrap';
export declare abstract class RecursiveObjectsIterator<T, OutT> {
    protected objects: T[];
    protected nextObjPosition: number;
    protected nextObjIndex: number;
    indexes: number[];
    constructor(objects: T[]);
    getNextObjectPosition(): number;
    init(pos: number): void;
    private collectIndexes;
    update(newPosition: number): boolean;
    private setNextInfos;
    private popLastIndexes;
    protected abstract getStartPosition(o: T): number;
    protected abstract getEndPosition(o: T): number;
    protected abstract getParent(obj: T): T;
    protected abstract getIndex(obj: T): number;
    protected abstract correctBounds(objIndex: number, pos: number): number;
    abstract generateInfo(pos: number): OutT[];
}
export declare class TableIterator extends RecursiveObjectsIterator<Table, TablePosition> {
    protected getStartPosition(o: Table): number;
    protected getEndPosition(o: Table): number;
    protected getParent(obj: Table): Table;
    protected getIndex(obj: Table): number;
    protected correctBounds(objIndex: number, pos: number): number;
    generateInfo(pos: number): TablePosition[];
}
export declare class FieldIterator extends RecursiveObjectsIterator<Field, BoxWrapFieldInfo> {
    protected getStartPosition(o: Field): number;
    protected getEndPosition(o: Field): number;
    protected getParent(obj: Field): Field;
    protected getIndex(obj: Field): number;
    protected correctBounds(objIndex: number, _pos: number): number;
    generateInfo(pos: number): BoxWrapFieldInfo[];
}
//# sourceMappingURL=recursive-objects-iterators.d.ts.map