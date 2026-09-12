export interface Api {
    auth?: string;
    avgResponseTime?: number;
    cors?: boolean;
    createdAt?: string;
    description?: string;
    documentationUrl?: string;
    endpoints?: any[];
    errorRate?: number;
    https?: boolean;
    id?: number;
    lastChecked?: string;
    method?: string;
    path?: string;
    reliability?: number;
    tags?: any[];
    title?: string;
    url?: string;
}
export interface ApiLoadMatch {
    id: number;
}
export interface ApiListMatch {
    limit?: number;
    page?: number;
    sort?: string;
    $action?: string;
    [action: string]: any;
}
