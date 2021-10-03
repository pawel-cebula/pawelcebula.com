---
title: Converting snake_case and camelCase between SQL and JavaScript
description: Naming conventions can differ between languages and databases. If you're using ORMs, the conversion is most likely already built into them and made available when defining models or making queries. If you're using a lower level solution to connect to and query database, you will need to take care of these conversions yourself. This can be achieved either with a custom function or by using one of the existing packages, such as humps. When picking and implementing a solution, keep in mind whether it needs to deal with nested objects.
date: 2021-10-01
tags: ['posts', 'JavaScript', 'Databases', 'SQL']
---

A common issue that you might run into when working on a project that uses an SQL database and JavaScript on the server and/or client side is naming conventions.

Typically, SQL databases use `snake_case`, while JavaScript uses `camelCase`. To some extent these are just conventions but there are also technical reasons behind it. For example, SQL databases are generally case insensitive and in many implementations, the capital uppercase letters in names get converted to lowercase.

This means that you might need to find a way to manage conversions between `snake_case` and `camelCase`.

If you're using one of the ORMs, it's likely that this functionality is already built into it. For example, in [Sequelize ORM](https://sequelize.org/master/manual/naming-strategies.html) you can specify the `underscore` option when defining your models and by doing so, the fields will maintain `camelCase` on the JavaScript side and `snake_case` in the database column names.

```javascript
const User = sequelize.define('user', { username: Sequelize.STRING }, { 
  underscored: true, 
});
```

However, if you're not using an ORM and instead using a lower level querying method, such as commonly used [node-postgres](https://node-postgres.com/), you will need to address this yourself. As usual, there are a few ways to tackle this.

## `AS` clause in SQL

One approach that addresses this, is manually renaming in your SQL queries using `AS` clause. For example, when querying the database you could rename all column names to `camelCase`. You might need to use `""` double quotes around the `camelCase` in some of the SQL implementations to avoid the automated conversion to lowercase.

```sql
SELECT id, rating, review, created_at AS "createdAt", updated_at AS "updatedAt"
FROM checkin;
```

While this works, it is obviously very tedious and it would be better to address this in a more scalable way.

## Custom functions

Another approach would involve creating a custom function for these conversions. This could be done either as a database or a JavaScript function and would likely involve some regular expressions. For example, [Matthias Hager](https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript) shares some approaches on how to do it in JavaScript.

```javascript
const toCamel = (s) => {
  return s.replace(/([_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('_', '');
  });
};
```

While this is somewhat straightforward for a flat object, it gets a bit more tricky with a nested object, i.e. when in the returned object, one of the values is an array of objects. In that case you need a recursive approach that will also account for the different object types. If you want to avoid additional external dependencies, this is the way forward, and in his blog post Matthias shares one potential solution.

## `npm` packages

If external dependencies are not a constraint, then you might want to save yourself some time by using some of the existing libraries that take care of this common issue. As always, there are a lot of different packages out there that vary in the range and depth of options they offer.

[pg-camelcase](https://www.npmjs.com/package/pg-camelcase) is a lightweight option, however, it doesn't handle nested objects.

[humps](https://www.npmjs.com/package/humps) is another package that does address this issue and can handle nested objects. It offers two way conversion with `camelizeKeys(object, options)` and `decamelizeKeys(object, options)`, where the latter would be helpful when i.e. inserting rows into the database based on JavaScript inputs. There are also some ways to modify the conversion behaviour via a callback or options such as `separator` and `process`, in order to address various edge cases that might be specific to your implementation.

In order to apply the `camelizeKeys()` function to the values returned from your queries, you can `map()` over all of the returned rows in the query function. If you're using `node-postgres` with pooling, this is what your database connection code and exported query module might look like.

```javascript
const { Pool } = require('pg');
const humps = require('humps');
const { PG_CONFIG } = require('../utils/config');
const pool = new Pool(PG_CONFIG);

module.exports = {
  query: async (text, params) => {
    const response = await pool.query(text, params);
    response.rows = response.rows.map((row) => humps.camelizeKeys(row));
    return response;
  },
};
```

## Conclusion

Naming conventions can differ between languages and databases. If you're using ORMs, the conversion is most likely already built into them and made available when defining models or making queries. If you're using a lower level solution to connect to and query database, you will need to take care of these conversions yourself. This can be achieved either with a custom function or by using one of the existing packages, such as `humps`. When picking and implementing a solution, keep in mind whether it needs to deal with nested objects.
