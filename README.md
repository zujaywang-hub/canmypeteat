# CanMyPetEat 🐾

Free pet food ingredient safety checker for dogs and cats.

**Live:** https://canmypeteat.app

---

## 部署步驟（照著做就好）

### Step 1：上傳到 GitHub

1. 去 https://github.com/new
2. Repository name 填 `canmypeteat`
3. 選 **Public**
4. **不要**勾 "Add a README file"
5. 點 **Create repository**

然後在你的電腦終端機執行以下指令（需要先安裝 Git）：

```bash
cd canmypeteat
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/zujaywang-hub/canmypeteat.git
git push -u origin main
```

### Step 2：部署到 Vercel

1. 去 https://vercel.com 用 GitHub 帳號登入
2. 點 **Add New → Project**
3. 選擇 `canmypeteat` repo
4. Framework 選 **Next.js**（應該會自動偵測）
5. 點 **Deploy**
6. 等 1-2 分鐘，部署完成！

### Step 3：連結域名

1. 在 Vercel 的專案頁面，點 **Settings → Domains**
2. 輸入 `canmypeteat.app`，點 Add
3. Vercel 會給你一條 DNS 紀錄（通常是 CNAME 或 A record）
4. 去 Porkbun 的 DNS 設定頁面，加入 Vercel 給你的紀錄
5. 等 5-30 分鐘 DNS 生效
6. 完成！🎉

---

## 技術架構

- **Frontend:** Next.js + React
- **Database:** 純前端本地比對（零 API 成本）
- **Hosting:** Vercel Free Tier
- **Domain:** canmypeteat.app (Porkbun)
- **Cost:** ~$15 USD/year (domain only)
