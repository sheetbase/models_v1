# Sheetbase Models

Commonly used table structures for using Google Spreadsheet with Sheetbase backend.

<!-- <block:header> -->

[![License][license_badge]][license_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </block:header> -->

## Types

`npm install --save @sheetbase/models`

```ts
import { Post } from '@sheetbase/models';

const posts: Post[] = [];
const post: Post = {};

```

## Models

### Categories `101`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/categories.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/category.ts)

### Messages `111`

- [Schema](https://github.com/sheetbase/models/blob/master/models/messages.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/message.ts)

### Notifications `112`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/notifications.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/notification.ts)

### Orders `108`

- [Schema](https://github.com/sheetbase/models/blob/master/models/orders.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/order.ts)

### Packages `109`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/packages.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/package.ts)

### Pages `103`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/pages.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/page.ts)

### Posts `104`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/posts.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/post.ts)

### Products `107`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/products.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/product.ts)

### Promotions `113`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/promotions.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/promotion.ts)

### Requests `110`

- [Schema](https://github.com/sheetbase/models/blob/master/models/requests.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/request.ts)

### Tags `102`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/tags.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/tag.ts)

### Threads `105`

- Public
- [Schema](https://github.com/sheetbase/models/blob/master/models/threads.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/thread.ts)

### Users `106`

- [Schema](https://github.com/sheetbase/models/blob/master/models/users.json)
- [Types](https://github.com/sheetbase/models/blob/master/src/user.ts)

## Lisence

Sheetbase Models is released under the [MIT](https://github.com/sheetbase/models/blob/master/LICENSE) license.

<!-- <block:footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/models/blob/master/LICENSE
[patreon_badge]: https://lamnhan.github.io/assets/images/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://lamnhan.github.io/assets/images/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </block:footer> -->