export declare class CommentListInfo {
    id: string;
    paraId: number;
}
export declare class CommentListInfoCollection {
    mapParaId: Record<number, CommentListInfo>;
    mapId: Record<string, CommentListInfo>;
    add(info: CommentListInfo): void;
}
export declare class CommentExListInfo {
    paraId: number;
    paraIdParent: number;
    done: number;
}
export declare class CommentExListInfoCollection {
    mapParaId: Record<number, CommentExListInfo>;
    add(info: CommentExListInfo): void;
}
//# sourceMappingURL=comment-list-info.d.ts.map