import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

export const AlertSuccess = (message: string) => {
    Alert.success(message, {
        position: 'bottom-right',
        effect: 'bouncyflip',
    });
};

export const AlertError = (message: string) =>
    Alert.error(message, {
        position: 'bottom-right',
        effect: 'bouncyflip',
    });
