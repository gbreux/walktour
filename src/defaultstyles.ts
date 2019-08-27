import { CSSProperties } from "react";


// this file and it's contents are temporary: this logic is moved here to clean up the index.tsx file during refactoring and will be relocated
export interface DefaultStyles {
  container: CSSProperties;
  footer: CSSProperties;
  title: CSSProperties;
  description: CSSProperties;
  wrapper: CSSProperties;
  primaryButton: CSSProperties;
  secondaryButton: CSSProperties;
  tertiaryButton: CSSProperties;
  disabledButton: CSSProperties;
}
const baseButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 300,
  cursor: 'pointer',
  height: 32,
  lineHeight: '32px',
  padding: '0 16px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  border: 0,
  borderRadius: 3,
  outline: 'none',
  backgroundColor: '#0084ff',
  color: '#fff',
  fontSize: 14,
  marginLeft: 10,
};

export const defaultStyles: DefaultStyles = {
  container: {
    maxWidth: 500,
    backgroundColor: 'white',
    padding: 10,
    zIndex: 2,
    position: 'absolute',
    borderRadius: '5px',
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0 3px 8px 0 rgba(0,0,0,.25)',
  },
  footer: {
    padding: '10px 0 0',
    textAlign: 'right',
    display: 'flex',
  },
  title: {
    marginBottom: 8,
    letterSpacing: 'normal',
    color: '#000000',
    fontSize: 24,
    fontStyle: 'normal',
  },
  description: {
    marginBottom: 15,
    color: '#4d4d4d',
    fontSize: 12,
    lineHeight: 1.25,
  },
  primaryButton: {
    ...baseButtonStyle,
    backgroundColor: "#0084ff",
    color: "#ffffff"
  },
  secondaryButton: {
    ...baseButtonStyle,
    backgroundColor: "#8400ff",
    color: "#fff",
    border: "solid 1px #8400ff"
  },
  tertiaryButton: {
    ...baseButtonStyle,
    backgroundColor: `transparent`,
    color: "#025c53",
    border: "solid 1px #025c53"
  },
  disabledButton: {
    ...baseButtonStyle,
    backgroundColor: "#bebebe",
    color: "#989898",
    cursor: "default"
  },
  wrapper: {
    position: 'absolute',
    zIndex: 99,
    transition: 'all 100ms ease',
  }
}