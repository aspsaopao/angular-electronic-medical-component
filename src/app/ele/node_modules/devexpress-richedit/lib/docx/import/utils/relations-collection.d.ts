import { OpenXmlRelation } from '../../utils/open-xml-relation';
import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class RelationsCollection {
    private data;
    private list;
    constructor(data: Data);
    init(path: string): Promise<void>;
    add(rel: OpenXmlRelation): void;
    lookupRelationById(id: string): OpenXmlRelation;
    lookupRelationByType(type: string): OpenXmlRelation;
    lookupRelationByTargetAndType(target: string, type: string): OpenXmlRelation;
    generateId(): string;
    lookupExternalRelationById(relationId: string): OpenXmlRelation;
    lookupRelationTargetById(id: string, rootFolder: string, defaultFileName: string): string;
    lookupPackageFileStreamByRelationId(relationId: string, rootFolder: string): Promise<XmlReader | null>;
    lookupRelationTargetByType(type: string, rootFolder: string, defaultFileName: string): string;
    lookupExternalImageByRelationId(relationId: string): Promise<number | null>;
    lookupImageByRelationId(relationId: string, rootFolder: string): Promise<number | null>;
    private calculateRelationTargetCore;
}
//# sourceMappingURL=relations-collection.d.ts.map