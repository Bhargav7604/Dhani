import React from "react";
import {
  StrengthIndicator,
  IndicatorItem,
} from "./PasswordStrengthIndicatorStyles";

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
}) => {
  const calculateStrength = (password: string) => {
    let strength = 0;
    if (/[0-9]/.test(password)) strength += 1; // Includes number
    if (/[A-Z]/.test(password)) strength += 1; // Includes uppercase
    if (/[a-z]/.test(password)) strength += 1; // Includes lowercase
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Includes special character
    return strength;
  };

  const strengthLevel = calculateStrength(password);

  return (
    <StrengthIndicator>
      {[1, 2, 3, 4].map((level) => (
        <IndicatorItem
          key={level}
          active={strengthLevel >= level}
          strengthLevel={strengthLevel}
        />
      ))}
    </StrengthIndicator>
  );
};

export default PasswordStrengthIndicator;
