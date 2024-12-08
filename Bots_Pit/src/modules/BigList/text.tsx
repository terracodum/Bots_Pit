interface List {
    title: string;
    count: number;
    points: string[];
}

const move: List = {
    title: "Движение и управление:",
    count: 1,
    points: ["Игрок может двигаться в 4х направлениях (камера находится сверху под небольшим углом, как в Five Nights at Freddy’s: Into the Pit) "
    ]
}
const energy: List = {
    title: "Система энергии:",
    count: 2,
    points: ["Робот использует энергию, получаемую из биотоплива, которое производят милые зверьки и растения.",
        "Игрок должен собирать биотопливо и управлять энергией для выполнения задач и поддержания работоспособности робота."
    ]
}
const mind: List = {
    title: "Решение головоломок:",
    count: 2,
    points: ["Взаимодействие с окружающей средой для решения различных головоломок (перемещение объектов, активация механизмов, взлом систем). ",
        "Использование способностей робота для решения головоломок (например, электромагнитный импульс, ремонт)."
    ]
}
const fight: List = {
    title: "Боевая система:",
    count: 2,
    points: ["Боевые сцены выполнены в стиле Undertale с пиксельной графикой в 2.5D. ",
        "o	Игроку предстоит уклоняться от атак врагов и использовать различные тактики для победы."
    ]
}
const upgrade: List = {
    title: "Улучшение и кастомизация:",
    count: 3,
    points: ["Сбор ресурсов для улучшения характеристик робота.",
        "Установление активных и пассивных модулей.",
        "Возможность менять внешний вид робота."
    ]
}
const sum: List[] = [move, energy, mind, fight, upgrade]

export default sum;