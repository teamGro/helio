(function () {
  window.customData = {
    motherCompany: [
      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header_open">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: './img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person_active" data-num="1">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },
    ],

    manageCompany: [
      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header_open">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: './img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person_active" data-num="1">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },

      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: './img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person" data-num="2">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },
    ],

    countryFabric: [
      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header_open">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: './img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person_active" data-num="1">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },

      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: './img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person" data-num="2">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },
    ],

    machine: [
      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header_open">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: '../img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person_active" data-num="1">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },

      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: '../img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person" data-num="2">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },
    ],

    fabric: [
      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header_open">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: '../img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person_active" data-num="1">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },

      {
        header: {
          title: 'Генеральный директор ООО “ГЕЛИО-ПАКС-АГРО”',
          getMarkup: function () {
            return `<div class="managers__person-header managers__person-header">
            <span class="managers__duties"> ${this.title} </span>
            <button class="managers__more" type="button">
              <img src="./img/arrow-btn.png" alt="показать" />
            </button>
          </div>`;
          },
        },
        body: {
          duties: 'Генеральный директор ООО «ГЕЛИО-ПАКС-АГРО» Зенчев Юрий Афанасьевич',
          photo: '../img/photo.png',
          name: 'Зенчев Юрий Афанасьевич (1970 г.р)',
          about: `<p class="managers__text">
                В 1993 году окончил Волгоградский сельскохозяйственный институт по специальности механизация сельского хозяйства.
             </p>
             <p class="managers__text">
                До работы в ООО «Гелио-Пакс-Агро» с 1993 г по 1998 г. работал в совхозе «Реконструкция» инженером-механиком, с 1999 г. по 2000 г. в ЗАО «Север» старшим слесарем, в 2000 году работал в ОАО «Панфиловский элеватор» заведующим гаражом, с 2000 по 2001 годы главным
                инженером в ООО «Гелио-Пакс-Агро 4», генеральный директор ООО «Гелио-Пакс-Агро» с июня 2001 года
             </p>`,
          getMarkup: function () {
            return `<div class="managers__details">
            <div class="managers__box">
              <div class="managers__img-box">
                <img class="managers__photo" src="${this.photo}" alt="" />

                <span class="managers__desc"> ${this.duties} </span>
              </div>

              <div class="managers__text">
                <h3 class="managers__name">${this.name}</h3>
                ${this.about}
              </div>
            </div>
          </div>`;
          },
        },
        getAllMarkup: function () {
          return `<div class="managers__person managers__person" data-num="2">
          ${this.header.getMarkup()}
          ${this.body.getMarkup()}
          </div`;
        },
      },
    ],
  };
})();
