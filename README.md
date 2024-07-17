# Project Specs
This prject was developed based on :
- Node.js 
- React JS
- PHP
- Laravel
- MySQL

# Setup

## Back-end
### Database creation
Create a database with a given name, create a user for it with the necessary privileges, then write the config on the .env file in the back.

### Database migration
cd into the backend folder and follow the next commands
<br>
<br>
<br>
<br>
run database migration 
```cmd
php artisan migrate 
```

run the server
```cmd
php artisan serve
```

drop all table and insert data
```cmd
php artisan migrate:fresh --seed
```
## Front-end
cd into the frontend folder and follow the next commands

```cmd
npm install
```
