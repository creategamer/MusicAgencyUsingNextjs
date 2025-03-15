import { Db } from 'mongodb';

interface Contact {
  email: string;
  message: string;
  createdAt: Date;
}

export const ContactModel = {
  async createContact(db: Db, contact: Omit<Contact, 'createdAt'>) {
    try {
      const result = await db.collection<Contact>('contacts').insertOne({
        ...contact,
        createdAt: new Date(),
      });

      return result.insertedId;
      
    } catch (error) {
      console.error('Contact creation error:', error);
      throw new Error('Failed to create contact');
    }
  },

  async getContacts(db: Db, limit = 10) {
    try {
      return await db.collection<Contact>('contacts')
        .find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
        
    } catch (error) {
      console.error('Contact retrieval error:', error);
      throw new Error('Failed to fetch contacts');
    }
  }
};