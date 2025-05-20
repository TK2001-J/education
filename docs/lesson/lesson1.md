
# บทเรียนที่ 1: บทนำและโครงสร้างโปรเจค (แบบละเอียด)

## 1. ความเป็นมาและวัตถุประสงค์ของโปรเจค
โปรเจคนี้เป็นระบบจัดการข้อมูลและเอกสารภายในองค์กร (TJP Logistics Portal) ที่ออกแบบมาเพื่อ:
- **จัดการไฟล์และโฟลเดอร์:** รองรับการอัปโหลด ดาวน์โหลด และการจัดการสิทธิ์การเข้าถึง
- **ระบบประกาศและข่าวสาร:** แจ้งเตือนและประกาศกิจกรรมสำคัญในองค์กร
- **Dashboard สถิติและกิจกรรม:** แสดงข้อมูลการใช้งานระบบ
- **การจัดการผู้ใช้และสิทธิ์การเข้าถึง:** ระบบ Login แยกผู้ใช้และผู้ดูแล (JWT-based Authentication)

---

## 2. ทำไมถึงเลือกใช้เทคโนโลยีนี้

### Frontend
- **React 18:** เนื่องจาก React เป็นไลบรารีที่ได้รับความนิยมสูงและมี Community ใหญ่ รองรับการสร้าง UI ที่ทันสมัย
- **Vite:** Vite เป็นเครื่องมือ Build ที่เร็วกว่า CRA (Create React App) และรองรับการใช้งานกับ TypeScript, JSX และ CSS Modules
- **TailwindCSS:** เป็น CSS Framework ที่ช่วยให้เราสามารถสร้าง UI ได้อย่างรวดเร็ว โดยไม่ต้องเขียน CSS ซ้ำซ้อน

### Backend
- **Node.js + Express:** Node.js เหมาะกับการสร้าง API และจัดการกับ I/O ขนาดใหญ่ ส่วน Express ช่วยในการจัดการ Routing และ Middleware
- **MySQL:** เลือกใช้ MySQL เพราะเป็นฐานข้อมูลเชิงสัมพันธ์ (Relational Database) ที่มีโครงสร้างชัดเจน รองรับการ Query ข้อมูลแบบ SQL

---

## 3. โครงสร้างโปรเจค

### Frontend
```
- src/
  - components/
  - context/
  - hooks/
  - icon/
  - img/
  - lib/
  - service/
  - styles/
  - utils/
- public/
- package.json
- vite.config.js
- Dockerfile
```
- **src/components:** 
  - `Page`: หน้าหลักและหน้ารอง เช่น Dashboard, User Management
  - `modals`: Modal Popup สำหรับการแก้ไขข้อมูล
  - `ui`: UI Components เช่น Button, Card, Calendar

- **src/context:**
  - `AuthContext.jsx`: บริหารจัดการสถานะผู้ใช้ เช่น การ Login, Logout
  - `AdminAuthContext.jsx`: บริหารจัดการสถานะ Admin

- **src/hooks:**
  - `useActivityLogging.jsx`: Hook สำหรับบันทึกกิจกรรมผู้ใช้

- **src/lib:**
  - `AlertUtils.jsx`: ฟังก์ชันการแสดงแจ้งเตือน
  - `markdownUtils.jsx`: ฟังก์ชันการแปลง Markdown เป็น HTML

- **public:** เก็บไฟล์รูปภาพ โลโก้ favicon

### Backend
```
- uploads/
  - announcements/
  - file_manager/
  - forms/
  - handbook/
- server.js
- routes.js
- db.js
- authMiddleware.js
- package.json
```
- **uploads:** เก็บไฟล์อัปโหลดจากผู้ใช้ แยกตามประเภท
- **server.js:** จุดเริ่มต้นของเซิร์ฟเวอร์ ใช้ในการรัน Express
- **routes.js:** กำหนดเส้นทาง API
- **db.js:** การเชื่อมต่อกับ MySQL
- **authMiddleware.js:** Middleware สำหรับการตรวจสอบ JWT Token

---

## 4. ขั้นตอนการติดตั้งและเตรียมความพร้อม
### 4.1 ติดตั้ง Node.js และ npm
- ดาวน์โหลดและติดตั้ง Node.js: [https://nodejs.org](https://nodejs.org)
- ตรวจสอบการติดตั้ง:
```
node -v
npm -v
```

### 4.2 ติดตั้ง MySQL
- ดาวน์โหลดและติดตั้ง MySQL Server: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
- สร้างฐานข้อมูลใหม่:
```
CREATE DATABASE tjp_logistics_db;
```

---

## 5. สรุป
ในบทนี้ เราได้เรียนรู้ถึงที่มาและวัตถุประสงค์ของโปรเจค TJP Logistics Portal รวมถึงการวางโครงสร้างไฟล์และเหตุผลในการเลือกใช้เทคโนโลยีต่าง ๆ ในบทถัดไป เราจะเริ่มติดตั้งโปรเจคและตั้งค่า Environment Variables

