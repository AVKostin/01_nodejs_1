const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

// receive contacts
const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};

// get contact by id
const getContactById = async (id) => {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === `${id}`);
    if (!result) {
        return null;
    }
    return result;
};

// delete contact by id
const removeContact = async (id) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === `${id}`);
    if (idx === -1) {
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    updateContacts(contacts);
    return removeContact;
};

// add contact
const addContact = async (id, name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: `${id}`,
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
