"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardErrorEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class ShardErrorEvent extends Event_1.Event {
    constructor(error, shardId) {
        super(Events_1.Events.ShardError);
        this.error = error;
        this.shardId = shardId;
    }
    getError() {
        return this.error;
    }
    getShardId() {
        return this.shardId;
    }
}
exports.ShardErrorEvent = ShardErrorEvent;
//# sourceMappingURL=ShardErrorEvent.js.map