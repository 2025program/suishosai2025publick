// /utils/festival.ts
import {
    Drum,
    Moon,
    Soup,
    Sun,
    type LucideIcon,
} from "lucide-react";

export type FestivalItem = {
    id: number;
    title: string;
    reading?: string;
    // 複数の属性を持たせるため、icon プロパティを attributes 配列に変更
    attributes: LucideIcon[];
    floor?: number;
    x?: number;
    y?: number;
    slug?: string;
    class?: string;
    img?: string;
    location?: string;
}

// 属性の優先順位（サイドバー上で「主要な」属性として使う）
export const attributePriority: LucideIcon[] = [Sun, Moon, Drum, Soup];

/**属性について　Drum→ステージ、Soup→調理食販、Sun→全日制団体、Moon→定時制団体 */

export const festivalItems: FestivalItem[] = [
    //1年
    { id: 1, img: 'event_1.jpg', title: 'みぞぐちのみぞしる”ミゾベガス”～かけるなら今でしょ～', reading: "みぞぐちのみぞしる”ミゾベガス”～かけるならいまでしょ～", attributes: [Sun], floor: 2, x: 458, y: 380, class: "1-1", location: "2-8" },
    { id: 2, img: 'event_2.jpg', title: '謎解き縁日', reading: "なぞときえんにち", attributes: [Sun], floor: 4, x: 809, y: 380, class: "1-2", location: "1-2" },
    { id: 3, img: 'event_3.jpg', title: '焼き鳥屋貴鳥', reading: "やきとりやきとり", attributes: [Sun, Soup], floor: 1, x: 571, y: 290, class: "1-3", location: "屋外" },
    { id: 4, img: 'event_4.jpg', title: '清水の国のアリス', reading: "しみずのくにのありす", attributes: [Sun], floor: 4, x: 598, y: 380, class: "1-4", location: "1-4" },
    { id: 5, img: 'event_5.png', title: 'たこ焼きたべChina!!', reading: "たこやきたべちゃいな", attributes: [Sun, Soup], floor: 1, x: 518, y: 290, class: "1-5", location: "屋外" },
    { id: 6, img: 'event_6.jpg', title: '衰乱研究所～覚悟を持って入所してください～', reading: "すいらんけんきゅうじょ～かくごをもってにゅうしょしてください～", attributes: [Sun], floor: 4, x: 458, y: 380, class: "1-6", location: "1-6" },
    { id: 7, img: 'event_7.jpg', title: '込宮隆の失踪', reading: "こみやたかしのしっそう", attributes: [Sun], floor: 4, x: 316, y: 380, class: "1-7", location: "1-7" },
    { id: 8, img: 'event_8.jpg', title: 'SUPER SUITENDO WORLD', reading: "すーぱーすいてんどーわーるど", attributes: [Sun], floor: 3, x: 458, y: 380, class: "1-8", location: "2-4" },
    { id: 9, img: 'event_9.png', title: 'おばけたたき', attributes: [Sun], floor: 3, x: 809, y: 380, class: "1-9", location: "1-9" },
    //2年
    { id: 10, img: 'event_10.jpg', title: 'をかしなお菓子', reading: "をかしなおかし", attributes: [Sun, Soup], floor: 2, x: 527, y: 640, class: "2-1", location: "3-7" },
    { id: 11, img: 'event_11.jpg', title: '純喫茶 翠晶浪漫', reading: "じゅんきっさ すいしょうろまん", attributes: [Sun, Soup], floor: 3, x: 598, y: 380, class: "2-2", location: "2-2" },
    { id: 12, img: 'event_12.jpg', title: 'パイレーツ呪われた嶋', reading: "のろわれたしま", attributes: [Sun], floor: 3, x: 527, y: 380, class: "2-3", location: "2-3" },
    { id: 13, img: 'event_13.jpg', title: 'HASEGAWAFFLE', reading: "はせがわっふる", attributes: [Sun, Soup], floor: 1, x: 244, y: 485, class: "2-4", location: "屋外" },
    { id: 14, img: 'event_14.png', title: 'マッスルカフェ！', reading: "まっするかふぇ", attributes: [Sun, Soup], floor: 1, x: 639, y: 254, class: "2-5", location: "屋外" },
    { id: 15, img: 'event_15.jpg', title: 'トイ・ニイベ・マニア！', reading: "とい・にいべ・まにあ", attributes: [Sun], floor: 2, x: 598, y: 380, class: "2-6", location: "2-6" },
    { id: 16, img: 'event_16.jpg', title: '翠嵐クレープ～モリヤの翠イーツ屋さん～', reading: "すいらんくれーぷ～もりやのすいーつやさん～", attributes: [Sun, Soup], floor: 1, x: 244, y: 440, class: "2-7", location: "屋外" },
    { id: 17, img: 'event_17.jpg', title: '翔涼祭', reading: "しょうりょうさい", attributes: [Sun, Soup], floor: 2, x: 527, y: 380, class: "2-8", location: "2-7" },
    { id: 18, img: 'event_18.jpg', title: '末包の囁き', reading: "すえかねのささやき", attributes: [Sun], floor: 2, x: 316, y: 380, class: "2-9", location: "2-9" },
    //3年
    { id: 19, img: 'event_19.jpg', title: 'スナダン・ジョーンズ～宝を隠す山～', reading: "すなだん・じょーんず～たからをかくすやま～", attributes: [Sun], floor: 2, x: 613, y: 640, class: "3-1,3-2", location: "多目的教室" },
    { id: 20, img: 'event_20.jpg', title: '新世紀翠嵐シューティングコースター～全授業数学化計画～', reading: "しんせいきすいらんしゅーてぃんぐこーすたー～ぜんじゅぎょうすうがくかけいかく～", attributes: [Sun], floor: 1, x: 314, y: 432, class: "3-3,3-5", location: "みらい館" },
    { id: 21, img: 'event_21.jpg', title: 'MOMI of Terror', reading: "もみおふてらー", attributes: [Sun], floor: 1, x: 666, y: 380, class: "3-4", location: "3-4" },
    { id: 22, img: 'event_22.jpg', title: 'あつまれ！かとひろの森', reading: "あつまれ！かとひろのもり", attributes: [Sun], floor: 2, x: 666, y: 380, class: "3-6", location: "3-3" },
    { id: 23, img: 'event_23.jpg', title: 'コマーツ魔法学校', reading: "こまーつまほうがっこう", attributes: [Sun], floor: 1, x: 598, y: 380, class: "3-7", location: "3-5" },
    { id: 24, img: 'event_24.jpg', title: 'えじえじのはちみつのりハント', attributes: [Sun], floor: 1, x: 525, y: 380, class: "3-8", location: "3-6" },
    { id: 25, img: 'event_25.gif', title: 'DESCAFE Excella', reading: "ですかふぇ えくせら", attributes: [Sun, Soup], floor: 2, x: 809, y: 380, class: "3-9", location: "3-2" },
    //部活・委員会・有志 
    { id: 26, img: 'event_26.gif', title: '圧倒的IT研究部', reading: "あっとうてきあいてぃーけんきゅうぶ", attributes: [Sun], floor: 3, x: 173, y: 620, class: "IT研究部", location: "コンピュータ室" },
    { id: 27, img: 'event_27.jpg', title: '横浜翠嵐高校 校歌うたうま選手権in翠翔祭', reading: "よこはますいらんこうこう こうかうたうませんしゅけん", attributes: [Sun], floor: 4, x: 879, y: 380, class: "SHBC", location: "1-1" },
    { id: 28, img: 'event_28.jpg', title: '翠嵐王', reading: "すいらんおう", attributes: [Sun], floor: 1, x: 657, y: 165, class: "クイズ研究部", location: "化学実験室" },
    { id: 29, img: 'event_29.jpg', title: '三苫の1mmゲーム', reading: "みとまのいちみり", attributes: [Sun], floor: 2, x: 879, y: 380, class: "サッカー部", location: "3-1" },
    { id: 30, img: 'event_30.jpg', title: 'わくわく！バスケットラックアウト', attributes: [Sun], floor: 2, x: 385, y: 640, class: "バスケ部", location: "3-8" },
    { id: 31, img: 'event_31.png', title: 'みねとひあさのかみかくし', attributes: [Sun], floor: 4, x: 525, y: 380, class: "バド部", location: "1-5" },
    { id: 32, img: 'event_32.jpg', title: 'ハンドボール 水風船', reading: "ハンドボール みずふうせん", attributes: [Sun], floor: 1, x: 195, y: 720, class: "ハンド部", location: "部室棟" },
    { id: 33, img: 'event_33.jpg', title: 'ベーゴマ体験', reading: "ベーゴマたいけん", attributes: [Sun], floor: 3, x: 667, y: 165, class: "ベーゴマ愛好", location: "書道室" },
    { id: 34, img: 'event_34.jpg', title: '翠翔祭ライブ', reading: "すいしょうさいライブ", attributes: [Sun], floor: 1, x: 868, y: 145, class: "ポプソン", location: "テキサス" },
    { id: 35, img: 'event_35.png', title: '九宝祭～翠嵐サラダボウル～', reading: "くほうさい～すいらんさらだぼうる～", attributes: [Sun], floor: 3, x: 879, y: 380, class: "演劇", location: "1-8" },
    { id: 36, img: 'event_36.jpg', title: '科学部LAB', reading: "かがくぶらぼ", attributes: [Sun], floor: 2, x: 685, y: 165, class: "科学部", location: "物理実験室" },
    { id: 37, img: 'event_37.png', title: '王手！ 盤上の祭典in翠嵐', reading: "おうて！ ばんじょうのさいてんいんすいらん", attributes: [Sun], floor: 1, x: 500, y: 165, class: "棋道部", location: "生物室" },
    { id: 38, img: 'event_38.jpg', title: '翠嵐かるた道場', reading: "すいらんかるたどうじょう", attributes: [Sun], floor: 3, x: 667, y: 165, class: "競技かるた部", location: "書道室" },
    { id: 39, img: 'event_39.png', title: '翠嵐 Global Connection', reading: "すいらんぐろーばるこねくしょん", attributes: [Sun], floor: 3, x: 666, y: 380, class: "国際交流", location: "2-1" },
    { id: 40, img: 'event_40.png', title: '写真部作品展示', reading: "しゃしんぶさくひんてんじ", attributes: [Sun], floor: 2, x: 368, y: 490, class: "写真部", location: "2階渡り廊下" },
    { id: 41, img: 'event_41.jpg', title: '翠嵐書道展', reading: "すいらんしょどうてん", attributes: [Sun], floor: 3, x: 368, y: 490, class: "書道部", location: "3階渡り廊下" },
    { id: 42, img: 'event_42.jpg', title: '新聞配布', reading: "しんぶんはいふ", attributes: [Sun], floor: 3, x: 368, y: 490, class: "翠嵐時報", location: "3階渡り廊下" },
    { id: 43, img: 'event_43.png', title: 'あつまれすうがく村', reading: "あつまれすうがくむら", attributes: [Sun], floor: 1, x: 657, y: 165, class: "数学研究部", location: "化学実験室" },
    { id: 44, img: 'event_44.jpg', title: 'のびるくん本舗', reading: "のびるくんほんぽ", attributes: [Sun], floor: 4, x: 666, y: 380, class: "生徒会", location: "1-3" },
    { id: 45, img: 'event_45.jpg', title: '文化祭の情熱の半分でいいから生物部に分けて頂戴', reading: "ぶんかさいのじょうねつのはんぶんでいいからせいぶつぶにわけてちょうだい", attributes: [Sun], floor: 1, x: 500, y: 165, class: "生物部", location: "生物室" },
    { id: 46, img: 'event_46.jpg', title: '翠嵐茶館', reading: "すいらんちゃかん", attributes: [Sun, Soup], floor: 2, x: 817, y: 620, class: "茶道部", location: "被服室" },
    { id: 47, img: 'event_47.jpg', title: '鉄道研究同好会', reading: "てつどうけんきゅうぶ", attributes: [Sun], floor: 3, x: 613, y: 640, class: "鉄道研究同好", location: "社会科教室" },
    { id: 48, img: 'event_48.jpg', title: 'プラネタリウムと展示', reading: "ぷらねたりうむとてんじ", attributes: [Sun], floor: 3, x: 316, y: 380, class: "天文部", location: "2-5" },
    { id: 49, img: 'event_49.jpg', title: '翠嵐万博～アートパビリオン～', reading: "すいらんばんぱく～あーとぱびりおん～", attributes: [Sun], floor: 3, x: 817, y: 620, class: "美術部", location: "美術室" },
    { id: 50, img: 'event_50.png', title: '文芸部の無料部誌配布', reading: "ぶんげいぶのむりょうぶしはいふ", attributes: [Sun], floor: 3, x: 368, y: 490, class: "文芸部", location: "3階渡り廊下" },
    { id: 51, img: 'event_51.png', title: 'まんけん2025', attributes: [Sun], floor: 4, x: 525, y: 380, class: "漫研", location: "1-5" },
    { id: 52, img: 'event_52.jpg', title: '速球王', reading: "そっきゅうおう", attributes: [Sun], floor: 1, x: 110, y: 390, class: "野球部", location: "グラウンド" },
    { id: 53, img: 'event_53.png', title: 'ぴったり走れ!全力Q&RUN!', reading: "ぴったりはしれ！ぜんりょくきゅーあんどらん", attributes: [Sun], floor: 2, x: 385, y: 640, class: "陸上競技部", location: "3-8" },
    { id: 54, img: 'event_54.png', title: '異世界ツアーからの脱出', reading: "いせかいつあーからのだっしゅつ", attributes: [Sun], floor: 2, x: 457, y: 640, class: "有志", location: "選択A" },
    { id: 55, img: 'event_55.jpg', title: '3D空中構造ゼミ 探求発表', reading: "すりーでぃーくうちゅうこうぞうぜみ たんきゅうはっぴょう", attributes: [Sun], floor: 1, x: 110, y: 390, class: "有志", location: "グラウンド" },
    { id: 56, img: 'event_56.png', title: '[革命]学生一人で企画やってみたPt(n+1)', reading: "[かくめい]がくせいひとりできかくやってみたPt(n+1)", attributes: [Sun], floor: 2, x: 755, y: 250, class: "有志", location: "2階渡り廊下" },
    { id: 57, img: 'event_57.jpg', title: 'アジアンダイニングスイランパラダイス', reading: "あじあんだいにんぐぱらだいす", attributes: [Moon, Soup], floor: 1, x: 710, y: 205, class: "定時制", location: "屋外" },
    { id: 58, img: 'event_58.png', title: '定時制 多文化共生研究会', reading: "ていじせい たぶんかきょうせいけんきゅうかい", attributes: [Moon], floor: 3, x: 666, y: 380, class: "多文化共生", location: "2-1" },
    { id: 59, img: 'event_59.jpg', title: 'アジアンスイーツパラダイス', reading: "あじあんすいーつぱらだいす", attributes: [Moon, Soup], floor: 2, x: 314, y: 640, class: "定時制3,4年", location: "3-9" },
    { id: 60, img: 'event_60.jpg', title: 'イラスト・写真部', reading: "いらすと・しゃしんぶ", attributes: [Moon], floor: 4, x: 666, y: 380, class: "イラスト写真", location: "1-3" },
    //ステージ
    { id: 61, img: 'event_61.jpg', title: '演劇「僕らの生徒会戦争」', reading: "えんげき「ぼくらのせいとかいせんそう」", attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "生徒会", location: "野外ステージ" },
    { id: 62, img: 'event_62.png', title: 'ミントブルー', attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "吹奏楽部", location: "野外ステージ" },
    { id: 63, img: 'event_63.jpg', title: 'Crown Quintet the 2nd', reading: "くらうんくいんてっとざせかんど", attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "有志", location: "野外ステージ" },
    { id: 64, img: 'event_58.png', title: '定時制 多文化共生', reading: "ていじせい たぶんかきょうせい", attributes: [Moon, Drum], floor: 1, x: 192, y: 211, class: "定時制", location: "野外ステージ" },
    { id: 65, img: 'event_65.jpg', title: 'バスケットボール部', reading: "ばすけっとぼーるぶ", attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "バスケ部", location: "野外ステージ" },
    { id: 66, img: 'event_66.png', title: '翠嵐スター発掘', reading: "すいらんすたーはっくつ", attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "翠実総務", location: "野外ステージ" },
    { id: 67, img: 'event_67.png', title: 'すぱげてぃ', attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "吹奏楽部", location: "野外ステージ" },
    { id: 68, img: 'event_68.png', title: 'ミスミス・裏ミスミス', reading: "みすみす・うらみすみす", attributes: [Sun, Drum], floor: 1, x: 192, y: 211, class: "翠実総務", location: "野外ステージ" },
    { id: 69, img: 'event_69.jpg', title: 'スイラン・ブラバン・ビックバン！', reading: "すいらん・ぶらばん・びっくばん", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "吹奏楽部", location: "体育館ステージ" },
    { id: 70, img: 'event_70.jpg', title: '弦楽部', reading: "げんがくぶ", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "弦楽部", location: "体育館ステージ" },
    { id: 71, img: 'event_71.jpg', title: '書道部', reading: "しょどうぶ", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "書道部", location: "体育館ステージ" },
    { id: 72, img: 'event_72.jpg', title: 'ダンス部', reading: "だんすぶ", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "ダンス部", location: "体育館ステージ" },
    { id: 73, img: 'event_73.png', title: '音楽部', reading: "おんがくぶ", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "音楽部", location: "体育館ステージ" },
    { id: 74, img: 'event_74.png', title: '朝鮮学校舞踊部', reading: "ちょうせんがっこうぶようぶ", attributes: [Sun, Drum], floor: 1, x: 218, y: 95, class: "有志", location: "体育館ステージ" },
];
