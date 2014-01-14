//Publicamos aqui a colecao Posts
Meteor.publish('posts', function () {
    return Posts.find({});
});

//Definicao do quem pode fazer o que com a colecao Posts
Posts.allow({
  insert: function (userId, doc) {
        return true;
  },

  update: function (userId, doc, fields, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }


});
