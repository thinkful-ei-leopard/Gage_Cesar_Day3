function handleThumbnailClicks() {
  $('.thumbnail').on('click', e => {
      const newSrc = $(event.currentTarget).find('img').attr('src');
      const newAlt = $(event.currentTarget).find('img').attr('alt');;
      $('.mainImg').attr('src', newSrc).attr('alt', newAlt);
    });
}

$(handleThumbnailClicks);