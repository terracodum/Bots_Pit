interface Article {
    title: string;
    text: string;
}

const introd: Article = {title: "Введение",text: '"Роботы и Яма" - это игра, где игрок управляет универсальным роботом помощником, выполняющим задачи суперкомпьютера в огромном подземном комплексе. Цивилизация, проживающая в нем, давно вымерла, и теперь комплекс населен лишь роботами и необычными милыми зверьками. Основная механика игры связана с получением энергии из биотоплива, производимого зверьками и растениями. Главный акцент делается на сюжете и головоломках, а боевые сцены выполнены в стиле Undertale с пиксельной графикой в 2.5D. '}
const plot: Article = {title: "Сюжет", text: 'В далеком прошлом загадочная цивилизация вымерла по неизвестным причинам, оставив после себя огромный подземный комплекс. Игрок управляет универсальным роботом-помощником по имени "Арго", оснащённым дискетным приёмником в голове. Арго активируется суперкомпьютером "Атлас", представляющим собой несколько мониторов, оплетённых светящимся деревом. Атлас руководит действиями Арго, давая ему задачи по восстановлению и поддержанию комплекса.'}
const conc: Article = {title: "Заключение", text: '"Роботы и Яма" предлагает игрокам уникальный опыт управления роботом в постапокалиптическом подземном комплексе. Игра сочетает в себе увлекательный сюжет, сложные головоломки и оригинальную боевую систему, что делает её привлекательной для широкой аудитории. Разнообразие концовок добавляет глубину игровому процессу.'}

const sum: Article[] = [introd, plot, conc]
export default sum;