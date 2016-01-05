Package.describe({
  name: 'polguixe:meteor-xml3d',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'xml3D library wrapped for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PolGuixe/meteor-xml3d',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  //Main Library
  api.addFiles('lib/xml3d.js');
  api.export('XML3D');

  //Extras
  api.addFiles([
    'extras/xml3d-camera.js',
    'extras/xml3d-stl-plugin.js'
  ]);


});
