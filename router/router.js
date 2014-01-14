//Define qual template sera base onde o iron-router vai renderizar o template.
Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  //Router para a area Administrativa
  this.route('admin', {path: '/',
    //Antes de renderizar o template verifica se o usuario esta logado. Se nao o rediciona para index a pagina inicial
    before: function () {
    },
    fastRender: true
  });
  //Router para a pagina inicial com todos os posts e a barra lateral.

});


