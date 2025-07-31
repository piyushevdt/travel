import { Stepper, Step, StepLabel } from '@mui/material';

const BookingStepper = ({ activeStep, steps }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default BookingStepper;