export interface Schedule {
    day: string;
    hour: {
        to: string;
        from: string;
    };
}

export interface IHours {
    to: string;
    from: string;
    days: number[];
}
