import { Paragraph } from '../../../model/paragraph/paragraph';
import { Section } from '../../../model/section/section';
export declare abstract class OneDimensionItertor<T> {
    protected objects: T[];
    protected nextObjPosition: number;
    index: number;
    constructor(objects: T[]);
    init(pos: number): void;
    update(newPosition: number): boolean;
    private updateNextObjPos;
    protected abstract getPosition(o: T): number;
}
export declare class ParagraphIterator extends OneDimensionItertor<Paragraph> {
    protected getPosition(o: Paragraph): number;
}
export declare class SectionIterator extends OneDimensionItertor<Section> {
    protected getPosition(o: Section): number;
}
//# sourceMappingURL=one-dimension-itertors.d.ts.map