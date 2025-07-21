import re
from guests_data import get_all_guests

def update_guest_data():
    """script.jsのゲストデータを一括更新する"""
    
    # ============================================
    # ★★ ゲストデータをguests_data.pyから取得 ★★
    # ============================================
    try:
        new_guests = get_all_guests()
        print(f"📋 guests_data.pyから{len(new_guests)}人のゲストデータを読み込みました")
    except Exception as e:
        print(f"❌ guests_data.pyの読み込みエラー: {e}")
        return False
    # ============================================
    
    try:
        # script.jsファイルを読み込み
        with open('script.js', 'r', encoding='utf-8') as file:
            content = file.read()
        
        print("📖 script.jsを読み込みました")
        
        # 現在のゲストデータを取得
        pattern = r"const GUESTS = \[(.*?)\];"
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            current_guests_str = match.group(1)
            print("📋 現在のゲストデータが見つかりました")
        else:
            print("⚠️ 現在のゲストデータが見つかりません")
        
        # 新しいゲストデータを文字列として整形
        guests_str_list = []
        for guest in new_guests:
            guest_str = f'''        {{
                "id": "{guest['id']}",
                "name": "{guest['name']}",
                "relationship": "{guest['relationship']}",
                "message": "{guest['message']}",
                "specialEffect": "{guest['specialEffect']}"
        }}'''
            guests_str_list.append(guest_str)
        
        guests_array = "[\n" + ",\n".join(guests_str_list) + "\n]"
        
        # ゲストデータを置き換え
        updated_content = re.sub(
            r"const GUESTS = \[.*?\];",
            f"const GUESTS = {guests_array};",
            content,
            flags=re.DOTALL
        )
        
        # script.jsに書き込み
        with open('script.js', 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print("✅ script.jsのゲストデータを更新しました")
        print(f"🔄 新しいゲスト数: {len(new_guests)}人")
        
        # ゲスト一覧を表示
        print("\n👥 登録されたゲスト:")
        for guest in new_guests:
            print(f"  • ID: {guest['id']} - {guest['name']} ({guest['relationship']})")
        
        # README.mdも更新
        update_readme_guests(new_guests)
        
        return True
        
    except FileNotFoundError:
        print("❌ script.jsファイルが見つかりません")
        return False
    except Exception as e:
        print(f"❌ エラーが発生しました: {e}")
        return False

def update_readme_guests(guests):
    """README.mdのゲスト情報も自動更新"""
    try:
        with open('README.md', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # ゲスト情報テーブルを作成
        table_header = "| ゲストID | 名前 | 関係性 |\n|----------|------|--------|"
        table_rows = "\n".join([
            f"| {guest['id']} | {guest['name']} | {guest['relationship']} |" 
            for guest in guests
        ])
        new_table = f"{table_header}\n{table_rows}"
        
        # 既存のテーブルを置き換え
        pattern = r"\| ユーザーID.*?\n(\| [^|]+ +\|\n)*"
        updated_content = re.sub(pattern, new_table + "\n", content, flags=re.DOTALL)
        
        with open('README.md', 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print("✅ README.mdのゲスト情報も更新しました")
        return True
        
    except Exception as e:
        print(f"⚠️ README.md更新時にエラー: {e}")
        return False

if __name__ == "__main__":
    print("🎊 ゲストデータ一括更新ツール")
    print("="*50)
    
    success = update_guest_data()
    
    if success:
        print("\n🎉 ゲストデータ更新完了！")
        print("📱 Webアプリを再読み込みしてメッセージを確認してください")
        print("\n💡 使用方法:")
        print("1. 更新されたゲストIDを入力")
        print("2. 「メッセージを表示」ボタンをクリック")
        print("3. 封筒をタップしてメッセージを確認")
    else:
        print("\n💥 更新に失敗しました")
    
    print("\n" + "="*50)
