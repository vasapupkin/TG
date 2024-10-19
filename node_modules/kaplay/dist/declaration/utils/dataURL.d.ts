export declare function base64ToArrayBuffer(base64: string): ArrayBuffer;
export declare function dataURLToArrayBuffer(url: string): ArrayBuffer;
export declare function download(filename: string, url: string): void;
export declare function downloadText(filename: string, text: string): void;
export declare function downloadJSON(filename: string, data: any): void;
export declare function downloadBlob(filename: string, blob: Blob): void;
export declare const isDataURL: (str: string) => RegExpMatchArray | null;
export declare const getFileExt: (p: string) => string | undefined;
export declare const getFileName: (p: string) => string;
//# sourceMappingURL=dataURL.d.ts.map