export interface IHours {
    to: string;
    from: string;
    days: number[];
}

export interface IRestaurant {
    restaurant: {
        id: number;
        name: string;
        image?: string;
        hours?: IHours[];
        address?: string;
    };
    id: number;
    name: string;
    image?: string;
    hours?: IHours[];
    address?: string;
    key?: number;
}
