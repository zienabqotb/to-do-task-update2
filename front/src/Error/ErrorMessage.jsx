import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ onRetry }) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4 text-center">
      {/* Animated Error Icon */}
      <div className="animate-pulse rounded-full bg-red-50 p-4">
        <AlertCircle className="h-10 w-10 text-red-600" />
      </div>

      {/* Error Message */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Failed to load todos
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Something went wrong while fetching your todos.
          <br />
          Please try again.
        </p>
      </div>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-700 active:scale-95"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
