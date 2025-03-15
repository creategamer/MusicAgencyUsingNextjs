import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/connection';
import { apiHandler } from '@/utils/apiHandler';
import { ContactSchema } from '@/utils/validateSchema';
import { ContactModel } from '@/lib/database/models/Contact';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const rawData = await request.json();
    const validatedData = ContactSchema.parse(rawData);

    // Database operations
    const { db } = await connectToDatabase();
    const result = await ContactModel.createContact(db, validatedData);

    return NextResponse.json({
      success: true,
      data: { id: result },
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return apiHandler(
      () => Promise.reject(error),
      'Failed to process contact form'
    );
  }
}