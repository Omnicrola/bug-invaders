export default class EventBus {
    constructor() {
        this._pendingEvents = [];
        this._subscribers = {};
    };

    enqueue(event) {
        this._pendingEvents.push(event);
    }

    subscribe(eventType, subscriber) {
        if (!this._subscribers[eventType]) {
            this._subscribers[eventType] = [];
        }
        this._subscribers[eventType].push(subscriber);
    }

    unsubscribe(eventType, subscriberToRemove) {
        const subscribers = this._subscribers[eventType];
        const indexOf = subscribers.indexOf(subscriberToRemove);
        if (indexOf !== -1) {
            subscribers.splice(indexOf, 1);
        }
    }

    process() {
        const self = this;
        const allEvents = this._pendingEvents;
        this._pendingEvents = [];
        allEvents.forEach((event) => {
            const subscribers = self._subscribers[event.type];
            if (subscribers) {
                subscribers.forEach((subscriber) => {
                    subscriber(event);
                });
            }
        });
    }
}