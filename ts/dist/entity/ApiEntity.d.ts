import { FreepublicapisEntityBase } from '../FreepublicapisEntityBase';
import type { FreepublicapisSDK } from '../FreepublicapisSDK';
import type { Control } from '../types';
import type { Api, ApiLoadMatch, ApiListMatch } from '../FreepublicapisTypes';
declare class ApiEntity extends FreepublicapisEntityBase<Api> {
    constructor(client: FreepublicapisSDK, entopts: any);
    make(this: ApiEntity): ApiEntity;
    load(this: any, reqmatch?: ApiLoadMatch, ctrl?: Control): Promise<ApiEntity>;
    list(this: any, reqmatch?: ApiListMatch, ctrl?: Control): Promise<ApiEntity[]>;
}
export { ApiEntity };
