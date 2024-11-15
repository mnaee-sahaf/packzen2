'use client';

import { useEffect } from 'react';

export default function TawkToScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6737813e4304e3196ae34714/1icod1nkh';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return null; // This component does not render anything visible.
}
