-- 1. profiles テーブルの作成
CREATE TABLE profiles (
  id uuid PRIMARY KEY,
  role text DEFAULT 'user'::text,
  CONSTRAINT fk_profiles_users FOREIGN KEY (id)
    REFERENCES auth.users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- 2. Row Level Security (RLS) の有効化
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 3. RLS ポリシーの作成

-- SELECT ポリシー：認証済みユーザーのみ自身のデータを参照可能
CREATE POLICY "Allow select for self" ON profiles
FOR SELECT
USING (auth.uid() = id);

-- INSERT ポリシー：認証済みユーザーのみ自身のデータを挿入可能
CREATE POLICY "Allow insert for self" ON profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- DELETE ポリシー：認証済みユーザーのみ自身のデータを削除可能
CREATE POLICY "Allow delete for self" ON profiles
FOR DELETE
USING (auth.uid() = id);

-- UPDATE ポリシー：認証済みユーザーのみ自身のデータを更新可能
CREATE POLICY "Allow update for self" ON profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);
