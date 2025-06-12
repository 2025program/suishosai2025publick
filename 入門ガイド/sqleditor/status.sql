-- 1. status テーブルの作成
CREATE TABLE status (
  id BIGSERIAL PRIMARY KEY,  -- int8の自動連番としてBIGSERIALを利用
  name TEXT,
  status TEXT,
  ticket TEXT,
  numbered BOOL DEFAULT false
);

-- 2. Row Level Security (RLS) の有効化
ALTER TABLE status ENABLE ROW LEVEL SECURITY;

-- 3. RLS ポリシーの作成

-- SELECT: 全ユーザーがデータを参照可能
CREATE POLICY "Allow select for all" ON status
FOR SELECT
USING (true);

-- DELETE: 認証済みユーザーのみ削除可能
CREATE POLICY "Allow delete for authenticated" ON status
FOR DELETE
USING (auth.uid() IS NOT NULL);

-- INSERT: 認証済みユーザーのみ挿入可能
CREATE POLICY "Allow insert for authenticated" ON status
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- UPDATE: 認証済みユーザーのみ更新可能
CREATE POLICY "Allow update for authenticated" ON status
FOR UPDATE
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);
