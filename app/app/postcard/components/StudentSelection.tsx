import { useForm } from 'react-hook-form';
import { Student, StepProps } from './types';

interface StudentSelectionProps extends StepProps {
  setStudent: (data: Student) => void;
}

export const StudentSelection: React.FC<StudentSelectionProps> = ({ nextStep, setStudent }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Student>();
  
  const onSubmit = (data: Student) => {
    setStudent(data);
    nextStep?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Student Information</h2>
      
      <div className="space-y-2">
        <input
          {...register("studentName", { required: "Student name is required" })}
          placeholder="Student Name"
          className="w-full border p-2 rounded"
        />
        {errors.studentName && (
          <p className="text-red-500 text-sm">{errors.studentName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <select
          {...register("grade", { required: "Grade is required" })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Grade</option>
          <option value="K">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
        </select>
        {errors.grade && (
          <p className="text-red-500 text-sm">{errors.grade.message}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Next
      </button>
    </form>
  );
}; 