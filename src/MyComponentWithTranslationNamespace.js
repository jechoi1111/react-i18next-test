import React from 'react';
import './style.css';
import { withTranslation } from 'react-i18next';

const MyComponentWithTranslationNamespace = ({ t }) => {
    return (
        <>
            <div>
                <span>withTranslation Hook & Namespace</span>
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

export default withTranslation(['one'], {keyPrefix: 'oneDepth' })(MyComponentWithTranslationNamespace);
