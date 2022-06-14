const initialState = {
  banner: {
    data: {
      title: 'Интернет-торговля товарами без штрафов: платежи, законы, правила, налоги',
      speakerName: 'Татьяна Гринько',
      speakerShortDescription:
        'Основательница проекта по повышению налоговой грамотности для ИП и малого бизнеса nalogov.by (@nalogov_net)',
      backgroundImg: '',
    },
    selectors: {
      title: false,
      speakerName: false,
      speakerShortDescription: false,
      backgroundImg: false,
    },
  },
  mainContent: {
    data: {
      youWillLearn: {
        title: 'Из курса вы узнаете',
        content:
          '<ul><li>как&nbsp;продавать&nbsp;товары&nbsp;в&nbsp;интернете&nbsp;законно,&nbsp;в&nbsp;том&nbsp;числе&nbsp;используя&nbsp;соцсети</li><li>как&nbsp;правильно&nbsp;принимать&nbsp;оплату&nbsp;за&nbsp;товар,&nbsp;в&nbsp;том&nbsp;числе&nbsp;онлайн-платежи</li><li>какую&nbsp;систему&nbsp;налогообложения&nbsp;выбрать&nbsp;и&nbsp;как&nbsp;минимизировать&nbsp;налоговую&nbsp;нагрузку</li><li>что&nbsp;нужно&nbsp;знать&nbsp;о&nbsp;правилах&nbsp;торговли&nbsp;и&nbsp;о&nbsp;защите&nbsp;прав&nbsp;потребителей,&nbsp;чтобы&nbsp;защититься&nbsp;от&nbsp;потребительского&nbsp;экстремизма</li><li>как&nbsp;законно&nbsp;использовать&nbsp;социальные&nbsp;сети&nbsp;для&nbsp;рекламы</li><li>какие&nbsp;документы&nbsp;необходимо&nbsp;составлять&nbsp;и&nbsp;хранить&nbsp;при&nbsp;онлайн-продаже&nbsp;товаров</li></ul>',
      },
      eventProgram: {
        title: 'Программа',
        content:
          '<p>Цикл полезен вам, если вы зарабатываете или хотите зарабатывать в интернете. Гринько Татьяна, эксперт в области учета и налогообложения малого бизнеса и ИП, расскажет как избежать ошибок. Ведь онлайн-бизнес - это не просто “магазин на диване”. Здесь есть свои законы и правила.</p>',
      },
      vebinars: [
        {
          promoImg: promoImg,
          format: 'recording',
          date: currentDate,
          isPaid: true,
          cost: 9.99,
          currency: 'RUB',
          personalDiscount: 5,
          promoCode: '',
          video: false,
          videoName: '',
          videoDescription: '',
          videoDuration: 20,
          title: '<p>Продаем товары в интернете законно</p>',
          content:
            '<p>Требования к сайтам интернет-магазинов;</p><p>Шаги создания и регистрации интернет-магазина;</p><p>Зачем сайт, если есть соц.сети;</p><p>Обязательные способы приема платежей;</p>',
        },
        {
          promoImg: promoImg,
          format: 'live',
          date: currentDate,
          isPaid: false,
          cost: 0,
          currency: 'RUB',
          personalDiscount: 0,
          promoCode: '',
          video: false,
          videoName: '',
          videoDescription: '',
          videoDuration: 40,
          title: '<p>Продаем товары в интернете законно!</p>',
          content: '<p>asdasdasdasd</p>',
        },
        {
          promoImg: promoImg,
          format: 'live',
          date: currentDate,
          isPaid: false,
          cost: 0,
          currency: 'RUB',
          personalDiscount: 15,
          promoCode: '',
          video: false,
          videoName: '',
          videoDescription: '',
          videoDuration: 40,
          title: '<p>Продаем товары в интернете законно!!</p>',
          content: '<p>asdasdasdasd</p>',
        },
      ],
      fullCoursePayCard: {
        cost: '99.99',
        currency: 'RUB',
        discount: 15,
        costWithDiscount: 0,
        promoCode: '',
        promoCodeDiscount: 0,
      },
    },

    selectors: {
      youWillLearn: false,
      eventProgram: false,
      vebinars: false,
      fullCoursePayCard: false,
    },
  },
  aboutSpeaker: {
    data: {
      fullName: 'Татьяна Гринько',
      career: 'Бухгалтер-аналитик',
      description:
        '<p>Имеет 17-летний опыт работы в качестве главного бухгалтера, руководителя и собственника компаний в разных отраслях.</p><p>За 12 лет работы на общей системе налогообложения освоила и отработала на практике законные способы оптимизации налогов.</p><p>Без потерь прошла несколько налоговых проверок.</p><p>Последние 6 лет изучает нюансы и тонкости УСН и налогов для ИП и микробизнеса. Оказывает методическую помощь в написании программного обеспечения в области учета и налогов для ИП и малого бизнеса.</p><p>Действующий индивидуальный предприниматель и собственник ООО. Все предпринимательские боли знает изнутри. Готова делиться опытом не только как профессионал, но и как коллега.</p>',
      img: speakerImg,
      video: 'https://vimeo.com/189301566',
      videoName: 'Промо-видео',
    },
    selectors: { blockEditing: false },
  },
};
