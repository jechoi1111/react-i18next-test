import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
    const { t } = useTranslation();

    return (
        <>
        <table>
            <tbody>
            <tr>
                <th>{t('w.key')}</th>
                <th>{t('w.value')}</th>
                <th>{t('w.description')}</th>
            </tr>
            <tr>
                <td>{t('w.value-1')}</td>
                <td>{t('w.value-2')}</td>
                <td>{t('w.value-3')}</td>
            </tr>
            </tbody>
        </table>
        </>
    );
};

export {MyComponent};
