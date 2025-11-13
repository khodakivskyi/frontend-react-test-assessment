import React, { forwardRef, useId, useState } from "react";
import "../styles/Input.css";

type InputProps = {
    label?: string;
    type?: "text" | "password" | "number" | "email";
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onClear?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            type = "text",
            value,
            defaultValue,
            placeholder,
            clearable,
            disabled,
            onChange,
            onClear,
        },
        ref,
    ) => {
        const id = useId();
        const [localValue, setLocalValue] = useState(defaultValue ?? "");
        const [isPasswordVisible, setPasswordVisible] = useState(false);

        const isControlled = value !== undefined;
        const currentValue = isControlled ? value : localValue;

        const inputType =
            type === "password" && isPasswordVisible ? "text" : type;

        const showPasswordToggle = type === "password";
        const showClearButton = Boolean(clearable && currentValue);
        const showActions = showPasswordToggle || showClearButton;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!isControlled) {
                setLocalValue(event.target.value);
            }
            onChange?.(event.target.value);
        };

        const handleClear = () => {
            if (!isControlled) {
                setLocalValue("");
            }
            onChange?.("");
            onClear?.();
        };

        return (
            <div className="input-root">
                {label && (
                    <label className="input-label" htmlFor={id}>
                        {label}
                    </label>
                )}

                <div className="input-wrapper">
                    <input
                        id={id}
                        ref={ref}
                        type={inputType}
                        value={currentValue}
                        placeholder={placeholder}
                        disabled={disabled}
                        onChange={handleChange}
                        className={`input-field${showActions ? " input-field--with-actions" : ""}`}
                    />

                    {showActions && (
                        <div className="input-actions">
                            {showPasswordToggle && (
                                <button
                                    type="button"
                                    className="input-action"
                                    onClick={() => setPasswordVisible((prev) => !prev)}
                                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                                >
                                    {isPasswordVisible ? "🙈" : "👁️"}
                                </button>
                            )}

                            {showClearButton && (
                                <button
                                    type="button"
                                    className="input-action"
                                    onClick={handleClear}
                                    aria-label="Clear"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    },
);