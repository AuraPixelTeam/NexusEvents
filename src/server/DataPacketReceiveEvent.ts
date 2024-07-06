import { Events } from "../Events";
import { ServerEvent } from "./ServerEvent";

export class DataPacketReceiveEvent extends ServerEvent {
    packet: any;

    constructor(packet: any) {
        super(Events.DataPacketReceive);
        this.packet = packet;
    }

    getPacket(): any {
        return this.packet;
    }
}