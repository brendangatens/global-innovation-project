imagesLoaded( '#photo-gallery-body', function() {
  var msnry = new Masonry( '#photo-gallery-body', {
    itemSelector: '.photo-gallery-item',
    columnWidth: '.photo-gallery-item',
    percentPosition: true
  });
});
