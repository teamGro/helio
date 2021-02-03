const managersContainer = $('.managers__details-box');

managersContainer.on('click', function (e) {
    let target = $(e.target);

    if (!target.closest('.managers__person')) return;

    let activeElem = $(this).find('.managers__person_active');
    let activeDetails = activeElem.find('.managers__details');
    activeDetails.slideUp();

    let newActiveElem = target.closest('.managers__person');
    newActiveElem.addClass('managers__person_active');
    newActiveElem.find('.managers__details').slideDown();

    setTimeout(() => {
        activeElem.removeClass('managers__person_active');
    }, 300)
})

