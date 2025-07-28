import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('The contact list is empty. There is nothing to delete.');
      return;
    }

    const removed = contacts[contacts.length - 1];
    contacts.pop();

    await writeContacts(contacts);
    console.log('Last contact deleted:', removed);
  } catch (error) {
    console.error('Error deleting last contact:', error.message);
  }
};

removeLastContact();
