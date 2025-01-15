interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="fixed bottom-4 right-4 z-50">
    <div className="bg-red-500/90 text-white px-4 py-2 rounded-lg text-sm">
      {message}
    </div>
  </div>
);

export default ErrorMessage;