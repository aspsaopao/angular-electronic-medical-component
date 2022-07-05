import { SubDocument } from '../model/sub-document';
export declare class ModelWordPositionHelper {
    static getWordStartPosition(subDocument: SubDocument, position: number): number;
    static getWordStartPositionByCharCondition(subDocument: SubDocument, position: number, condition: (char: string) => boolean): number;
    static getPrevWordStartPosition(subDocument: SubDocument, position: number): number;
    static getNextWordEndPosition(subDocument: SubDocument, position: number): number;
}
//# sourceMappingURL=helpers.d.ts.map