export interface IMVGStation {
    id: number,
    name: string,
    place: string,
    products: string[]
}

export function searchForLocations(query: string): Promise<IMVGStation[]>;

export interface IMVGRoutePart {
    arrival: number,
    arrivalPlatform: string,
    departure: number,
    departurePlatform: string,
    destination: string,
    from: IMVGStation,
    to: IMVGStation,
    label: string,
    product: string,
    sev: boolean,
    connectionPartType: string
}

export interface IMVGRoute {
    arrival: number,
    departure: number,
    ringFrom: number,
    ringTo: number,
    connectionPartList: IMVGRoutePart[]
}

export function route(from: number, to: number, time?: number): Promise<IMVGRoute[]>;