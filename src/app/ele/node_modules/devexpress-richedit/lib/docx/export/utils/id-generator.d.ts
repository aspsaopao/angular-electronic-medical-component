export declare class IdGenerator {
    documentRelationId: string;
    private id;
    constructor();
    generateImageName(modelImageId: number): string;
    generateImageRelationId(modelImageId: number): string;
    calcDocumentRelationId(): string;
    calcCorePropertiesDocumentRelationId(): string;
    calcCustomPropertiesDocumentRelationId(): string;
    private next;
}
//# sourceMappingURL=id-generator.d.ts.map