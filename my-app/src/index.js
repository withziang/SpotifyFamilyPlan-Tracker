import React from 'react';
import PaymentTracker from './PaymentTracker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<PaymentTracker/>);