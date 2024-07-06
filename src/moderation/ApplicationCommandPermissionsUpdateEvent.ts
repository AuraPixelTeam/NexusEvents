import { Events } from "../Events";
import { ModerationEvent } from "./ModerationEvent";

export class ApplicationCommandPermissionsUpdateEvent extends ModerationEvent {
    data: any;

    constructor(data: any) {
        super(Events.ApplicationCommandPermissionsUpdate, null);
        this.data = data;
    }

    getData(): any {
        return this.data;
    }
}