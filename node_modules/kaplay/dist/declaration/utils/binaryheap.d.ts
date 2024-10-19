export declare class BinaryHeap<T> {
    _items: T[];
    _compareFn: (a: T, b: T) => boolean;
    /**
     * Creates a binary heap with the given compare function
     * Not passing a compare function will give a min heap
     */
    constructor(compareFn?: (a: T, b: T) => boolean);
    /**
     * Insert an item into the binary heap
     */
    insert(item: T): void;
    /**
     * Remove the smallest item from the binary heap in case of a min heap
     * or the greatest item from the binary heap in case of a max heap
     */
    remove(): T | null;
    /**
     * Remove all items
     */
    clear(): void;
    moveUp(pos: number): void;
    moveDown(pos: number): void;
    swap(index1: number, index2: number): void;
    /**
     * Returns the amount of items
     */
    get length(): number;
}
//# sourceMappingURL=binaryheap.d.ts.map