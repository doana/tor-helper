export class WeatherDAO {
    condition: string;
    description: string;
    effect: string;

    constructor(condition: string, description: string, effect: string) {
        this.condition = condition;
        this.description = description;
        this.effect = effect;
    }
}