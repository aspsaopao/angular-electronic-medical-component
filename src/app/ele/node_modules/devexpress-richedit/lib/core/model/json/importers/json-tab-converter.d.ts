import { TabInfo, TabProperties } from '../../paragraph/paragraph-style';
export declare class JSONTabConverter {
    static convertFromJSONToTabProperties(obj: any[]): TabProperties;
    static convertFromJSON(obj: any): TabInfo;
    static convertToJSON(source: TabInfo): any;
    static convertFromTabPropertiesToJSON(source: TabProperties): any[];
}
//# sourceMappingURL=json-tab-converter.d.ts.map