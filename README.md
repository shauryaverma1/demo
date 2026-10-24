# Annaura website prototype

Responsive brand website and starter commerce flow.

## Pages and features
- index.html: brand story, categories, enquiry form, and third-party customization at the end.
- shop.html: filterable product catalogue, stock photography, illustrative INR prices and local basket.
- checkout.html: delivery details, basket summary and Razorpay integration hook.
- styles.css: responsive styling, animations, hover states and reduced-motion support.
- script.js: navigation, enquiry draft behavior and scroll reveals.
- shop.js: filters, basket storage, item removal and subtotals.
- payment.js: payment integration scaffold; live payments remain disabled until a secure server is configured.

## Before accepting real orders
1. Confirm products, stock, pack sizes, commercial prices, tax, shipping, returns and fulfilment.
2. Replace stock photography with approved Annaura product images and verify all product and certification claims.
3. Connect the enquiry form to a trusted backend or business email and publish a privacy notice.
4. Create server-side Razorpay order creation and signature verification. Keep the secret only on the server, verify webhooks and only mark orders paid after server confirmation.
5. Add order persistence, inventory, shipping/tax calculations, refund handling and production logging.
6. Test accessibility, mobile layouts and payment success/failure/cancel flows.

## Preview
Open index.html in a browser or publish the repository with GitHub Pages. Google Fonts and Unsplash images need internet access.

## Important
This is a functional front-end prototype, not yet a production-ready e-commerce backend. Do not accept real payments until server-side payment creation and verification are implemented and tested.