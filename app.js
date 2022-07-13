const contacts = require("./db");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "getAll":
            const allContacts = await contacts.getAll();
            console.table(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getById(id);
            !oneContact
                ? console.log(`Нет контакта с ID = ${id}`)
                : console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.add(`${id}`, name, email, phone);
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contacts.updateById(
                `${id}`,
                name,
                email,
                phone,
            );
            if (!updateContact) {
                throw new Error(`Product with id=${id} not found`);
            }
            break;
        case "removeById":
            const removeContact = await contacts.removeById(id);
            !removeContact
                ? console.log(`Не могу удалить контакт. Нет такого ID = ${id}`)
                : console.log(removeContact);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
