
export interface IPageState {
    name: string;
    path: string;
    tree: { name: string; path?: string }[];
}