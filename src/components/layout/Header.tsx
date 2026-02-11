import React from 'react';
import { Button } from '../ui/Button';

export const Header = () => {
    return (
        <header className="w-full h-[var(--header-height)] bg-[var(--surface-page)]/80 backdrop-blur-md sticky top-0 z-[var(--z-sticky)] border-b border-[var(--border-subtle)] flex items-center justify-between px-[var(--container-padding-x-mobile)] md:px-[var(--container-padding-x-desktop)] max-w-[var(--container-max)] mx-auto">
            <div className="font-display font-bold text-xl text-[var(--action-strong)]">
                Nail Designer
            </div>
            <div>
                {/* Placeholder for potential nav or CTA */}
                <Button variant="primary" className="text-sm px-4 py-2 h-auto">
                    Matrículas Abertas
                </Button>
            </div>
        </header>
    );
};
