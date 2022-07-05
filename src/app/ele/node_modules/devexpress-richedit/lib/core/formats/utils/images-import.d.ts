import { ModelManipulator } from '../../model/manipulators/model-manipulator';
import { ImageLoadingOptions } from '../../model/manipulators/picture-manipulator/loader/image-loading-options';
import { PictureRunType } from '../../model/runs/inline-picture-run';
import { SubDocumentPosition } from '../../model/sub-document';
export declare class FormatImagesImporterData {
    subDocPos: SubDocumentPosition;
    options: ImageLoadingOptions;
    run: PictureRunType;
    constructor(subDocPos: SubDocumentPosition, options: ImageLoadingOptions, run: PictureRunType);
}
export declare class FormatImagesImporter {
    private data;
    private callOnImportEnd?;
    private callbackId;
    private timeoutId;
    dispose(): void;
    whenAllPicturesLoaded(callback: (successLoadedAllPictures: boolean) => void, timeout?: number): void;
    import(modelManipulator: ModelManipulator): void;
    registerImageRun(data: FormatImagesImporterData): void;
}
//# sourceMappingURL=images-import.d.ts.map