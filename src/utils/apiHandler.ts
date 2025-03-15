import { NextResponse } from 'next/server';

type HandlerFunction<T> = () => Promise<T>;

export async function apiHandler<T>(
  handler: HandlerFunction<T>,
  errorMessage: string
): Promise<NextResponse> {
  try {
    const result = await handler();
    return NextResponse.json(result);
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}