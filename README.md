# LCBO My Products On Sale!

Show me my products that are currently on sale

## Synopsis

This project is built with Express, React, Apollo & GraphQL as a full stack implementation. All installation of the modules are the latest as of March 2018. 

## Motivation

This project exists to solve a particular use case. As a user, we want to be able to favourite our product and be notified with that product is on sale. In addition, when we are near a LCBO store, to be notified which of our products we have favourited are on sale at that location. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This repo has both the server and client set up.


### Installing

To begin starting the server

```
cd server
yarn install
yarn start:dev
```

To begin starting the client 

```
cd client
yarn install
yarn start:dev
```

To start mongodb
```
mongod
```

Add config to root directory
```
export const LCBO_API_ACCESS_KEY = '...'; // get from lcboapi.com
```

## Authors

* **Uma Umakanthan ** - *Initial work* - [umakajan](https://github.com/umakajan)


{ id: 289835,
       is_dead: false,
       name: 'Peller Estates French Cross Dry White',
       tags: 'peller estates french cross dry white wine canada region not specified andr
ew limited bottle',
       is_discontinued: false,
       price_in_cents: 1695,
       regular_price_in_cents: 1695,
       limited_time_offer_savings_in_cents: 0,
       limited_time_offer_ends_on: null,
       bonus_reward_miles: 0,
       bonus_reward_miles_ends_on: null,
       stock_type: 'LCBO',
       primary_category: 'Wine',
       secondary_category: 'White Wine',
       origin: 'Canada, Region Not Specified',
       package: '1500 mL bottle',
       package_unit_type: 'bottle',
       package_unit_volume_in_milliliters: 1500,
       total_package_units: 1,
       volume_in_milliliters: 1500,
       alcohol_content: 1200,
       price_per_liter_of_alcohol_in_cents: 941,
       price_per_liter_in_cents: 1130,
       inventory_count: 7485,
       inventory_volume_in_milliliters: 11227500,
       inventory_price_in_cents: 12687075,
       sugar_content: 'D - Dry',
       producer_name: 'Andrew Peller Limited',
       released_on: '2009-05-11',
       has_value_added_promotion: false,
       has_limited_time_offer: false,
       has_bonus_reward_miles: false,
       is_seasonal: false,
       is_vqa: false,
       is_ocb: false,
       is_kosher: false,
       value_added_promotion_description: null,
       description: null,
       serving_suggestion: 'Serve chilled as an Apperitif; with mild cheeses; finger food
s; turkey wraps with honey mustard dressing.',
       tasting_note: 'Pale yellow straw; Cooked pear and yellow apple aroma; slightly off
-dry with soft round fruit flavours and light tropical fruit notes; easy drinking wine.',

       updated_at: '2018-03-31T14:32:07.110Z',
       image_thumb_url: 'https://dx5vpyka4lqst.cloudfront.net/products/289835/images/thum
b.png',
       image_url: 'https://dx5vpyka4lqst.cloudfront.net/products/289835/images/full.jpeg'
,
       varietal: 'Blend',
       style: 'Light & Crisp',
       tertiary_category: null,
       sugar_in_grams_per_liter: 8,
       clearance_sale_savings_in_cents: 0,
       has_clearance_sale: false,
       product_no: 289835 },