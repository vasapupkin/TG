type Func = (...args: any[]) => any;
export declare function overload2<A extends Func, B extends Func>(fn1: A, fn2: B): A & B;
export declare function overload3<A extends Func, B extends Func, C extends Func>(fn1: A, fn2: B, fn3: C): A & B & C;
export declare function overload4<A extends Func, B extends Func, C extends Func, D extends Func>(fn1: A, fn2: B, fn3: C, fn4: D): A & B & C & D;
export {};
//# sourceMappingURL=overload.d.ts.map