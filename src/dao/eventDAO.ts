export class EventDAO {
    target: string;
    event: string;
    details: string;
    result: string;

    constructor(target: string, event: string, details: string, result: string) {
        this.target = target;
        this.event = event;
        this.details = details;
        this.result = result;
    }
}