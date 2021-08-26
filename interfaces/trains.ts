export interface GeoJsonTrains {
    type: string
    features: Trains[]
}

export interface Trains {
    geometry: Geometry
    type: string
    properties: Properties
}

export interface Geometry {
    type: string
    coordinates: Array<number[]>
}

export interface Properties {
    third_ac: number
    arrival: string
    from_station_code: string
    name: string
    zone: string
    chair_car: number
    first_class: number
    duration_m: number
    sleeper: number
    from_station_name: string
    number: string
    departure: string
    return_train: string
    to_station_code: string
    second_ac: number
    classes: string
    to_station_name: string
    duration_h: number
    type: string
    first_ac: number
    distance: number
}

export default GeoJsonTrains;