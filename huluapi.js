import imdb = require('imdb');

imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'foo', timeout: 30000}).then(console.log).catch(console.log);
