# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
![image](https://user-images.githubusercontent.com/90350582/178807524-2f61ac95-785d-411a-8333-3f83c450f9ca.png)

# Получаем контакт по id
node index.js --action get --id 5
![image](https://user-images.githubusercontent.com/90350582/178807696-56b2cb29-44d0-4f8b-a413-6e83b377f978.png)

# Добавялем контакт
node index.js --action add --id 13 --name Mango --email mango@gmail.com --phone 322-22-22
![image](https://user-images.githubusercontent.com/90350582/178808039-eb8b91a1-6f54-4b25-8583-4675093ddff6.png)

# Удаляем контакт
node index.js --action remove --id=3
![image](https://user-images.githubusercontent.com/90350582/178808150-402f7acc-d8d5-4cd8-b60d-9fbcfba9b935.png)

PS: 
# Получаем обновлённый список контактов после добавленя и удаления некоторых контактов:
node index.js --action list
![image](https://user-images.githubusercontent.com/90350582/178808513-5eeee23f-254d-426d-824e-7f8741a37370.png)
