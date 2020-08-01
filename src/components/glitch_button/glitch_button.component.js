import React from 'react';
import 'glitch_button.css';

/**
 * # Glitch Submit Button
 *
 * I stole this code online xd
 *
 * @param {*} props.name - for the name of on the button
 *
 * @author Byron Wezvo
 */
function GlitchButton({ name }) {
  return (
    <button type="submit" class="btn effect04" data-sm-link-text="Litchi">
      <span>{name}</span>
    </button>
  );
}

export default GlitchButton;
