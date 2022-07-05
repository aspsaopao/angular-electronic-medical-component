import { ApiParameterDescriptor, ArgsCheckerParameterIndex } from '../../api-utils/api-utils/parameter-checker';
import { DocumentModel } from '../../core/model/document-model';
import { SubDocument } from '../../core/model/sub-document';
import { IInterval } from '../interval';
export declare class ModelParametersChecker {
    static isInterval(value: IInterval): boolean;
    static intervalDescriptor<TResult>(parameterName: string, getResult: (value: IInterval) => TResult, minBound?: number, maxBound?: number): ApiParameterDescriptor<IInterval, TResult>;
    static intervalsDescriptor<TResult>(parameterName: string, getResult: (value: IInterval[]) => TResult, minBound?: number, maxBound?: number): ApiParameterDescriptor<IInterval[], TResult>;
    static colorDescriptors(parameterName: string): Array<ApiParameterDescriptor<string, number>>;
    static subDocumentById(subDocumentId: number, parameterIndex: ArgsCheckerParameterIndex, canBeUndefined: boolean, model: DocumentModel, defaultSubDocument: SubDocument, isShowErrorIfIdNotFound: boolean): SubDocument;
}
//# sourceMappingURL=model-parameter-checker.d.ts.map