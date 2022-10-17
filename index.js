const contacts = require("./db/contacts");
const { program } = require("commander");

const invokeAction = async ({ action, id: contactId, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(contactId);
            !oneContact
                ? console.log(`Not contact with ID:"${contactId}"`)
                : console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact(
                contactId,
                name,
                email,
                phone,
            );
            console.log(newContact);
            break;
        case "remove":
            const removeContact = await contacts.removeContact(contactId);
            !removeContact
                ? console.log(`Don't delete contact. No such ID:"${contactId}"`)
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
invokeAction(options).then().catch(console.error());
