"use client";
import { useState, useEffect } from 'react';

const AnimatedTitle = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Déclencher l'animation après un court délai pour assurer que le composant est monté
        const timer = setTimeout(() => {
        setIsLoaded(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden py-14 px-4 flex flex-col items-center text-center">
            <div className="relative">
                {/* Effet de fond animé */}
                <div className={`absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 rounded-2xl blur-3xl transition-all duration-1500 ease-out ${isLoaded ? 'scale-100' : 'scale-0'}`}></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    {/* Première ligne - "Bienvenue sur" */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                        {isLoaded && "Bienvenue sur".split('').map((char, index) => (
                        <span 
                            key={`welcome-${index}`}
                            className="inline-block transition-all duration-700 transform"
                            style={{ 
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: `${index * 40}ms` 
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                        ))}
                    </h2>
                    
                    {/* SMART ORDERS avec effet plus prononcé */}
                    <div className="mt-2 mb-4">
                        <h1 className="text-5xl md:text-6xl font-extrabold">
                            {"SMART ORDERS".split('').map((char, index) => (
                                <span 
                                key={`smart-${index}`}
                                className="inline-block transition-all duration-700 transform"
                                style={{ 
                                    color: isLoaded ? 
                                    index < 5 ? '#3b82f6' : // SMART en bleu
                                    '#8b5cf6' : // ORDERS en violet
                                    'transparent',
                                    opacity: isLoaded ? 1 : 0,
                                    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                                    transitionDelay: `${400 + (index * 80)}ms`,
                                    textShadow: isLoaded ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
                                }}
                                >
                                {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </h1>
                        
                        {/* Ligne animée sous le titre */}
                        <div 
                            className="h-1.5 rounded-full transition-all duration-1000 ease-out mt-3 mx-auto"
                            style={{ 
                                background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
                                width: isLoaded ? '100%' : '0%',
                                opacity: isLoaded ? 1 : 0,
                                transitionDelay: '1300ms'
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        
            {/* Slogan avec animation de fondu */}
            <p 
                className="text-md md:text-lg text-gray-600 font-medium max-w-2xl transition-all duration-1000"
                style={{ 
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '1500ms'
                }}
            >
                La solution intelligente pour révolutionner votre gestion de commandes
            </p>
        
            {/* Bouton Découvrir */}
            <button
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-700 transform hover:shadow-xl hover:scale-105"
                style={{ 
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '1700ms'
                }}
            >
                Découvrir
            </button>
        
            {/* Ligne décorative supplémentaire */}
            <div 
                className="mt-8 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-1000"
                style={{ 
                opacity: isLoaded ? 0.7 : 0,
                transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center',
                transitionDelay: '1800ms'
                }}
            ></div>
        </div>
    );
};

export default AnimatedTitle;