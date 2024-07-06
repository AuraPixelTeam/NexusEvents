import { User } from "discord.js";
import { Event } from "../Event";
import { Events } from "../Events";

export class UserUpdateEvent extends Event {
    oldUser: User;
    newUser: User;

    constructor(oldUser: User, newUser: User) {
        super(Events.UserUpdate);
        this.oldUser = oldUser;
        this.newUser = newUser;
    }

    getOldUser(): User {
        return this.oldUser;
    }

    getNewUser(): User {
        return this.newUser;
    }
}