import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

const MyComponentNamespace = () => {
    const { t } = useTranslation('transition_ko', {keyPrefix: 'translationTest.oneDepth.twoDepth.threeDepth'});

    return (
        <>
            <div>
                <span>Namespace</span>
            </div>
        <table>
            <tbody>
            <tr>
                <th>{t('key')}</th>
                <th>{t('value')}</th>
                <th>{t('description')}</th>
            </tr>
            <tr>
                <td>{t('value-1')}</td>
                <td>{t('value-2')}</td>
                <td>{t('value-3')}</td>
            </tr>
            </tbody>
        </table>
        </>
    );
};

export {MyComponentNamespace};
