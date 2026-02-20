import React from "react";

interface DevTagProps {
    label: string;
}

/**
 * Tag visual de desenvolvedor — exibida no canto superior esquerdo de cada seção.
 * Usa position absolute, então o wrapper pai precisa ter position: relative.
 */
export const DevTag: React.FC<DevTagProps> = ({ label }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "rgba(15, 23, 42, 0.82)",
                    color: "#a3e635",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(163, 230, 53, 0.3)",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                }}
            >
                <span style={{ opacity: 0.6, fontSize: "9px" }}>DEV</span>
                {label}
            </span>
        </div>
    );
};
