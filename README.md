// README.md

# Stol Tennis API

Bu API stol tennisi vaqtlarini boshqarish va to‘lovlarni qayd etish uchun yaratilgan.

## O'rnatish

1. Loyihani klonlang:

   ```bash
   git clone <repository-url>
   ```

2. Loyihaning ichiga kiring:

   ```bash
   cd table-tennis-api
   ```

3. Kerakli paketlarni o‘rnating:

   ```bash
   npm install
   ```

4. MongoDB-ni ishga tushiring va `mongodb://localhost:27017/table_tennis` manzilida mavjud ekanligiga ishonch hosil qiling.

5. Loyihani ishga tushiring:
   ```bash
   npm run start:dev
   ```

## API ishlatish

### To'lov qo'shish

**URL:** `/payments`  
**Method:** `POST`

**Body:**

```json
{
  "tableName": "1-stol",
  "startTime": "2025-01-08T10:00:00.000Z",
  "endTime": "2025-01-08T11:00:00.000Z",
  "duration": 60, // minutda
  "amount": 30000, // so'mda
  "isPaid": true
}
```

**Javob:**

```json
{
  "_id": "64e3a2f1e2f4e43c1a6c3452",
  "tableName": "1-stol",
  "startTime": "2025-01-08T10:00:00.000Z",
  "endTime": "2025-01-08T11:00:00.000Z",
  "duration": 60,
  "amount": 30000,
  "isPaid": true,
  "__v": 0
}
```

### To'lovlar ro'yxati

**URL:** `/payments`  
**Method:** `GET`

**Query params:**

- `page`: Sahifa raqami (ixtiyoriy, default: 1)
- `limit`: Har bir sahifadagi yozuvlar soni (ixtiyoriy, default: 10)

**Javob:**

```json
{
  "data": [
    {
      "_id": "64e3a2f1e2f4e43c1a6c3452",
      "tableName": "1-stol",
      "startTime": "2025-01-08T10:00:00.000Z",
      "endTime": "2025-01-08T11:00:00.000Z",
      "duration": 60,
      "amount": 30000,
      "isPaid": true
    }
  ],
  "total": 1
}
```

## Fake Data

Test uchun quyidagi ma'lumotlardan foydalanishingiz mumkin:

```json
[
  {
    "tableName": "1-stol",
    "startTime": "2025-01-08T09:00:00.000Z",
    "endTime": "2025-01-08T10:30:00.000Z",
    "isPaid": true
  },
  {
    "tableName": "2-stol",
    "startTime": "2025-01-08T11:00:00.000Z",
    "endTime": "2025-01-08T12:00:00.000Z",
    "isPaid": false
  },
  {
    "tableName": "3-stol",
    "startTime": "2025-01-08T13:00:00.000Z",
    "endTime": "2025-01-08T14:00:00.000Z",
    "isPaid": true
  }
]
```

Bu ma'lumotlarni Postman yoki boshqa API test vositalarida ishlatib tekshirishingiz mumkin.
