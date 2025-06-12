-- 1. announce テーブルの作成
CREATE TABLE announce (
  id BIGSERIAL PRIMARY KEY,
  headline TEXT,
  title TEXT,
  content TEXT,
  details TEXT,
  link TEXT,
  created_at timestamptz DEFAULT now()
);

-- 2. Row Level Security (RLS) の有効化
ALTER TABLE announce ENABLE ROW LEVEL SECURITY;

-- 3. RLS ポリシーの作成

-- SELECT: 全ユーザーが参照可能
CREATE POLICY "Allow select for all" ON announce
FOR SELECT
USING (true);

-- DELETE: 認証済みユーザーのみ削除可能（DELETEにはWITH CHECKは適用しません）
CREATE POLICY "Allow delete for authenticated" ON announce
FOR DELETE
USING (auth.uid() IS NOT NULL);

-- INSERT: 認証済みユーザーのみ挿入可能
CREATE POLICY "Allow insert for authenticated" ON announce
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- UPDATE: 認証済みユーザーのみ更新可能
CREATE POLICY "Allow update for authenticated" ON announce
FOR UPDATE
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);
