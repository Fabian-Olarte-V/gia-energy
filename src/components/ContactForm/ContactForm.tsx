'use client';
import { FormEvent, useMemo, useState } from 'react';
import './ContactForm.scss';
import { FormData } from '@/interfaces/contact/contact';
import { CITIES_OPTIONS, SERVICE_OPTIONS } from '@/lib/contactData/contactData';


const GRID_COLS = 3;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    selectedService: '',
    name: '',
    city: '',
    phone: '',
    email: ''
  });

  const [focusIdx, setFocusIdx] = useState(0);
  const [errors, setErrors] = useState<Record<keyof FormData, boolean>>({
    selectedService: false,
    name: false,
    city: false,
    phone: false,
    email: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      selectedService: !formData.selectedService,
      name: !formData.name.trim(),
      city: !formData.city,
      phone: !formData.phone.trim(),
      email: !formData.email.trim() || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    const row = Math.floor(focusIdx / GRID_COLS);
    const col = focusIdx % GRID_COLS;

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
        if (col < GRID_COLS - 1 && focusIdx + 1 < total) moveFocus(focusIdx + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (col > 0) moveFocus(focusIdx - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if ((row + 1) * GRID_COLS + col < total) moveFocus(focusIdx + GRID_COLS);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (row > 0) moveFocus(focusIdx - GRID_COLS);
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
      <div className='contact-form__title-container'>
        <h1 className="contact-form__title">
            Descubre tu ahorro en 60 segundos
        </h1>
        <p className='contact-form__subtitle'>
          Selecciona el rango que más se asemeje a tu gasto mensual en energía y completa tus datos
        </p>
      </div>
      <section className={`contact-form__service ${errors.selectedService ? 'contact-form__service--error' : ''}`}>
        <h2 className="contact-form__service-label">
          ¿Cuánto Pagas De Energía Mensualmente?
        </h2>

        <div
          className="contact-form__service-grid"
          role="radiogroup"
          aria-label="Rango de consumo energético"
          onKeyDown={onKeyDownGrid}
        >
          {SERVICE_OPTIONS.map((opt, idx) => (
            <button
              key={opt.value}
              type="button"
              className={`contact-form__service-option ${
                formData.selectedService === opt.value ? 'contact-form__service-option--selected' : ''
              }`}
              data-service-index={idx}
              role="radio"
              aria-checked={formData.selectedService === opt.value}
              aria-label={opt.label}
              tabIndex={selectedIndex === idx || (selectedIndex === -1 && idx === focusIdx) ? 0 : -1}
              onClick={() => handleSelect(opt.value)}
              onFocus={() => setFocusIdx(idx)}
            >
              <span className="contact-form__service-option-label">{opt.label}</span>
            </button>
          ))}
        </div>
        <input
          type="hidden"
          name="selectedService"
          value={formData.selectedService}
          aria-hidden="true"
        />
      </section>

      <form className="contact-form__main" onSubmit={handleSubmit} noValidate>
        <h2 className="contact-form__service-label">
          Ingresa Tus Datos Personales
        </h2>
        
        <div className="contact-form__grid">
          <input
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete="name"
            placeholder="Tu nombre completo"
            aria-label="Nombre completo"
          />

          <select
            className={`contact-form__input ${errors.city ? 'contact-form__input--error' : ''}`}
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            aria-label="Ciudad"
          >
            <option value="">Selecciona tu ciudad</option>
            {CITIES_OPTIONS.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <input
            className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            autoComplete="tel"
            placeholder="Número de teléfono"
            pattern="[0-9]*"
            aria-label="Teléfono"
          />

          <input
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
            placeholder="Correo electrónico"
            aria-label="Email"
          />
        </div>

        <div className="contact-form__submit-container">
          <button type="submit" className="contact-form__submit">
            Solicita tu cotización
          </button>
          {Object.values(errors).some(Boolean) && (
            <span className="contact-form__error-message" role="alert">
              Por favor completa todos los campos correctamente
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
