import Header from "@/components/Header/Header";
import Link from "next/link";
import "./not-found.scss";

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found__particles">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="not-found__particle" />
                ))}
            </div>

            <div className="not-found__content">
                <div className="not-found__icon">
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="55" stroke="#C5E063" strokeWidth="3" opacity="0.2"/>
                        <path d="M60 30V70M60 85V90" stroke="#C5E063" strokeWidth="8" strokeLinecap="round"/>
                        <circle cx="60" cy="60" r="50" stroke="#C5E063" strokeWidth="2" strokeDasharray="5 5" opacity="0.3"/>
                    </svg>
                </div>

                <div className="not-found__animation">
                    <h1 className="not-found__number">404</h1>
                </div>

                <h2 className="not-found__title">Página no encontrada</h2>
                
                <p className="not-found__description">
                    Lo sentimos, la página que buscas no existe o ha sido movida. 
                    Verifica la URL o regresa al inicio para encontrar lo que necesitas.
                </p>

                <div className="not-found__actions">
                    <Link href="/" className="not-found__button not-found__button--primary">
                        <span>←</span> Volver al inicio
                    </Link>
                    <Link href="/contacto" className="not-found__button not-found__button--secondary">
                        Contáctanos
                    </Link>
                </div>
            </div>
        </div>
    );
}