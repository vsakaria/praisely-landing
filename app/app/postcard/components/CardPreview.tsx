import { Student, ImageData, StepProps } from './types';

interface CardPreviewProps extends StepProps {
  student: Student | null;
  design: ImageData | null;
  message: string | null;
}

export const CardPreview: React.FC<CardPreviewProps> = ({
  previousStep,
  student,
  design,
  message
}) => {
  const handleSubmit = async () => {
    try {
      // TODO: Implement your submission logic here
      console.log('Submitting postcard:', { student, design, message });
    } catch (error) {
      console.error('Error submitting postcard:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Preview Your Postcard</h2>
      
      <div className="border rounded p-4 space-y-4">
        <div>
          <h3 className="font-bold">To:</h3>
          <p>{student?.studentName} - Grade {student?.grade}</p>
        </div>
        
        {design && (
          <img
            src={design.url}
            alt="Selected design"
            className="w-full h-48 object-cover rounded"
          />
        )}
        
        <div>
          <h3 className="font-bold">Message:</h3>
          <p className="whitespace-pre-wrap">{message}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Send Postcard
        </button>
      </div>
    </div>
  );
}; 