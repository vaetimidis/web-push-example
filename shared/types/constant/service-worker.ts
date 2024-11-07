export interface PushManagerSubscriptionInfo {
  registration: ServiceWorkerRegistration
  subscription: PushSubscription | null
}
