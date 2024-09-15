import settings from './assets/img/settings.svg'
import update from './assets/img/update.svg'
import reviews from './assets/img/reviews.svg'
import base from './assets/img/knowledge-base.svg'

export const columns = [
  { label: "Баркод", accessor: "code", sortable: true, sortByOrder: "desc" },
  { label: "Предмет", accessor: "item", sortable: true },
  { label: "Артикул поставщика", accessor: "art", sortable: true },
  { label: "Размер", accessor: "size", sortable: true },
  { label: "Доступно к заказу", accessor: "available", sortable: true },
  { label: "Товары в пути", accessor: "goods_on_the_way", sortable: true },
  { label: "Итого кол-во товара", accessor: "total_goods", sortable: true },
];

export const russianHeaders = [
    "ID",
    "Баркод",
    "Предмет",
    "Артикул поставщика",
    "Размер",
    "Доступно к заказу",
    "Товары в пути",
    "Итого кол-во товара",
  ];

export const filterOptions = [
    {
      value: 'Одежда',
    },
    {
      value: 'Аксессуары',
    },
    {
      value: 'Белье',
    },
    {
      value: 'Обувь',
    },
  ]

export const mainMenu = [
  {
    icon: settings,
    name: 'Настройки',
  },
  {
    icon: update,
    name: 'Внесение данных',
  },
  {
    icon: reviews,
    name: 'Отчеты',
  },
  {
    icon: base,
    name: 'База знаний',
  },
]

export const secondaryMenu = [
  {
    name: 'Пользовательское соглашение',
  },
  {
    name: 'Политика конфиденциальности',
  },
  {
    name: 'Юридическая информация',
  },
  {
    name: 'Публичная оферта',
  },
]
