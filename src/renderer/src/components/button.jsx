// components/Button.jsx
import React from 'react'
import PropTypes from 'prop-types' // Para validar las propiedades
import './../styles/button.css'

const Button = ({ text, onClick, color = 'primary', size = 'medium', disabled = false, className}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`material-button ${className ? className : ''} ${color} ${size} ${disabled ? 'disabled' : ''}`}
    >
      {text}
    </button>
  )
}

// Validar las propiedades
Button.propTypes = {
  text: PropTypes.string.isRequired, // El texto es obligatorio
  onClick: PropTypes.func.isRequired, // La función onClick es obligatoria
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'default']), // Colores de Material Design
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Tamaños disponibles
  disabled: PropTypes.bool // Estado de habilitado o deshabilitado
}

// Establecer valores predeterminados para las propiedades
Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  disabled: false
}

export default Button
