export default class Tournament {
    constructor(
        public id: string,
        public name: string,
        public startDate: Date,
        public endDate: Date,
        public roundIds: string[],
        public teamIds: string[]
    ){}

    get completed(): boolean {
        return !(this.endDate === null);
    }

    get isOngoing(): boolean {
        return (this.startDate <= new Date()) && (this.endDate === null);
    }

    get isDue(): boolean {
        return (this.startDate > new Date()) && (this.endDate === null);
    }
}