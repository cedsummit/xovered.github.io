// Contentful
var client = contentful.createClient({
  // ID of Space
  space: '38fezq194ho6',

  // A valid access token within the Space
  accessToken: '5f0add48f09832c94870f45824657be5a8a57d6e18d34e1f915a61399e7f4ae4',

  // Enable or disable SSL. Enabled by default.
  secure: true
});

// Get Assets using callback interface
client.entries({}, function(err, entries) {
  if (err) { console.log(err); return; }
  // Load content into template

  entries.forEach(function (e) {
    var speaker = e.fields;
    console.log(speaker);
    var source = $("#speakers-template").html();
    var template = Handlebars.compile(source);
    // $('.speakers').append(template(speaker));
  });
});