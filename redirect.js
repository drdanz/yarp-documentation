(function() {
  function patch_url(url) {
    return url.replace(/docs\.drdanz\.it\//, 'docs.drdanz.it/git-master/');
  }

  function patch_missing_url(url) {
    return url.replace(/docs\.drdanz\.it\/.+/, 'docs.drdanz.it/git-master/');
  }

  $(document).ready(function() {

    var timeout = 3; // seconds
    var url = window.location.href;
    var new_url = patch_url(url);

    // Disable timeout on the main page
    file = window.location.href.split('/')[ window.location.href.split('/').length - 1 ];
    if (file == "" || file.substring(0, 10) == "index.html") {
      timeout = 0;
    }

    if (new_url != url) {
      // check beforehand if url exists, else redirect to version's start page
      $.ajax({
        url: new_url,
        success: function() {
            $('head').append( '<meta http-equiv="refresh" content="' + timeout + '; url=' + new_url + '" />' );
            $('.textblock').html('<p>This page has moved.</p><p>If you are not redirected automatically within a few seconds, follow this link to the new address: <a href="'
                + new_url + '">' + new_url + "</a>.</p>");
            setTimeout(function () { window.location.href = new_url; }, timeout * 1000);
        },
        error: function() {
            new_url = patch_missing_url(url);
            $('head').append( '<meta http-equiv="refresh" content="' + timeout + '; url=' + new_url + '" />' );
            $('.textblock').html('<p>This page no longer exists.</p><p>If you are not redirected automatically within a few seconds, follow this link to the YARP documentation: <a href="'
                + new_url + '">' + new_url + "</a>.</p>");
            setTimeout(function () { window.location.href = new_url; }, timeout * 1000);
        }
      });
    } else {
      // Either a local copy of the documentation, or on the wrong website.
      path = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
      if (path != "") {
          path = path + "/";
      }
      new_url = path + "git-master/" + file;
      $('head').append( '<meta http-equiv="refresh" content="' + timeout + '; url=' + new_url + '" />' );
      $('.textblock').html('<p>This page has moved.</p><p>If you are not redirected automatically within a few seconds, follow this link to the new address: <a href="'
          + new_url + '">' + new_url + "</a>.</p>");
      setTimeout(function () { window.location.href = new_url; }, timeout * 1000);
    }
  });
})();
