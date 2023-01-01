import type { ParseSelector } from 'typed-query-selector/parser';
export declare type DelegateOptions = boolean | Omit<AddEventListenerOptions, 'once'>;
export declare type EventType = keyof GlobalEventHandlersEventMap;
declare type GlobalEvent = Event;
declare namespace delegate {
    type Subscription = {
        destroy: VoidFunction;
    };
    type EventHandler<TEvent extends GlobalEvent = GlobalEvent, TElement extends Element = Element> = (event: Event<TEvent, TElement>) => void;
    type Event<TEvent extends GlobalEvent = GlobalEvent, TElement extends Element = Element> = TEvent & {
        delegateTarget: TElement;
    };
}
/**
 * Delegates event to a selector.
 * @param options A boolean value setting options.capture or an options object of type AddEventListenerOptions without the `once` option
 */
declare function delegate<Selector extends string, TElement extends Element = ParseSelector<Selector, HTMLElement>, TEventType extends EventType = EventType>(base: EventTarget | Document | ArrayLike<Element> | string, selector: Selector, type: TEventType, callback: delegate.EventHandler<GlobalEventHandlersEventMap[TEventType], TElement>, options?: DelegateOptions): delegate.Subscription;
declare function delegate<TElement extends Element = HTMLElement, TEventType extends EventType = EventType>(base: EventTarget | Document | ArrayLike<Element> | string, selector: string, type: TEventType, callback: delegate.EventHandler<GlobalEventHandlersEventMap[TEventType], TElement>, options?: DelegateOptions): delegate.Subscription;
export default delegate;
