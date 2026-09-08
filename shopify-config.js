// Shopify-Anbindung der Vorschau (Storefront API).
// Sobald Domain und Token eingetragen sind, übergibt „Zur Kasse“ den Warenkorb an Shopify und öffnet den echten Checkout;
// „Anmelden“ führt zum Shopify-Kundenkonto. Token: Shopify-Admin → Apps → App entwickeln → Storefront-API-Zugriff (nur Lese-/Cart-Rechte).
window.SHOPIFY_CONFIG = {
  domain: "",            // z. B. "gartenkontor-goymark.myshopify.com"
  storefrontToken: "",   // Storefront API access token (public)
  apiVersion: "2025-07",
  // Bestell-Router des Admin-Tools (Bestellungen der Vorschau-Kasse werden an die Außendienstler gemeldet; leer = aus)
  orderEndpoint: "https://blah-metres-carb-bucks.trycloudflare.com/api/orders"
};
