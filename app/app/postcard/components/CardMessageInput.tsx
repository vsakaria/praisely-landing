import { useForm } from 'react-hook-form';
import { StepProps } from './types';

interface CardMessageInputProps extends StepProps {
  setMessage: (message: string) => void;
}

export const CardMessageInput: React.FC<CardMessageInputProps> = ({
  nextStep,
  previousStep,
  setMessage
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{ message: string }>();

  const onSubmit = (data: { message: string }) => {
    setMessage(data.message);
    nextStep?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Write Your Message</h2>
      <textarea
        {...register("message", { 
          required: "Message is required",
          maxLength: { value: 500, message: "Message cannot exceed 500 characters" }
        })}
        className="w-full h-40 border p-2 rounded"
        placeholder="Write your message here..."
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Preview
        </button>
      </div>
    </form>
  );
}; 