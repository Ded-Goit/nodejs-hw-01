import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    // Зчитуємо існуючі контакти
    const existingContacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    // Об'єднуємо старі та нові контакти
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо оновлений список у файл
    await writeContacts(updatedContacts);

    console.log(
      `Added successfully ${number} contacts. In total now: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error(
      'An error occurred while generating contacts:',
      error.message,
    );
  }
};

generateContacts(5);
