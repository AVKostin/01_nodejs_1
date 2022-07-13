const contacts = require("./db/contacts");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "getAll":
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getContactById(id);
            !oneContact
                ? console.log(`No contact with ID:"${id}"`)
                : console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact(
                `${id}`,
                name,
                email,
                phone,
            );
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contacts.updateContactById(
                `${id}`,
                name,
                email,
                phone,
            );
            !updateContact
                ? console.log(`Don't update contact. No such ID:"${id}"`)
                : console.log(updateContact);
            break;
        case "removeById":
            const removeContact = await contacts.removeContact(id);
            !removeContact
                ? console.log(`Don't delete contact. No such ID:"${id}"`)
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
