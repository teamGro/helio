(function () {
  const managersContainer = $('#managersData');

  window.accordionHandler = function () {
    managersContainer.on('click', function (e) {
      let $target = $(e.target);

      if (!$target.closest('.managers__person')) return;

      let activePerson = $('.managers__person_active');

      $target = $target.closest('.managers__person-header');
      let $parent = $target.parent();

      if (activePerson.length && activePerson.attr('data-num') == $parent.attr('data-num')) {
        activePerson.find('.managers__details').slideUp('200');

        setTimeout(() => {
          $target.removeClass('managers__person-header_open');
          $parent.removeClass('managers__person_active');
        }, 300);

        return;
      }

      if (activePerson.length) {
        activePerson.find('.managers__details').slideUp('200');
        setTimeout(() => {
          activePerson.find('.managers__person-header_open').removeClass('managers__person-header_open');
          activePerson.removeClass('managers__person_active');
        }, 300);
      }

      setTimeout(() => {
        $target.addClass('managers__person-header_open');
        $parent.find('.managers__details').slideDown('200');
        $parent.addClass('managers__person_active');
      }, 300);
    });
  };
})();
