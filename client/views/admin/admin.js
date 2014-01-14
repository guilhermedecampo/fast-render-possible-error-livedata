Template.admin.helpers({
  list: function () {
    return Posts.find({},{sort: {SortCreated: -1}, limit: 10});
  }
});

///////////////////////////////////////////////////////////

Template.admin.events({
  'click #submitPost': function (event, template) {
    var title        = template.find('#title').value,
        content      = template.find('#content').value,
        createdAt    = new Date();
    if (true)
    {
    Posts.insert({title: title, content: content, createdAt: createdAt });
    }
  }
});


