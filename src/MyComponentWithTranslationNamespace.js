import React from 'react';
import './style.css';
import { withTranslation } from 'react-i18next';

const MyComponentWithTranslation = ({ t }) => {
    return (
        <>
            <div>
                <span>withTranslation Hook</span>
            </div>
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

export default withTranslation()(MyComponentWithTranslation);
