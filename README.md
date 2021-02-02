
## Authentication System

### All the roles

| Role   | Description  |
| -----  | ------------ |
| Doctor | doctor       |
| Admin  |  admin       |

### Role Access Folders

All the access that roles has on folder structure:

```
├── Doctor
│   ├── /pages/doctor
├── Admin
|   └── /pages/admin
```

**Note : There is no simple login for a user**

### Auth credentials

1. admin login

   ```
   email       :  bipul7poudel@gmail.com
   password    :  12345678
   ```

2. doctor login

   ```
   email       :  admin2@admin.com
   password    :  12345678
   ```

### authorization impletementation

- route protection - UI part

  ```
  ├── Doctor
  │   ├── /layouts/Doctor
  ├── Admin
  |   └── /layouts/Admin
  ├── Auth Pages
  |   └── /layouts/Auth
  ```   
  
    1. Doctor Layout for all the pages doctor can access
    2. Admin Layout for all the pages admin can access
    3. Auth Layout for auth page redirect after logged in to system


