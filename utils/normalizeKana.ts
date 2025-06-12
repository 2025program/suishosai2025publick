// utils/normalizeKana.ts

/**
 * カタカナをひらがなに変換する関数
 * @param str - 変換したい文字列
 * @returns ひらがなに変換された文字列
 */
export function katakanaToHiragana(str: string): string {
    return str.replace(/[\u30A1-\u30F6]/g, (match) => {
        const chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}

/**
 * 全角文字を半角文字に変換する関数
 * @param str - 変換したい文字列
 * @returns 半角に変換された文字列
 */
export function fullWidthToHalfWidth(str: string): string {
    return str.normalize('NFKC');
}

/**
 * 文字列を正規化する関数（小文字化、全角から半角へ、カタカナからひらがなへ、スペースを削除）
 * @param str - 正規化したい文字列
 * @returns 正規化された文字列
 */
export function normalizeString(str: string): string {
    return katakanaToHiragana(fullWidthToHalfWidth(str.toLowerCase())).replace(/\s+/g, '');
}

/**
 * タイトルと読み仮名を正規化して検索用の文字列を生成する関数
 * 読み仮名が存在する場合はそれを使用し、存在しない場合はタイトルのみを使用する
 * @param title - タイトル文字列
 * @param reading - 読み仮名文字列（オプショナル）
 * @returns 正規化された検索用文字列
 */
export function normalizeSearchString(title: string, reading?: string): string {
    const normalizedTitle = normalizeString(title);
    const normalizedReading = reading ? normalizeString(reading) : '';
    return `${normalizedTitle} ${normalizedReading}`.trim();
}
