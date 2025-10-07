'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getBestWorstExpense(): Promise<{
  bestExpense?: number;
  worstExpense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // Create a date object for 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const records = await db.record.findMany({
      where: {
        userId,
        // Add the same date filter here
        date: {
          gte: thirtyDaysAgo,
        },
      },
      select: { amount: true },
    });

    if (!records || records.length === 0) {
      return { bestExpense: 0, worstExpense: 0 };
    }

    const amounts = records.map((record) => record.amount);

    const bestExpense = Math.max(...amounts);
    const worstExpense = Math.min(...amounts);

    return { bestExpense, worstExpense };
  } catch (error) {
    console.error('Error fetching expense amounts:', error);
    return { error: 'Database error' };
  }
}

export default getBestWorstExpense;