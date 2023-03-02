interface Currency {
    [x: string]: Key | null | undefined;
    name: string;
    rate: number;
}