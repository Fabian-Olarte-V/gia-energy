'use client';

import { FormEvent, useMemo, useState } from 'react';
import './ContactForm.scss';

interface ServiceOption {
  value: string;
  label: string;
}

interface FormData {
  selectedService: string;
  name: string;
  email: string;
  message: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'service1', label: '5 a 10 Millones' },
  { value: 'service2', label: '10 a 20 Millones' },
  { value: 'service3', label: '25 a 30 Millones' },
  { value: 'service4', label: '30 a 35 Millones' },
  { value: 'service5', label: '50 a 60 Millones' },
  { value: 'service6', label: '70 a 80 Millones' },
];

const COLS = 2;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    selectedService: '',
    name: '',
    email: '',
    message: '',
  });

  const [focusIdx, setFocusIdx] = useState(0);
  const [errors, setErrors] = useState<Record<keyof FormData, boolean>>({
    selectedService: false,
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      selectedService: !formData.selectedService,
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim()
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }
    
    console.log(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSelect = (value: string) => {
    setErrors(prev => ({ ...prev, selectedService: false }));
    setFormData(prev => ({ ...prev, selectedService: value }));
  };

  const onKeyDownGrid = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const total = SERVICE_OPTIONS.length;
    const row = Math.floor(focusIdx / COLS);
    const col = focusIdx % COLS;

    const moveFocus = (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setFocusIdx(clamped);
      const el = document.querySelector<HTMLButtonElement>(
        `[data-service-index="${clamped}"]`
      );
      el?.focus();
    };

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (col < COLS - 1 && focusIdx + 1 < total) moveFocus(focusIdx + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (col > 0) moveFocus(focusIdx - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if ((row + 1) * COLS + col < total) moveFocus(focusIdx + COLS);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (row > 0) moveFocus(focusIdx - COLS);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSelect(SERVICE_OPTIONS[focusIdx].value);
        break;
    }
  };

  const selectedIndex = useMemo(
    () => SERVICE_OPTIONS.findIndex(s => s.value === formData.selectedService),
    [formData.selectedService]
  );

  return (
    <div className="contact-form">
      <div className={`contact-form__service ${errors.selectedService ? 'contact-form__service--error' : ''}`}>
        <label className="contact-form__service-label">
          ¿Cuantos Pagas De Luz Mensualmente?
        </label>

        <div
          className={`contact-form__service-grid`}
          role="radiogroup"
          aria-label="Servicios"
          onKeyDown={onKeyDownGrid}
        >
          {SERVICE_OPTIONS.map((opt, idx) => {
            const selected = formData.selectedService === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={
                  'contact-form__service-option' +
                  (selected ? ' contact-form__service-option--selected' : '')
                }
                data-service-index={idx}
                role="radio"
                aria-checked={selected}
                aria-label={opt.label}
                tabIndex={
                  selectedIndex >= 0
                    ? selectedIndex === idx
                      ? 0
                      : -1
                    : idx === focusIdx
                    ? 0
                    : -1
                }
                onClick={() => handleSelect(opt.value)}
                onFocus={() => setFocusIdx(idx)}
              >
                <span className="contact-form__service-option-label">
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
        <input
          type="text"
          name="selectedService"
          value={formData.selectedService}
          onChange={() => {}}
          required
          hidden
        />
      </div>

      <form className="contact-form__main" onSubmit={handleSubmit} noValidate>
        <label className="contact-form__service-label contact-form__service-label--form">
          Ingresa Tus Datos Y Te Contactaremos
        </label>
        <div className="contact-form__input-group">
          <input
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete="name"
            placeholder='Tu nombre'
          />
        </div>

        <div className="contact-form__input-group">
          <input
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
            inputMode="email"
            placeholder='Tu email'
          />
        </div>

        <div className="contact-form__input-group">
          <textarea
            className={`contact-form__input contact-form__input--textarea ${errors.message ? 'contact-form__input--error' : ''}`}
            id="message"
            name="message"
            rows={4}
            placeholder='Dejanos tu mensaje'
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='contact-form__submit-container'>
          <button type="submit" className="contact-form__submit button-template">
            Enviar
          </button>
          {errors.selectedService && (
            <span className="contact-form__error-message">
              Por favor completa todos los campos
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
