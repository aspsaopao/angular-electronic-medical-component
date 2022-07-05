import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
export declare class ObjectStateInfo<T extends {
    interval: ConstInterval;
}> {
    object: T;
    index: number;
    constructor(object: T, index: number);
}
export declare class CrossExistingIterator<T extends {
    interval: ConstInterval;
}> {
    deletedObjects: Array<ObjectStateInfo<T>>;
    addedObjects: Array<ObjectStateInfo<T>>;
    private objects;
    private currObjs;
    private nextPos;
    constructor(objects: T[]);
    init(): void;
    hasObjects(start: number, length: number): boolean;
    update(newPos: number): boolean;
    private clearPublicLists;
    private deleteObjects;
    private addNewObjects;
}
//# sourceMappingURL=cross-existing-iterator.d.ts.map