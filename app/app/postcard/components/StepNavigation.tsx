import { StepProps } from './types';

export const StepNavigation: React.FC<StepProps> = ({ previousStep, currentStep }) => (
  <div className="flex justify-between mt-6">
    {currentStep !== 1 && (
      <button
        onClick={previousStep}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Previous
      </button>
    )}
  </div>
); 