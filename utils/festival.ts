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
    location?: string;
}

// 属性の優先順位（サイドバー上で「主要な」属性として使う）
export const attributePriority: LucideIcon[] = [Sun, Moon, Drum, Soup];

/**属性について　Drum→ステージ、Soup→調理食販、Sun→全日制団体、Moon→定時制団体 */

export const festivalItems: FestivalItem[] = [
    //1年
    { id: 1, title: 'みぞぐちのみぞしる”ミゾベガス”～かけるなら今でしょ～', reading: "みぞぐちのみぞしる”ミゾベガス”～かけるならいまでしょ～", attributes: [Sun], floor: 4, x: 1165, y: 500, class: "1-1", location: "2-8" },
    { id: 2, title: '謎解き縁日', reading: "なぞときえんにち", attributes: [Sun], floor: 4, x: 1085, y: 500, class: "1-2", location: "1-2" },
    { id: 3, title: '焼き鳥屋貴鳥', reading: "やきとりやきちょう", attributes: [Sun, Soup], floor: 4, x: 935, y: 500, class: "1-3", location: "屋外" },
    { id: 4, title: '清水の国のアリス', reading: "しみずのくにのありす", attributes: [Sun], floor: 4, x: 852, y: 500, class: "1-4", location: "1-4" },
    { id: 5, title: 'たこ焼きたべChina！！', reading: "たこやきたべちゃいな", attributes: [Sun, Soup], floor: 4, x: 768, y: 500, class: "1-5", location: "屋外" },
    { id: 6, title: '翠嵐研究所～覚悟を持って入所してください～', reading: "すいらんけんきゅうじょ～かくごをもってにゅうしょしてください～", attributes: [Sun], floor: 4, x: 683, y: 500, class: "1-6", location: "1-6" },
    { id: 7, title: '込宮隆の失踪', reading: "こみやたかしのしっそう", attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-7", location: "1-7" },
    { id: 8, title: 'SUPER SUITENDO WORLD', reading: "すーぱーすいてんどーわーるど", attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-8", location: "2-4" },
    { id: 9, title: 'おばけたたき', attributes: [Sun], floor: 4, x: 533, y: 500, class: "1-9", location: "1-9" },
    //2年
    { id: 10, title: 'をかしなお菓子', reading: "をかしなおかし", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-1", location: "3-7" },
    { id: 11, title: '純喫茶　翠晶浪漫', reading: "じゅんきっさ　すいしょうろまん", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-2", location: "2-2" },
    { id: 12, title: 'パイレーツ呪われた嶋', reading: "のろわれたしま", attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-3", location: "2-3" },
    { id: 13, title: 'HASEGAWAFFLE', reading: "はせがわっふる", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-4", location: "屋外" },
    { id: 14, title: 'マッスルカフェ！', reading: "まっするかふぇ", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-5", location: "屋外" },
    { id: 15, title: 'トイ・ニイベ・マニア！', reading: "とい・にいべ・まにあ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-6", location: "2-6" },
    { id: 16, title: '翠嵐クレープ～モリヤの翠イーツ屋さん～', reading: "すいらんくれーぷ～もりやのすいーつやさん～", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "2-7", location: "屋外" },
    { id: 17, title: '翔涼祭', reading: "しょうりょうさい", attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-8", location: "2-7" },
    { id: 18, title: '末包の囁き', reading: "すえかねのささやき", attributes: [Sun], floor: 1, x: 111, y: 111, class: "2-9", location: "2-9" },
    //3年
    { id: 19, title: 'スナダン・ジョーンズ～宝を隠す山～', reading: "すなだん・じょーんず～たからをかくすやま～", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-1,3-2", location: "多目的教室" },
    { id: 20, title: '新世紀翠嵐シューティングコースター～翠嵐全授業数学化計画～', reading: "しんせいきすいらんしゅーてぃんぐこーすたー～すいらんぜんじゅぎょうすうがくかけいかく～", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-3,3-5", location: "みらい館" },
    { id: 21, title: 'MOMI of Terror', reading: "もみおふてらー", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-4", location: "3-4" },
    { id: 22, title: 'あつまれ！かとひろの森', reading: "あつまれ！かとひろのもり", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-6", location: "3-3" },
    { id: 23, title: 'コマーツ魔法学校', reading: "こまーつまほうがっこう", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-7", location: "3-5" },
    { id: 24, title: 'えじえじのはちみつのりハント', attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-8", location: "3-6" },
    { id: 25, title: 'DESCAFE Excella', reading: "ですかふぇ えくせら", attributes: [Sun], floor: 1, x: 111, y: 111, class: "3-9", location: "3-2" },
    //部活・委員会・有志 
    { id: 26, title: '圧倒的IT研究部', reading: "あっとうてきあいてぃーけんきゅうぶ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "IT研究部", location: "コンピュータ室" },
    { id: 27, title: '横浜翠嵐高校 校歌うたうま選手権in翠翔祭', reading: "よこはますいらんこうこう こうかうたうませんしゅけん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "SHBC", location: "1-1" },
    { id: 28, title: '翠嵐王', reading: "すいらんおう", attributes: [Sun], floor: 1, x: 111, y: 111, class: "クイズ研究部", location: "化学実験室" },
    { id: 29, title: '三苫の1mmゲーム', reading: "みとまのいちみり", attributes: [Sun], floor: 1, x: 111, y: 111, class: "サッカー部", location: "3-1" },
    { id: 30, title: 'わくわく！バスケットラックアウト', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バスケットボール部", location: "3-8" },
    { id: 31, title: 'みねとひあさのかみかくし', attributes: [Sun], floor: 1, x: 111, y: 111, class: "バドミントン部", location: "1-5" },
    { id: 32, title: 'ハンドボール　水風船', reading: "ハンドボール　みずふうせん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "ハンドボール部", location: "部室棟" },
    { id: 33, title: 'ベーゴマ体験', reading: "ベーゴマたいけん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "ベーゴマ愛好会", location: "書道室" },
    { id: 34, title: '翠翔祭ライブ', reading: "すいしょうさいライブ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "ポピュラーソング部", location: "テキサス" },
    { id: 35, title: '九宝祭～翠嵐サラダボウル～', reading: "くほうさい～すいらんさらだぼうる～", attributes: [Sun], floor: 1, x: 111, y: 111, class: "演劇", location: "1-8" },
    { id: 36, title: '科学部LAB', reading: "かがくぶらぼ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "科学部", location: "物理実験室" },
    { id: 37, title: '王手！　盤上の祭典in翠嵐', reading: "おうて！　ばんじょうのさいてんいんすいらん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "棋道部", location: "生物室" },
    { id: 38, title: '翠嵐かるた道場', reading: "すいらんかるたどうじょう", attributes: [Sun], floor: 1, x: 111, y: 111, class: "競技かるた部", location: "書道室" },
    { id: 39, title: '翠嵐 Global Connection', reading: "すいらんぐろーばるこねくしょん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "国際交流委員会", location: "2-1" },
    { id: 40, title: '写真部作品展示', reading: "しゃしんぶさくひんてんじ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "写真部", location: "2階渡り廊下" },
    { id: 41, title: '翠嵐書道展', reading: "すいらんしょどうてん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "書道部", location: "3階渡り廊下" },
    { id: 42, title: '新聞配布', reading: "しんぶんはいふ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "翠嵐時報", location: "3階渡り廊下" },
    { id: 43, title: 'あつまれすうがく村', reading: "あつまれすうがくむら", attributes: [Sun], floor: 1, x: 111, y: 111, class: "数学研究部", location: "化学実験室" },
    { id: 44, title: 'のびるくん本舗', reading: "のびるくんほんぽ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "生徒会", location: "1-3" },
    { id: 45, title: '文化祭の情熱の半分でいいから生物部に分けて頂戴', reading: "ぶんかさいのじょうねつのはんぶんでいいからせいぶつぶにわけてちょうだい", attributes: [Sun], floor: 1, x: 111, y: 111, class: "生物部", location: "生物室" },
    { id: 46, title: '翠嵐茶館', reading: "すいらんちゃかん", attributes: [Sun, Soup], floor: 1, x: 111, y: 111, class: "茶道部", location: "被服室" },
    { id: 47, title: '鉄道研究同好会', reading: "てつどうけんきゅうぶ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "鉄道研究同好会", location: "社会科教室" },
    { id: 48, title: 'プラネタリウムと展示', reading: "ぷらねたりうむとてんじ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "天文部", location: "2-5" },
    { id: 49, title: '翠嵐万博～アートパビリオン～', reading: "すいらんばんぱく～あーとぱびりおん～", attributes: [Sun], floor: 1, x: 111, y: 111, class: "美術部", location: "美術室" },
    { id: 50, title: '文芸部の無料部誌配布', reading: "ぶんげいぶのむりょうぶしはいふ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "文芸部", location: "3階渡り廊下" },
    { id: 51, title: 'まんけん2025', attributes: [Sun], floor: 1, x: 111, y: 111, class: "漫研", location: "1-5" },
    { id: 52, title: '速球王', reading: "そっきゅうおう", attributes: [Sun], floor: 1, x: 111, y: 111, class: "野球部", location: "グラウンド" },
    { id: 53, title: 'ぴったり走れ！全力Q＆RUN！', reading: "ぴったりはしれ！ぜんりょくきゅーあんどらん", attributes: [Sun], floor: 1, x: 111, y: 111, class: "陸上競技部", location: "3-8" },
    { id: 54, title: '異世界ツアーからの脱出', reading: "いせかいつあーからのだっしゅつ", attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "選択A" },
    { id: 55, title: '3D空中構造ゼミ　探求発表', reading: "すりーでぃーりったいこうぞうぜみ　たんきゅうはっぴょう", attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "グラウンド" },
    { id: 56, title: '［革命］学生一人で企画やってみたPt(n+1)', reading: "［かくめい］がくせいひとりできかくやってみたPt(n+1)", attributes: [Sun], floor: 1, x: 111, y: 111, class: "有志", location: "2階渡り廊下" },
    { id: 57, title: 'アジアンダイニングスイランパラダイス', reading: "あじあんだいにんぐぱらだいす", attributes: [Moon, Soup], floor: 1, x: 111, y: 111, class: "定時制", location: "屋外" },
    { id: 58, title: '定時制 多文化共生研究会', reading: "ていじせい たぶんかきょうせいけんきゅうかい", attributes: [Moon], floor: 1, x: 111, y: 111, class: "定時制　多文化共生研究会", location: "2-1" },
    { id: 59, title: 'アジアンスイーツパラダイス', reading: "あじあんすいーつぱらだいす", attributes: [Moon, Soup], floor: 1, x: 111, y: 111, class: "定時制3,4年", location: "3-9" },
    { id: 60, title: 'イラスト・写真部', reading: "いらすと・しゃしんぶ", attributes: [Moon], floor: 1, x: 111, y: 111, class: "イラスト・写真部", location: "1-3" },
    /**ステージ */
    { id: 61, title: '演劇「僕らの生徒会戦争」', reading: "えんげき「ぼくらのせいとかいせんそう」", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "生徒会", location: "野外ステージ" },
    { id: 62, title: 'ミントブルー', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "野外ステージ" },
    { id: 63, title: 'Crown Quintet the 2nd', reading: "くらうんくいんてっとざせかんど", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "有志", location: "野外ステージ" },
    { id: 64, title: '定時制 多文化共生', reading: "ていじせい たぶんかきょうせい", attributes: [Moon, Drum], floor: 1, x: 111, y: 111, class: "定時制", location: "野外ステージ" },
    { id: 65, title: 'バスケットボール部', reading: "ばすけっとぼーるぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "バスケットボール部", location: "野外ステージ" },
    { id: 66, title: '翠嵐スター発掘', reading: "すいらんすたーはっくつ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "翠翔祭実行委員会総務部", location: "野外ステージ" },
    { id: 67, title: 'すぱげてぃ', attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "野外ステージ" },
    { id: 68, title: 'ミスミス・裏ミスミス', reading: "みすみす・うらみすみす", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "翠翔祭実行委員会総務部", location: "野外ステージ" },
    { id: 69, title: 'スイラン・ブラバン・ビックバン！', reading: "すいらん・ぶらばん・びっくばん", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "吹奏楽部", location: "体育館ステージ" },
    { id: 70, title: '弦楽部', reading: "げんがくぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "弦楽部", location: "体育館ステージ" },
    { id: 71, title: '書道部', reading: "しょどうぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "書道部", location: "体育館ステージ" },
    { id: 72, title: 'ダンス部', reading: "だんすぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "ダンス部", location: "体育館ステージ" },
    { id: 73, title: '音楽部', reading: "おんがくぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "音楽部", location: "体育館ステージ" },
    { id: 74, title: '朝鮮学校舞踊部', reading: "ちょうせんがっこうぶようぶ", attributes: [Sun, Drum], floor: 1, x: 111, y: 111, class: "有志", location: "体育館ステージ" },
];
