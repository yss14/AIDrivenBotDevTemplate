export interface IMVGStation {
    id: number,
    name: string,
    place: string,
    products: string[]
}

export function searchForLocations(query: string): Promise<IMVGStation[]>;