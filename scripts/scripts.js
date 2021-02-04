window.accordionHandler();

window.customData.manageCompany.forEach((el) => {});

const tabsContainer = $('#managersTabs');
const managersContainer = $('#managersData');
managersContainer.fadeIn();

tabsContainer.on('click', function (e) {
  let $target = $(e.target);
  if ($target.prop('tagName') != 'LI') return;

  $(this).find('.managers__position-item_active').removeClass('managers__position-item_active');
  $target.addClass('managers__position-item_active');

  let tabID = $target.attr('id');
  let activeTabData = window.customData[tabID];

  managersContainer.fadeOut('slow');
  // .animate(
  //   {
  //     opacity: 0,
  //   },
  //   15000,
  //   'linear',
  //   function () {
  //     $(this).empty();
  //   }
  // );

  setTimeout(() => {
    managersContainer.empty();
    activeTabData.forEach((el) => {
      managersContainer.append(el.getAllMarkup());
      managersContainer.fadeIn('slow');
    });
    //managersContainer.find('.managers__person-header_open').trigger('click').trigger('click');
  }, 500);
});
