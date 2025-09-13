'use client';
// 1. ADD `useEffect` to your imports
import { useState, useEffect } from 'react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';



// Helper function to get category emoji
const getCategoryEmoji = (category: string) => {
  switch (category) {
    case 'Food':
      return '🍔';
    case 'Transportation':
      return '🚗';
    case 'Shopping':
      return '🛒';
    case 'Entertainment':
      return '🎬';
    case 'Bills':
      return '💡';
    case 'Healthcare':
      return '🏥';
    default:
      return '📦';
  }
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  // 2. ADD these two lines to manage the date string on the client
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted
    if (record?.date) {
      setFormattedDate(new Date(record.date).toLocaleDateString());
    }
  }, [record?.date]); // It will re-run if the record date changes

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true); // Show loading spinner
    await deleteRecord(recordId); // Perform delete operation
    setIsLoading(false); // Hide loading spinner
  };

  // Determine border color based on expense amount
  const getBorderColor = (amount: number) => {
    if (amount > 100) return 'border-red-500'; // High expense
    if (amount > 50) return 'border-yellow-500'; // Medium expense
    return 'border-green-500'; // Low expense
  };

  return (
<li
  className={`relative group bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/50 dark:border-gray-600/50 border-l-4 ${getBorderColor(
    record?.amount
  )} h-30`} // <-- New, shorter height
>
      {/* Delete button is a child of the `li` and will not be clipped */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`absolute -top-2 -right-2 z-10 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white dark:border-gray-700 transform hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-200 ${
          isLoading ? 'cursor-not-allowed' : ''
        }`}
        aria-label='Delete record'
        disabled={isLoading}
        title='Delete expense record'
      >
        {isLoading ? (
          <div className='w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin'></div>
        ) : (
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </button>

      {/* Inner container with padding, using flex to distribute content vertically */}
      <div className='w-full h-full p-3 sm:p-4 flex flex-col justify-between'>
        {/* Top section: Date and Amount */}
        <div className='flex items-start justify-between'>
          <span className='text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase'>
            {formattedDate}
          </span>
          <span className='text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100'>
            ₹{record?.amount.toFixed(2)}
          </span>
        </div>

        {/* Middle section: Category */}
        <div className='flex items-center gap-2 my-1'>
          <span className='text-base sm:text-lg'>
            {getCategoryEmoji(record?.category)}
          </span>
          <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
            {record?.category}
          </span>
        </div>

        {/* Bottom section: Description */}
        <div 
          className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'
          title={record?.text} // Tooltip is still useful
        >
          <p className='break-words line-clamp-2'>{record?.text}</p>
        </div>
      </div>
    </li>
  );
};

export default RecordItem;