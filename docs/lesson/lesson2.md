
# บทเรียนที่ 2: การติดตั้งและการตั้งค่าโปรเจค

## 1. การติดตั้ง Node.js และ npm

Node.js และ npm เป็นเครื่องมือพื้นฐานที่เราจะใช้ในการพัฒนาโปรเจคนี้

### 1.1 ดาวน์โหลดและติดตั้ง Node.js
- เข้าไปที่ [https://nodejs.org](https://nodejs.org)
- ดาวน์โหลด LTS Version (แนะนำให้ใช้เวอร์ชันล่าสุด)

### 1.2 ตรวจสอบการติดตั้ง
หลังจากติดตั้งเสร็จแล้ว ให้เปิด Terminal (Command Prompt/PowerShell) และพิมพ์คำสั่ง:

```
node -v
npm -v
```

---

## 2. การติดตั้ง MySQL และการสร้างฐานข้อมูล

### 2.1 ดาวน์โหลดและติดตั้ง MySQL
- ดาวน์โหลด MySQL Server: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
- ทำการติดตั้งและจดจำรหัสผ่าน root

### 2.2 การสร้างฐานข้อมูล
เปิด MySQL Command Line Client หรือ MySQL Workbench และรันคำสั่งต่อไปนี้:

```sql
CREATE DATABASE tjp_logistics_db;
USE tjp_logistics_db;
```

---

## 3. การติดตั้งและรัน Frontend

### 3.1 เข้าไปในโฟลเดอร์ Frontend
```
cd frontend
```

### 3.2 ติดตั้ง Dependencies
```
npm install
```

### 3.3 รันโปรเจค
```
npm run dev
```

- หากการติดตั้งสำเร็จ จะเห็นข้อความ `VITE vX.X.X  ready in XXms` 
- เปิดเบราว์เซอร์และเข้าไปที่: `http://localhost:3000`

---

## 4. การติดตั้งและรัน Backend

### 4.1 เข้าไปในโฟลเดอร์ Backend
```
cd backend
```

### 4.2 ติดตั้ง Dependencies
```
npm install
```

### 4.3 ตั้งค่า Environment Variables
สร้างไฟล์ `.env` ในโฟลเดอร์ backend:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=tjp_logistics_db
JWT_SECRET=your_jwt_secret
```

### 4.4 รัน Backend
```
node server.js
```

- หากการติดตั้งสำเร็จ จะเห็นข้อความ `Server is running on port 5000`
- เปิดเบราว์เซอร์และเข้าไปที่: `http://localhost:5000`

---

## 5. การเชื่อมต่อ Frontend กับ Backend

### 5.1 ตั้งค่า API URL ใน Frontend
เปิดไฟล์ `src/service/homeService.jsx` แล้วแก้ไข URL:

```jsx
const API_URL = "http://localhost:5000";
```

### 5.2 การทดสอบการเชื่อมต่อ
- เปิด Frontend (`localhost:3000`)
- เปิด Backend (`localhost:5000`)
- ลอง Login หรืออัปโหลดไฟล์

---

## 6. สรุป
ในบทนี้ เราได้เรียนรู้การติดตั้ง Node.js, MySQL และการตั้งค่าโปรเจคทั้งในส่วน Frontend และ Backend รวมถึงการเชื่อมต่อระหว่าง Frontend กับ Backend ในบทถัดไป เราจะเริ่มพัฒนา Frontend และสร้าง Components ต่าง ๆ

