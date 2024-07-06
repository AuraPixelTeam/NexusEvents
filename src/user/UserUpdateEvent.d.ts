import { User } from "discord.js";
import { Event } from "../Event";
export declare class UserUpdateEvent extends Event {
    oldUser: User;
    newUser: User;
    constructor(oldUser: User, newUser: User);
    getOldUser(): User;
    getNewUser(): User;
}
//# sourceMappingURL=UserUpdateEvent.d.ts.map