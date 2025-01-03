export interface Student {
  studentName: string;
  grade: string;
}

export interface ImageData {
  path: string;
  url: string;
}

export interface StepProps {
  nextStep?: () => void;
  previousStep?: () => void;
  currentStep?: number;
  totalSteps?: number;
} 