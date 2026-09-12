import { Context } from './Context';
declare class FreepublicapisError extends Error {
    isFreepublicapisError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FreepublicapisError };
