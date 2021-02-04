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

  managersContainer.fadeOut(300);

  setTimeout(() => {
    managersContainer.empty();
    activeTabData.forEach((el) => {
      managersContainer.append(el.getAllMarkup());
      managersContainer.fadeIn('slow');
    });
  }, 300);
});
